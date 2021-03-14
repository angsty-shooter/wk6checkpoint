<template>
<div class="post info">
  Post Info
  <Post/>
</div>
</template>

<script>
import { AppState } from '../AppState'
import { onMounted, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postService } from '../services/PostService'

export default {
  name: 'PostInfo',
  setup () {
    const route = useRoute()
    // const router = useRouter()
    const state = reactive({
      post: computed(() => AppState.activePost)
    })

    onMounted(() => {
      postService.getPostId(route.params.id)
    })

    return {
      route,
      state
    }
  }
}
</script>

<style>

</style>

<template>
  <div class="post details">
    Post Details
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { onMounted, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postService } from '../services/PostService'

export default {
  name: 'PostDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      post: computed(() => AppState.activePost)
    })

    onMounted(() => {
      postService.getPost(route.params.id)
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

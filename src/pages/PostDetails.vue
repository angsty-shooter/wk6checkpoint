<template>
  <div class="post details">
    Post Details
    <div class="card post">
      <img class="card-img-left" :src="state.post.creator? state.post.creator.picture:'https://scontent.fboi1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/96512275_946798435782469_5510567294171873280_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2d5d41&_nc_ohc=MNIJn15VBTEAX9UQSxN&_nc_ht=scontent.fboi1-1.fna&tp=14&oh=789d9cb8ab4ec2bef8bd6deb8d18e672&oe=60722C4D'" alt="post-image">
      <h5 class="title p-3">
        {{ state.post.title }}
      </h5>
      <p class="author p-3">
        <!-- {{ post.creator.name }} -->
      </p>
    </div>
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

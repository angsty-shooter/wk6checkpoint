<template>
  <div class="row">
    <Post v-for="post in state.posts" :key="post" :postData="post" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive, computed, onMounted } from 'vue'
import Post from '../components/post'
import { postService } from '../services/PostService'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      posts: computed(() => AppState.posts)
      // newPosts: {}
    })

    onMounted(() => {
      postService.getposts()
    })

    return {
      state
    }
  },
  components: {
    Post
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>

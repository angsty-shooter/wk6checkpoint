<template>
<div class="container">
  <div class="row">
    <!-- NOTE v-for is grabbing a singular post from state -->
    <!-- NOTE Key identifies child post from component -->
    <!-- NOTE postData is a prop grabbing the object type with its name -->
    <Post v-for="postData in state.posts" :key="postData.id" :post="postData" />
  </div>
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
      // NOTE state.posts is storing all of the posts
      posts: computed(() => AppState.posts)
    })

    // NOTE on Mountedt() grabs posts on page load (aka AppState.posts)
    onMounted(() => {
      postService.getPosts()
    })

    return {
      state
    }
  },
  // NOTE the components we are using on this page
  components: {
    Post
  }
}
</script>

<style scoped lang="scss">
.home{
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>

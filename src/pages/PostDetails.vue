<template>
  <div class="container-fluid" v-if="state.post.id">
    <div class="row">
      <div class="col" v-if="state.user.isAuthenticated">
        <button class="btn btn-danger" v-if="state.post.creator.email == state.user.email" @click="deletePost">
          Delete
        </button>
      </div>
    </div>
    <div class="row mt-5 post">
      <div class="col-4">
        <img class="img-center" :src="state.post.creator? state.post.creator.picture:'https://scontent.fboi1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/96512275_946798435782469_5510567294171873280_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2d5d41&_nc_ohc=MNIJn15VBTEAX9UQSxN&_nc_ht=scontent.fboi1-1.fna&tp=14&oh=789d9cb8ab4ec2bef8bd6deb8d18e672&oe=60722C4D'" alt="post-image">
      </div>
      <div class="col">
        <h5 class="title">
          {{ state.post.title }}
        </h5>
        <p class="body">
          {{ state.post.body }}
        </p>
        <p class="author p-3">
          {{ state.post.creator.name }}
        </p>
      </div>
    </div>
    <form @submit.prevent="createComment">
      <div class="form-group">
        <label for="inputComment"></label>
        <input v-model="state.newComment.body" type="text"
               class="form-control" id="inputComment"
               aria-describedby="comment"
               placeholder="Leave a Comment"
        >
      </div>
      <button class="btn btn-info" type="submit">
        Submit
      </button>
    </form>
    <!-- Comments -->
    <Comment class="row" v-for="commentData in state.comments" :key="commentData.id" :comment="commentData" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { onMounted, reactive, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { postService } from '../services/PostService'
import { commentService } from '../services/CommentService'
import Comment from '../components/comment'

export default {
  name: 'PostDetails',
  setup() {
    const route = useRoute()
    const router = useRouter()
    const state = reactive({
      post: computed(() => AppState.activePost),
      comments: computed(() => AppState.comments),
      user: computed(() => AppState.user),
      newComment: {}
    })

    onMounted(() => {
      postService.getPostId(route.params.id)
      commentService.getComments(route.params.id)
    })

    return {
      route,
      state,
      user: computed(() => AppState.user),
      async deletePost() {
        postService.deletePost(state.post.id)
      },
      async createComment() {
        state.newComment.blog = AppState.activePost._id
        state.newComment.creator = AppState.user.name
        console.log(state.newComment)
        commentService.createComment(state.newComment)
      }
    }
  },
  components: {
    Comment
  }
}
</script>

<style>

</style>

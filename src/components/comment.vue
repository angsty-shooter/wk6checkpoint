<template>
  <div class="card col-8 offset-2">
    <!-- <img class="card-img" :src="post.creator? post.creator.picture:'https://scontent.fboi1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/96512275_946798435782469_5510567294171873280_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2d5d41&_nc_ohc=MNIJn15VBTEAX9UQSxN&_nc_ht=scontent.fboi1-1.fna&tp=14&oh=789d9cb8ab4ec2bef8bd6deb8d18e672&oe=60722C4D'" alt="post-image"> -->
    <p class="body">
      {{ comment.body }}
    </p>
    <p class="author p-3" v-if="comment.creator">
      {{ comment.creator.name }}
    </p>
    <div class="div" v-if="comment.creator.email == state.user.email" @click="deleteComment">
      <button class="btn btn-danger" v-if="state.user.isAuthenticated">
        Delete
      </button>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
import { AppState } from '../AppState'
import { commentService } from '../services/CommentService'
export default {
  name: 'Comment',
  props: {
    comment: Object
  },
  setup(props) {
    const state = reactive({
      user: computed(() => AppState.user),
      comment: props.comment
    })

    return {
      state,
      async deleteComment() {
        commentService.deleteComment(state.comment.id)
      }
    }
  }
}
</script>

<style>

</style>

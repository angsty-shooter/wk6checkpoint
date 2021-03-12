<template>
  <div class="col-4">
    <div class="card post">
      <img class="card-img-top" :src="post.creator? post.creator.picture:''" alt="post-image">
      <h4 class="card title">{{post.title}}</h4>
      <p class="card author">{{post.body}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props: {
    post: Object
  },

  setup () {
    return {}
  },
  components: {}
}
</script>

<style>

</style>

<template>
  <div class="col-3">
    <div class="card post mt-3">
      <img class="card-img-top" :src="post.creator? post.creator.picture:'https://scontent.fboi1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/96512275_946798435782469_5510567294171873280_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2d5d41&_nc_ohc=MNIJn15VBTEAX9UQSxN&_nc_ht=scontent.fboi1-1.fna&tp=14&oh=789d9cb8ab4ec2bef8bd6deb8d18e672&oe=60722C4D'" alt="post-image">
      <h4 class="card title">{{post.title}}</h4>
      <p class="card body">{{post.body}}</p>
      <p class="card author">{{post.creator.name}}</p>
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

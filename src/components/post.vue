<template>
  <div class="col-3 mt-3">
    <div class="card post">
      <img class="card-img-top" :src="post.creator? post.creator.picture:'https://scontent.fboi1-1.fna.fbcdn.net/v/t1.0-9/fr/cp0/e15/q65/96512275_946798435782469_5510567294171873280_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=2d5d41&_nc_ohc=MNIJn15VBTEAX9UQSxN&_nc_ht=scontent.fboi1-1.fna&tp=14&oh=789d9cb8ab4ec2bef8bd6deb8d18e672&oe=60722C4D'" alt="post-image">
      <h5 class="title p-3">{{post.title}}</h5>
      <p class="body p-3" style="overflow-y:scroll">{{post.body}}</p>
      <p class="author p-3">{{post.creator.name}}</p>
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
.author{
  color: lightgrey;
}

.card, .card-img-top{
  border-radius: 10px;
}

.body{
  height: 100px;
}
</style>

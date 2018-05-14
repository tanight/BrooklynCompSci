<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Follow Us At</h2>
     <ul class="social">
      <li><a href="/" target="_blank"><img src="../assets/social/facebook.png"></a></li>
      <li><a href="/" target="_blank"><img src="../assets/social/instagram.png"></a></li>
      <li><a href="/" target="_blank"><img src="../assets/social/slack.png"></a></li>
      <li><a href="/" target="_blank"><img src="../assets/social/twitter.png"></a></li>
      <li><a href="/" target="_blank"><img src="../assets/social/youtube.png"></a></li>
    </ul>
    <h2>More</h2>
    <ul>
      <li><a href="http://www.brooklyn.cuny.edu/web/home.php" target="_blank">Brooklyn College Home</a></li>
      <li><a href="https://portal.brooklyn.edu/uPortal/f/welcome/normal/render.uP" target="_blank">Web Central Portal</a></li>
      <li><a href="https://www.facebook.com/brooklyncollege/" target="_blank">Facebook</a></li>
      <li><a href="https://bit.ly/2IeoGDZ" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "hello",
  data() {
    return {
      msg: "Computer Science Club Webpage"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: maroon;
}

.social img {
  width: 14%;
  margin: 0;
}
</style>
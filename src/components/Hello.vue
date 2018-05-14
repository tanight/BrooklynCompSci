<template>
  <div class="hello">
    
     <h1>{{ msg }}</h1>
     
    <coverflow :coverList="coverList" :coverWidth="260" :coverHeight="260" :index="2"></coverflow>

    <h2>Follow Us On</h2>
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
      <li><a href="https://www.facebook.com/brooklyncollege/" target="_blank">Brooklyn College Facebook</a></li>
      <li><a href="https://bit.ly/2IeoGDZ" target="_blank">Brooklyn College Twitter</a></li>
    </ul>
  </div>
</template>

<script>
import Coverflow from "../components/Coverflow";

export default {
  name: "hello",
  data() {
    return {
      msg: "Computer Science Club Webpage",
      coverList: [
        {
          cover: "http://ogu51f989.bkt.clouddn.com/react.png",
          title: "React"
        },
        {
          cover: "http://ogu51f989.bkt.clouddn.com/angular.png",
          title: "Angular"
        },
        {
          cover: "http://ogu51f989.bkt.clouddn.com/vue.png",
          title: "Vue"
        },
        {
          cover: "http://ogu51f989.bkt.clouddn.com/webpack.png",
          title: "Webpack"
        },
        {
          cover: "http://ogu51f989.bkt.clouddn.com/yarn.png",
          title: "Yarn"
        },
        {
          cover: "http://ogu51f989.bkt.clouddn.com/node.png",
          title: "Node"
        }
      ]
    };
  },
  components: {
    Coverflow
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
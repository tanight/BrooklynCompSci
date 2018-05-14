import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Hello from "./components/Hello";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Event from "./components/Event";

const routes = [
  //define the root url of the application
  {
    path: "/",
    component: Hello
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/event",
    component: Event
  },
  {
    path: "/faq",
    component: FAQ
  },

];

const router = new VueRouter({
  routes,
  mode: "history"
});

new Vue({
  el: "#app",
  template: "<App/>",
  components: {
    App
  },
  router
}).$mount("#app");

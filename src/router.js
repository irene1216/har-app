import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Faq from "./views/Faq.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/faq",
      name: "faq",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Faq.vue")
    },
  ]
});

// router.afterEach((to, from, next) => {
//   window.scrollTo(0,0);
//   Promise.resolve()
//     .then(()=> {
//       url: global.location.href
//     })
// })

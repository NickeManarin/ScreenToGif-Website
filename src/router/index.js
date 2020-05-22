import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/home",
    redirect: "/"
  },

  {
    path: "/downloads",
    name: "Downloads",
    // Route level code-splitting: this generates a separate chunk (downloads.[hash].js) for this route which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Downloads" */ "@/views/Downloads.vue")
  },
  {
    path: "/download",
    redirect: "/downloads"
  },
  {
    path: "/releases",
    redirect: "/downloads"
  },

  {
    path: "/donation",
    name: "Donation",
    component: () => import(/* webpackChunkName: "Donation" */ "@/views/Donation.vue")
  },
  {
    path: "/donate",
    redirect: "/donation"
  },

  {
    path: "/screenshots",
    name: "Screenshots",
    component: () => import(/* webpackChunkName: "Screenshots" */ "@/views/Screenshots.vue")
  },
  {
    path: "/screenshot",
    redirect: "/screenshots"
  },
  {
    path: "/images",
    redirect: "/screenshots"
  },

  {
    path: "/documentation",
    name: "Documentation",
    component: () => import(/* webpackChunkName: "Documentation" */ "@/views/Documentation.vue")
  },
  {
    path: "/docs",
    redirect: "/documentation"
  },

  {
    path: "/contact",
    name: "Contact",
    component: () => import(/* webpackChunkName: "Contact" */ "@/views/Contact.vue")
  },
  {
    path: "/about",
    redirect: "/contact"
  },

  {
    path: "/share",
    name: "Share",
    component: () => import(/* webpackChunkName: "Share" */ "@/views/Share.vue")
  },
  {
    path: "/src",
    redirect: "/source"
  },

  {
    path: "/source",
    name: "Source",
    component: () => import(/* webpackChunkName: "Source" */ "@/views/Source.vue")
  },
  {
    path: "/src",
    redirect: "/source"
  },

  {
    path: "/404",
    name: "404",
    component: () => import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue")
  },
  {
    path: "*", //Everything else will result in a 404 page.
    redirect: "/404"
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    //When the route changes, the page should scroll back to the top.
    document.getElementById('app').scrollIntoView({
      behavior: 'smooth'
    });
  }
});

export default router;
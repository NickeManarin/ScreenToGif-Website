import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "Home",
    alias: "/home", //The URL remains '/' when trying to visit '/home'.
    component: Home
  },
  {
    path: "/downloads",
    name: "Downloads",
    alias: ['/download', '/releases'], 
    // Route level code-splitting: this generates a separate chunk (downloads.[hash].js) for this route which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Downloads" */ "@/views/Downloads.vue")
  },
  {
    path: "/donation",
    name: "Donation",
    alias: '/donate', 
    component: () => import(/* webpackChunkName: "Donation" */ "@/views/Donation.vue")
  },
  {
    path: "/screenshots",
    name: "Screenshots",
    alias: ['/screenshot', '/images'], 
    component: () => import(/* webpackChunkName: "Screenshots" */ "@/views/Screenshots.vue")
  },
  {
    path: "/documentation",
    name: "Documentation",
    alias: "/docs", 
    component: () => import(/* webpackChunkName: "Documentation" */ "@/views/Documentation.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    alias: "/about", 
    component: () => import(/* webpackChunkName: "Contact" */ "@/views/Contact.vue")
  },
  {
    path: "/source",
    name: "Source",
    alias: "/src", 
    component: () => import(/* webpackChunkName: "Source" */ "@/views/Source.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
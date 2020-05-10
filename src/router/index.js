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
    component: () => import("@/views/Downloads.vue")
  },
  {
    path: "/donation",
    name: "Donation",
    alias: '/donate', 
    component: () => import("@/views/Donation.vue")
  },
  {
    path: "/screenshots",
    name: "Screenshots",
    alias: ['/screenshot', '/images'], 
    component: () => import("@/views/Screenshots.vue")
  },
  {
    path: "/documentation",
    name: "Documentation",
    alias: "/docs", 
    component: () => import("@/views/Documentation.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    alias: "/about", 
    component: () => import("@/views/Contact.vue")
  },
  {
    path: "/source",
    name: "Source",
    alias: "/src", 
    component: () => import("@/views/Source.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
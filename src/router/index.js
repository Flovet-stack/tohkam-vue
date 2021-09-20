import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "@/views/auth/Login.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    meta: { layout: DefaultLayout },
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    meta: { layout: AuthLayout },
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

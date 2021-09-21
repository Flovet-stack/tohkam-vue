import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Login from "@/views/auth/Login.vue";
import Reports from "@/views/Reports.vue";

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
  {
    path: "/reports",
    name: "reports",
    meta: { layout: DefaultLayout },
    component: Reports,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

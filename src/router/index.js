import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import Login from "@/views/auth/Login.vue";
import Reports from "@/views/Reports.vue";
import ReportDetails from "@/views/ReportDetails.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: DefaultLayout },
    component: Home,
  },
  {
    path: "/login",
    name: "login",
    meta: { layout: AuthLayout },
    component: Login,
  },
  {
    path: "/reports",
    name: "reports",
    meta: { layout: DefaultLayout },
    component: Reports,
  },
  {
    path: "/report/:id",
    name: "report",
    meta: { layout: DefaultLayout },
    component: ReportDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

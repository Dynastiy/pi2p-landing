import Vue from "vue";
import VueRouter from "vue-router";


// Success Pages
import SuccessPage from "@/components/utils/EventSuccess";
import UtilitiesSuccess from "@/components/utils/SuccessCard"

// New Route Modules
import TradeRoutes from "./modules/trades";
import AuthRoutes from "./modules/auth";
import TransactionRoutes from "./modules/transactions";
import DashboardRoutes from "./modules/dashboard";
import Utilities from "./modules/utilities";
import HomeRoutes from "./modules/home"

Vue.use(VueRouter);

const routes = [
  // success page
  {
    path: "/success",
    component: SuccessPage,
    name: "success-page",
    meta: {
      layout: "DashboardLayout",
    },
  },

  {
    path: "/utilities-success",
    component: UtilitiesSuccess,
    name: "utilities-success",
    meta: {
      layout: "DashboardLayout",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(
    DashboardRoutes,
    HomeRoutes,
    TradeRoutes,
    AuthRoutes,
    TransactionRoutes,
    Utilities
  ),
});

export default router;

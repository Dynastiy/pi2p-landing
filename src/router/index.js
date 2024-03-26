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
import KYC from "@/modules/user/views/kyc/router"

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
    Utilities,
    KYC
  ),
});

router.beforeEach((to, from, next) => {
  var isLoggedIn = localStorage.getItem('token');
  // Check if the route requires authentication
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if the user is authenticated
    if (!isLoggedIn) {
      // Redirect to the login page
      next({ path: '/login', query: { redirectFrom: to.fullPath } })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router;

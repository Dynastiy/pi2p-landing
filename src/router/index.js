import Vue from "vue";
import VueRouter from "vue-router";

// Modules
import HomeRoutes from "@/modules/landing/router";
import WalletRoutes from "@/modules/user/views/wallet/router";
import KYC from "@/modules/user/views/kyc/router";
import Trades from "@/modules/user/views/trades/router";
import Profile from "@/modules/user/views/profile/router";
import Transactions from "@/modules/user/views/transactions/router";
import Orders from "@/modules/user/views/orders/router";

// Success Page
import SuccessPage from "@/modules/user/components/modals/EventSuccess";

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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routes.concat(
    HomeRoutes,
    WalletRoutes,
    KYC,
    Trades,
    Profile,
    Transactions,
    Orders
  ),
});

export default router;

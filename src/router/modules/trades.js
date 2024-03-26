import Trades from "@/modules/user/pages/trades/IndexPage.vue";
import Orders from "@/modules/user/pages/trades/OrdersPage.vue";

import MyTradeID from "@/modules/user/pages/trades/_id/MyTradeID.vue";
import Trade from "@/modules/user/pages/trades/_id/TradeID.vue";

import Order from "@/modules/user/pages/trades/_id/OrderID.vue";

import CreateTrade from "@/modules/user/pages/trades/CreateTrade.vue"

const router = [
  {
    path: "/trades",
    name: "all-trades",
    component: Trades,
    meta: {
      layout: "DashboardLayout",
      requiresAuth: true,
      parent: "trades",
      name: "trades",
    },
  },

  {
    path: "/trade/:id/buy-pi",
    name: "trade-details",
    component: Trade,
    meta: {
      layout: "DashboardLayout",
      requiresAuth: true,
      parent: "trades",
      name: "trades",
    },
  },

  {
    path: "/trade/:id",
    name: "my-trade-details",
    component: MyTradeID,
    meta: {
      layout: "DashboardLayout",
      requiresAuth: true,
      parent: "trades",
      name: "trades",
    },
  },

  {
    path: "/create-trade",
    name: "create-trade",
    component: CreateTrade,
    meta: {
      layout: "DashboardLayout",
      requiresAuth: true,
      parent: "trades",
      name: "trades",
    },
  },

  {
    path: "/orders",
    name: "all-orders",
    component: Orders,
    meta: {
      layout: "DashboardLayout",
      requiresAuth: true,
      parent: "trades",
      name: "orders",
    },
  },

  {
    path: "/order/:id",
    name: "order-details",
    component: Order,
    meta: {
      layout: "DashboardLayout",
      requiresAuth: true,
      parent: "trades",
      name: "orders",
    },
  },
  
];

export default router;

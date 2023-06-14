import IndexView from "../views/IndexView.vue";

const router = [
  {
    path: "/orders",
    name: "orders",
    component: IndexView,
    meta: {
      layout: "DashboardLayout",
    },
  },
];

export default router;

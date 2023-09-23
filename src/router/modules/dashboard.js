import Dashboard from "@/modules/user/pages/IndexPage.vue";

const router = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      layout: "DashboardLayout",
      parent: "dashboard",
      name: "dashboard",
    },
  },
];

export default router;

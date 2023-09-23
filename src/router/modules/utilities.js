
import Utilities from "@/modules/user/pages/utilities/IndexView.vue"
import AirtimePurchase from "@/modules/user/pages/utilities/AirtimePurchase.vue"
import DataSubscription from "@/modules/user/pages/utilities/DataPurchase"

const router = [

  {
    path: "/utilities",
    name: "utilities",
    component: Utilities,
    meta: {
      layout: "DashboardLayout",
      parent: "utilities",
      name: "utilities",
    },
  },

  {
    path: "/utilities/airtime",
    name: "airtime-recharge",
    component: AirtimePurchase,
    meta: {
      layout: "DashboardLayout",
      parent: "utilities",
      name: "airtime recharge",
    },
  },

  {
    path: "/utilities/data",
    name: "data-subscription",
    component: DataSubscription,
    meta: {
      layout: "DashboardLayout",
      parent: "utilities",
      name: "data subscription",
    },
  },

  {
    path: "/utilities/electricity-bill",
    name: "electricity-bill",
    component: DataSubscription,
    meta: {
      layout: "DashboardLayout",
      parent: "utilities",
      name: "electricity bill",
    },
  },
];

export default router;

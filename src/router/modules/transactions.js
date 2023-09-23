import Transactions from "@/modules/user/pages/transactions/IndexView.vue";
import Withdrawal from "@/modules/user/pages/transactions/WithdrawalVue.vue";
import Deposit from "@/modules/user/pages/transactions/DepositView.vue";


const router = [
  {
    path: "/transactions",
    name: "transactions",
    component: Transactions,
    meta: {
      layout: "DashboardLayout",
      parent: "transactions",
      name: "transactions",
    },
  },

  {
    path: "/withdrawal",
    name: "withdrawal",
    component: Withdrawal,
    meta: {
      layout: "DashboardLayout",
      parent: "transactions",
      name: "withdrawal",
    },
  },

  {
    path: "/deposit",
    name: "verify-email",
    component: Deposit,
    meta: {
      layout: "DashboardLayout",
      parent: "transactions",
      name: "deposit",
    },
  },

];

export default router;

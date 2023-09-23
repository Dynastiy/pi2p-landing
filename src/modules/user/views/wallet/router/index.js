import DepositFunds from '../views/DepositFunds.vue'
import HomeView from '../views/IndexView.vue'
import WithdrawFunds from '../views/WithdrawFunds.vue'

import DepositPI from '../views/DepositPi.vue'

const router = [
    {
      path: '/home',
      name: 'user',
      component: HomeView,
      meta: {
        layout: "DashboardLayout"
      }
    },
    {
      path: '/this-deposit',
      name: 'deposit',
      component: DepositFunds,
      meta: {
        layout: "DashboardLayout"
      }
    },
    {
      path: '/deposit-pi',
      name: 'deposit-pi',
      component: DepositPI,
      meta: {
        layout: "DashboardLayout"
      }
    },
    {
      path: '/withdraw',
      name: 'withdraw',
      component: WithdrawFunds,
      meta: {
        layout: "DashboardLayout"
      }
    },
   
  ]

  export default router
import BuyPi from '../views/BuyPi.vue'
import Transactions from '../views/IndexView.vue'

const router = [
    {
      path: '/buy-ad',
      name: 'buy-pi',
      component: BuyPi,
      meta: {
        layout: "DashboardLayout"
      }
    },

    {
      path: '/transactions',
      name: 'transactions',
      component: Transactions,
      meta: {
        layout: "DashboardLayout"
      }
    },
  ]

  export default router
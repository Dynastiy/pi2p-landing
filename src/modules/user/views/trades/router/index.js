import BuyPi from '../views/BuyPi.vue'
import Trades from '../views/IndexView.vue'
import MyTrades from '../views/MyTrades.vue'
import SellPi from '../views/SellPi.vue'
import MyTradesID from "../views/tradesID.vue"

const router = [
    {
      path: '/trades/buy-ad/:id',
      name: 'buy-pi',
      component: BuyPi,
      meta: {
        layout: "DashboardLayout"
      }
    },
    {
      path: '/trades/sell',
      name: 'sell-pi',
      component: SellPi,
      meta: {
        layout: "DashboardLayout"
      }
    },
    {
      path: '/trades',
      name: 'trades',
      component: Trades,
      meta: {
        layout: "DashboardLayout"
      }
    },
    {
      path: '/my-sell-ads',
      name: 'my-sell-ads',
      component: MyTrades,
      meta: {
        layout: "DashboardLayout"
      }
    },
    {
      path: '/my-sell-ads/:id',
      name: 'my-sell-ads-details',
      component: MyTradesID,
      meta: {
        layout: "DashboardLayout"
      }
    },
   
  ]

  export default router
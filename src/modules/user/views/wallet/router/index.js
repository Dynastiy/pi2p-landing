import HomeView from '../views/IndexView.vue'

const router = [
    {
      path: '/home',
      name: 'user',
      component: HomeView,
      meta: {
        layout: "DashboardLayout"
      }
    },
   
  ]

  export default router

import HomeView from '../pages/IndexPage.vue'

const router = [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: HomeView,
      meta: {
        layout: "DashboardLayout",
        name: 'dashboard', 
        parent: 'dashboard'
      }
    },
    
   
  ]

  export default router
import ProfileHome from '../views/IndexView.vue'
import EditProfile from '../views/EditProfile.vue'

const router = [
    {
      path: '/profile',
      name: 'profile',
      component: ProfileHome,
      meta: {
        layout: "DashboardLayout"
      }
    },

    {
        path: '/edit-profile',
        name: 'edit-profile',
        component: EditProfile,
        meta: {
          layout: "DashboardLayout"
        }
      },
   
  ]

  export default router
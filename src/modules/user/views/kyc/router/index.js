import KYC from '../views/IndexView.vue'
import KYCSubmitted from '../views/KYCSubmitted.vue'

const router = [
    {
      path: '/kyc',
      name: 'kyc',
      component: KYC,
      meta: {
        layout: "AppHomeLayout"
      }
    },
    {
        path: '/kyc-submitted',
        name: 'kyc-submitted',
        component: KYCSubmitted,
        meta: {
          layout: "AppHomeLayout"
        }
      },
  ]

  export default router
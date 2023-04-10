import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import FAQ from '../views/FrequentlyAskedQuestions.vue'
import TermsAndConditions from '../views/TermsAndConditions'

const router = [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: "AppHomeLayout"
      }
    },
  
    {
      path: '/privacy-policy',
      name: 'home',
      component: PrivacyPolicy,
      meta: {
        layout: "AppHomeLayout"
      }
    },
  
    {
      path: '/faqs',
      name: 'home',
      component: FAQ,
      meta: {
        layout: "AppHomeLayout"
      }
    },
  
    {
      path: '/terms-and-conditions',
      name: 'terms',
      component: TermsAndConditions,
      meta: {
        layout: "AppHomeLayout"
      }
    },
   
  ]

  export default router
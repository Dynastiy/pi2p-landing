import HomeView from '@/modules/landing/HomeView.vue'
import PrivacyPolicy from '@/modules/landing/PrivacyPolicy.vue'
import FAQ from '@/modules/landing/FrequentlyAskedQuestions.vue'
import TermsAndConditions from '@/modules/landing/TermsAndConditions'
import Contact from '@/modules/landing/ContactUs.vue'
import About from '@/modules/landing/AboutView.vue'
import HowItWorks from '@/modules/landing/HowItWorks.vue'

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
        path: '/contact',
        name: 'home',
        component: Contact,
        meta: {
          layout: "AppHomeLayout"
        }
      },

      {
        path: '/how-it-works',
        name: 'home',
        component: HowItWorks,
        meta: {
          layout: "AppHomeLayout"
        }
      },

      {
        path: '/about',
        name: 'about',
        component: About,
        meta: {
          layout: "AppHomeLayout"
        }
      },
  
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: PrivacyPolicy,
      meta: {
        layout: "AppHomeLayout"
      }
    },
  
    {
      path: '/faqs',
      name: 'faqs',
      component: FAQ,
      meta: {
        layout: "AppHomeLayout"
      }
    },
  
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: TermsAndConditions,
      meta: {
        layout: "AppHomeLayout"
      }
    },
   
  ]

  export default router
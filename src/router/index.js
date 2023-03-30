import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'
import FAQ from '../views/FrequentlyAskedQuestions.vue'
import TermsAndConditions from '../views/TermsAndConditions'

Vue.use(VueRouter)

const routes = [
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
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

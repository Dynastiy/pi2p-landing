import Vue from 'vue'
import VueRouter from 'vue-router'

// Modules 
import HomeRoutes from "@/modules/landing/router";
import WalletRoutes from "@/modules/user/views/wallet/router"
import KYC from "@/modules/user/views/kyc/router"

Vue.use(VueRouter)

const routes = []

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:routes.concat(HomeRoutes, WalletRoutes, KYC)
})

export default router

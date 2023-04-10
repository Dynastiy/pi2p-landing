<template>
  <div class="container">
    <div class="home-top">
      <WalletView class="wallet-component"/>
      <HomeActions class="home-actions-component"/>
    </div>
    <div class="mt-3">
      <RecentAds/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeActions from '../components/cards/HomeActions.vue'
import WalletView from '../components/cards/WalletView.vue'
import RecentAds from '../components/tables/recentAds.vue'

export default {
  components: { WalletView, HomeActions,
    RecentAds },
  methods: {
      ...mapActions('wallet', ['balances', 'sellAds'])
  },
  beforeMount(){
    this.balances()
    this.sellAds()
  }
}
</script>

<style>

</style>
<template>
  <div class="container">
    <div class="home-top">
      <WalletView class="wallet-component"/>
      <HomeActions class="home-actions-component"/>
    </div>
    <div class="mt-3">
      <h5 class="header-text spacer pb-0">Recent Buy Pi Ads</h5>
      <RecentAds/>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import HomeActions from '../components/cards/HomeActions.vue'
import WalletView from '../components/cards/WalletView.vue'
import RecentAds from '@/modules/user/views/trades/components/tables/TradesTable.vue'

export default {
  components: { WalletView, HomeActions,
    RecentAds },
  methods: {
      ...mapActions('wallet', ['balances']),
      ...mapActions('trades', ['list'])
  },
  beforeMount(){
    this.balances()
    this.list()
  }
}
</script>

<style>

</style>
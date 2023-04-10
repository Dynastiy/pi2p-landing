<template>
    <div class="container">
        <Trades/>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex'
  import HomeActions from '../components/cards/HomeActions.vue'
  import WalletView from '../components/cards/WalletView.vue'
  import Trades from '../components/tables/recentAds.vue'
  
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
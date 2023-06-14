<template>
    <div class="container">
      <div>
          <h4>My Sell Ads</h4>
      </div>
  
      <div>
          <trades-table/>
      </div>
    </div>
  </template>
  
  <script>
  import TradesTable from '../components/tables/MyTradesTable.vue'
  import { mapActions } from 'vuex'
  export default {
  components:{
      TradesTable
  },
  methods: {
        ...mapActions('trades', ['myTrades'])
    },
    beforeMount(){
      this.myTrades()
    }
  }
  </script>
  
  <style>
  
  </style>
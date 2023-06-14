<template>
    <div class="container">
      <div>
          <h4>All Orders</h4>
      </div>
      <div>
          <orders-table/>
      </div>
    </div>
  </template>
  
  <script>
  import OrdersTable from '../components/tables/DataTable.vue'
  import { mapActions } from 'vuex'
  export default {
  components:{
      OrdersTable
  },
  methods: {
        ...mapActions('orders', ['list'])
    },
    beforeMount(){
      this.list()
    }
  }
  </script>
  
  <style>
  
  </style>
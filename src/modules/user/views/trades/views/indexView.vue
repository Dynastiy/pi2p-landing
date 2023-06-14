<template>
  <div class="container">
    <div>
        <h4>All Trades</h4>
    </div>

    <div>
        <trades-table/>
    </div>
  </div>
</template>

<script>
import TradesTable from '../components/tables/TradesTable.vue'
import { mapActions } from 'vuex'
export default {
components:{
    TradesTable
},
methods: {
      ...mapActions('trades', ['list'])
  },
  beforeMount(){
    this.list()
  }
}
</script>

<style>

</style>
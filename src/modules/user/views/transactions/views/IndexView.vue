<template>
  <div class="container">
    Transactions
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    methods: {
        ...mapActions('transactions', ['list'])
    },
    beforeMount(){
        this.list()
    }
}
</script>

<style>

</style>
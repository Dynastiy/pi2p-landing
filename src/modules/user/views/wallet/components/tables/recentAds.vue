<template>
  <div>
    <h5 class="header-text">Recent Buy Pi Ads</h5>
    <div>
        <table class="rwd-table">
      <tr>
        <th>Pi Quantity</th>
        <th>Min/Max</th>
        <th>Name</th>
        <th>Rate per Pi</th>
        <!-- <th>Status</th>
        <th>Actions</th> -->
      </tr>
      <!-- <tr v-if="withdrawals.length == 0">
        <td class="text-danger font-weight-bold">
          No Declined Withdrawal requests yet
        </td>
      </tr> -->
      <tr v-for="item in trades" :key="item.id" >
        <!-- {{ trades }} -->
        <td data-th="Pi Quantity" > {{ item.amount }}  </td>
        <td data-th="Max/Min"> {{ item.maxAmount + " " + "-" + " " + item.minAmount }} </td>
        <td data-th="Name" class="text-capitalize"> {{ item.user.firstName + " "  + item.user.lastName }} </td>
        <td data-th="Rate per Pi"> {{ item.rate + " " + item.currency.symbol }} </td>
        <!-- <td data-th="Status"><span :class="[withdrawal.status]">{{withdrawal.status}}</span></td>
        <td data-th="Actions"> <px-button><span>View More</span></px-button> </td> -->
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
    computed:{
        ...mapState("wallet", {
            trades: (state) => state.adsDataSet
        })
    }
}
</script>

<style>

</style>
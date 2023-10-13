<template>
  <div>
    <user-wallet />

    <!-- View recent Buy ads and recent sell ads  -->
    <dashboard-home-history class="tw-mt-3"/>
  </div>
</template>

<script>
import UserWallet from "@/components/utils/UserWallet.vue";
// import { mapActions } from "vuex";
import DashboardHomeHistory from '@/components/dashboard/DashboardHomeHistory.vue';
export default {
  components: { UserWallet, DashboardHomeHistory },
  data() {
    return {
     
    };
  },
  methods: {
    
  },

  beforeMount() {
    // this.balances();
    // this.getSettings()
  },
};
</script>

<style></style>

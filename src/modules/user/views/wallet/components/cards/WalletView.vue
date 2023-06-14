<template>
  <div>
    <div v-if="loading" class="text-center">
      <i-icon icon="eos-icons:bubble-loading" width="40px" />
    </div>
    <div id="wallet" v-else>
   <div>
    <h6>Wallet Balance</h6>
    <div class="d-flex align-items-start justify-content-between mt-1">
      <div>
        <h2>
          {{
            viewAmount
              ?
                 NGNBalance[1].balanceFormatted
                
              : "*******"
          }}
        </h2>
      </div>
      <div class="text-right">
        <div class="">
          <span role="button" @click="viewAmount = !viewAmount">
            <i-icon
              :icon="viewAmount ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
              width="30px"
            />
          </span>
        </div>
        
        <!-- <span
          role="button"
          @click="switchCurrency(currency === 'NGN' ? 'PI' : 'NGN')"
        >
          {{ currency === "NGN" ? "Switch to PI" : "Switch to Naira" }}
        </span> -->
      </div>
    </div>
   </div>

    <div class="wallet-actions d-flex justify-content-end">
      <router-link to="/deposit">
        <div>
        <span>
          <i-icon icon="mdi:plus-circle" />
        </span>
        <span class="label">Deposit</span>
      </div>
      </router-link>
    </div>
  </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import DepositFunds from "../modals/DepositFunds.vue";

export default {
  // components: { DepositFunds }, 
  data() {
    return {
      currency: "NGN",
      viewAmount: true,
    };
  },
  methods: {
    switchCurrency(value) {
      this.currency = value;
    },
  },
  beforeMount() {},
  computed: {
    ...mapState("wallet", {
      loading: (state) => state.loading,
      NGNBalance: (state) => state.balancesDataSet,
      PIBalance: (state) => state.balancesDataSet[0],
    }),
  },
};
</script>

<style scoped >
#wallet {
    /* background: url("../img/div.jpg"); */
    background-color: var(--primary-800);
    padding: 20px;
    border-radius: 15px;
    color: var(--white);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
    min-height: 200px;
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: space-between;
    
}

#wallet h6 {
    color: var(--primary-50);
    font-weight: 400;
    font-size: 13px;
}

#wallet .amount-preview {
    color: var(--primary-50);
}

#wallet h2 {
    font-weight: 700;
    font-size: 35px;
    color: var(--white);
}

#wallet .select-currency {
    background-color: var(--white);
    color: var(--primary-500);
    font-weight: 500;
    padding: 8px;
    border-radius: 8px;
}

#wallet .currency-dropdown li{
    list-style: none;
}

#wallet .wallet-actions {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    gap: 10px;
}

#wallet .wallet-actions span.label {
    font-size: 14px;
}

#wallet .wallet-actions div {
    display: flex;
    display: inline-flex;
    display: -webkit-flex;
    align-items: center;
    padding: 5px 15px;
    border-radius: 5px;
    gap: 5px;
}


#wallet .wallet-actions div {
    background-color: var(--white);
    color: var(--primary-700);
    font-weight: 500;
}
@media (max-width:990px) {
  #wallet h2 {
    font-weight: 700;
    font-size: 25px;
    color: var(--white);
}
}
</style>

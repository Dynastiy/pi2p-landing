<template>
  <div id="wallet">
   <div>
    <h6>Wallet Balance</h6>
    <div class="d-flex align-items-start justify-content-between">
      <div>
        <h1>
          {{
            viewAmount
              ? currency === "NGN"
                ? NGNBalance.balanceFormatted
                : PIBalance.balanceFormatted
              : "*******"
          }}
        </h1>
        <small class="amount-preview"
      >{{
        viewAmount
          ? currency === "NGN"
            ? PIBalance.balanceFormatted
            : NGNBalance.balanceFormatted
          : "*****"
      }}
    </small>
      </div>
      <div class="text-right">
        <div class="mb-4">
          <span role="button" @click="viewAmount = !viewAmount">
            <i-icon
              :icon="viewAmount ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
              width="30px"
            />
          </span>
        </div>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link select-currency">
            <!-- {{ currency === "NGN" ? "NGN" : "PI"}} -->
            Currency 
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><span @click="switchCurrency('NGN')">NGN</span></el-dropdown-item>
            <el-dropdown-item><span @click="switchCurrency('PI')">PI</span></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- <span
          role="button"
          @click="switchCurrency(currency === 'NGN' ? 'PI' : 'NGN')"
        >
          {{ currency === "NGN" ? "Switch to PI" : "Switch to Naira" }}
        </span> -->
      </div>
    </div>
   </div>

    <div class="wallet-actions">
      <div role="button">
        <span>
          <i-icon icon="vaadin:money-deposit" />
        </span>
        <span class="label">Deposit</span>
      </div>
      <div role="button">
        <span>
          <i-icon icon="uil:money-withdrawal" />
        </span>
        <span class="label">Withdraw</span>
      </div>
    </div>

    <!-- Wallet Actions  -->
    <!-- Deposit -->
    <div>
      <DepositFunds/>
    </div>
    <!-- Withdrawal -->
    <div>

    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import DepositFunds from "../modals/DepositFunds.vue";

export default {
  components: { DepositFunds }, 
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
      NGNBalance: (state) => state.balancesDataSet[0],
      PIBalance: (state) => state.balancesDataSet[1],
    }),
  },
};
</script>

<style></style>

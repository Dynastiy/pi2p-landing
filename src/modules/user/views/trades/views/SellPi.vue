<template>
  <div id="pi-transaction">
    <div class="pi-transaction">
      <div class="info spacer">
        <h3>Create Trade</h3>
        <small
          >Create a sell order by providing the following information.</small
        >
      </div>

      <div class="form-details mt-3" >
        <div>
          <label for="">Enter Pi Quantity</label>
          <div class="enter-wallet-address">
            <input
              type="tel"
              placeholder="Enter Pi Quantity"
              v-model.number="amount"
            />
          </div>
        </div>

        <div>
          <label for="">Enter Price per Pi</label>
          <div class="enter-wallet-address">
            <input
              type="tel"
              placeholder="Enter Price per Pi"
              v-model.number="rate"
            />
          </div>
        </div>

        <div>
          <label for="">Enter Min Pi per trade</label>
          <div class="enter-wallet-address">
            <input
              type="tel"
              placeholder="Enter Min Pi per trade"
              v-model.number="minAmount"
            />
          </div>
        </div>

        <div>
          <label for="">Enter Max Pi per trade</label>
          <div class="enter-wallet-address">
            <input
              type="tel"
              placeholder="Enter Max Pi per trade"
              v-model.number="maxAmount"
            />
          </div>
        </div>
      </div>

      <div class="note d-flex" style="gap: 12px">
        <span>
          <i-icon icon="quill:warning" width="20px" />
        </span>
        <p>
          QUICK NOTE ! Please make sure you are certain of the transaction
          before you proceed to Sell.
        </p>
      </div>

      <div class="text-center mt-4">
        <button
          class="primary-btn w-50 py-3"
          :class="isLoading ? 'bg-secondary' : ''"
          :disabled="isLoading"
          @click="sellPi"
        >
          <span v-if="isLoading"
            ><i-icon
              icon="eos-icons:bubble-loading"
              width="20px"
              class="text-white"
            />
          </span>
          <span v-else>create trade</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      // currencyId: "string",
      // acceptedCurrencyId: "string",
      amount: null,
      rate: null,
      minAmount: null,
      maxAmount: null,
    };
  },
  methods: {
    ...mapActions("trades", ["createTrade"]),
    ...mapActions("config", ["getCurrencies"]),
    sellPi() {
      var data = {
        amount: this.amount,
        rate: this.rate,
        minAmount: this.minAmount,
        maxAmount: this.maxAmount,
        currencyId: this.pi.id,
        acceptedCurrencyId: this.ngn.id,
      };
      let payload = {
        type: "create_order",
        amount: this.amount,
        data,
      };
      this.createTrade(payload);
    },
  },
  beforeMount(){
    this.getCurrencies()
  },
  computed: {
    ...mapState("trades", {
      isLoading: (state) => state.loading,
    }),
    ...mapState("wallet", {
      NGNBalance: (state) => state.balancesDataSet[1],
    }),
    ...mapState("config", {
      pi: (state) => state.dataSet[0],
      ngn: (state) => state.dataSet[1]
    }),
    ngn_amount() {
      let pi_value = this.pi_amount;
      let pi_rate = this.item.rate;
      let ngn_value = pi_value * pi_rate;
      let ngnFormatted = ngn_value.toLocaleString();
      return ngnFormatted;
    },
    walletBalance() {
      let current = this.NGNBalance.balance;
      let pi_value = this.pi_amount;
      let pi_rate = this.item.rate;
      let ngn_value = pi_value * pi_rate;
      let nowBalance = current - ngn_value;
      let formattedBalance = nowBalance.toLocaleString();
      return formattedBalance;
    },
  },
};
</script>

<style scoped>
.form-details {
  display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: auto;
    gap: 10px;
}
.info h3 {
  font-weight: 700;
}
.ads {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-between;
}
.note {
  background: var(--error-50);
  color: var(--error-500);
  padding: 20px;
}

.note p {
  font-size: 13.6px;
  margin-bottom: 0;
}
.amount-box {
  background: var(--gray-50);
  padding: 20px;
}
.wallet-balance {
  font-size: 12.5px;
}
.balance {
  font-weight: 800;
  font-size: 15px;
}
.enter-amount,
.enter-wallet-address {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  gap: 6px;
  border: 1.5px solid var(--gray-400);
  padding: 0 10px;
}

.enter-amount input,
.enter-wallet-address input {
  font-weight: 700;
  font-size: 14px;
  border: transparent;
}

.enter-amount input::placeholder,
.enter-wallet-address input::placeholder {
  font-weight: 400;
  color: var(--gray-200);
}
.enter-amount input {
  text-align: center;
}

.enter-amount span,
.enter-wallet-address span {
  font-size: 14px;
}
.payment-method {
  background: var(--gray-50);
  padding: 8px 12px;
  border-radius: 12px;
}
.info {
  background: var(--gray-50);
}
.item-header {
  font-size: 15px;
  font-weight: 400;
}

.item-content {
  font-size: 15px;
  font-weight: 800;
}
h5,
label {
  font-weight: 600;
}

label {
  font-size: 14px;
  margin-bottom: 0;
}
#pi-transaction {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: center;
}
.pi-transaction {
  background: var(--white);
  width: 40%;
  padding: 20px;
}

@media (max-width: 990px) {
  .pi-transaction {
    width: 90%;
  }
}
</style>

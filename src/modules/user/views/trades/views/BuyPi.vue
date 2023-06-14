<template>
  <div>
    <div v-if="loading" class="text-center">
      <i-icon icon="eos-icons:bubble-loading" width="40px" />
    </div>
    <div id="pi-transaction" v-else>
      <div class="pi-transaction">
        <div class="spacer info">
          <div class="d-flex align-items-center" style="gap: 10px">
            <span class="name-icon">{{ item.user.firstName.charAt(0) }}</span>
            <div>
              <h5 class="text-capitalize">
                {{ item.user.firstName + " " + item.user.lastName }}
              </h5>
              <small>{{ item.user.email }}</small>
            </div>
          </div>
          <hr class="" />
          <div class="ads">
            <span class="item-header">Rate per Pi:</span>
            <span class="item-content">{{
              item.rate + " " + item.acceptedCurrency.symbol + "/PI"
            }}</span>
          </div>
          <hr />
          <div class="ads">
            <span class="item-header">Pi Quantity:</span>
            <span class="item-content">{{ item.amount }}</span>
          </div>
          <hr />
          <div class="ads">
            <span class="item-header">Min/Max:</span>
            <span class="item-content">{{
              item.minAmount + " " + "/" + " " + item.maxAmount
            }}</span>
          </div>
        </div>

        <div class="spacer container">
          <label for="">Payment method</label>
          <div
            class="d-flex align-items-center justify-content-between payment-method"
          >
            <span>Wallet</span>
            <span>
              <i-icon icon="prime:angle-right" width="30px" />
            </span>
          </div>
        </div>

        <div class="amount-box">
          <span class="error-alert" v-if="error">{{ error }}</span>
          <div class="mb-3">
            <label for="">Enter Pi Amount</label>
            <div class="enter-amount">
              <span role="button" @click="getPiAmount('min')">Min</span>
              <input type="tel" placeholder="0" v-model="pi_amount" />
              <span role="button" @click="getPiAmount('max')">Max</span>
            </div>
          </div>
          <div class="mb-3">
            <label for="">Amount in Naira</label>
            <div class="enter-amount">
              <span>NGN</span>
              <input
                type="text"
                placeholder="0"
                readonly
                v-model="ngn_amount"
              />
              <!-- <span role="button">All</span> -->
            </div>
            <div class="text-center wallet-balance">
              <span
                >Wallet Balance:
                <span class="balance"> {{ walletBalance }}</span> NGN</span
              >
            </div>
          </div>
          <div>
            <label for="">Enter Wallet Address</label>
            <div class="enter-wallet-address">
              <input type="text" v-model="address" placeholder="PIXXXXXXXXXXXXXXXXXXXXXXX" />
            </div>
          </div>
        </div>

        <div class="note d-flex" style="gap: 12px">
          <span>
            <i-icon icon="quill:warning" width="20px" />
          </span>
          <p>
            QUICK NOTE ! Please make sure you are certain of the transaction
            before you proceed to Buy.
          </p>
        </div>

        <div class="text-center mt-4">
          <button
            class="primary-btn w-50 py-3"
            :class="isLoading ? 'bg-secondary' : ''"
            :disabled="isLoading"
            @click="placeTradeOrder"
          >
            <span v-if="isLoading"
              ><i-icon
                icon="eos-icons:bubble-loading"
                width="20px"
                class="text-white"
              />
            </span>
            <span v-else >buy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      pi_amount: "",
      address: "",
      id: this.$route.params.id
    };
  },
  methods: {
    ...mapActions('wallet', ['balances']),
    ...mapActions('trades', ['placeOrder']),
    getPiAmount(value) {
      if (value === "min") {
        this.pi_amount = this.item.minAmount;
      } else {
        this.pi_amount = this.item.maxAmount;
      }
    },
    placeTradeOrder() {
      var data = {
        amount: this.pi_amount,
        address: this.address,
      };
      let payload = {
        type: "place_order",
        amount: this.amount,
        ngn_amount: this.ngn_amount,
        data,
        id: this.id
      };
      this.placeOrder(payload);
    },
  },
  beforeMount(){
    this.balances()
  },
  computed: {
    ...mapState("trades", {
      item: (state) => state.dataSet,
      loading: (state) => state.loading,
      isLoading: (state) => state.isLoading,
      error: (state) => state.error
    }),
    ...mapState("wallet", {
      NGNBalance: (state) => state.balancesDataSet[1],
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
  font-size: 18px;
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

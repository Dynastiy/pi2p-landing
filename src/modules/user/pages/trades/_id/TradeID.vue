<template>
  <div class="">
    <div class="tw-mb-3">
      <span
        class="tw-bg-white tw-w-8 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-h-8 tw-block tw-text-light"
        role="button"
        @click="$router.go(-1)"
      >
        <i-icon icon="bx:arrow-back" width="20px" />
      </span>
    </div>
    <div>
      <!-- {{ item }} -->
    </div>

    <div v-if="isLoading" class="tw-flex tw-justify-center tw-mt-3">
      <div>
        <i-icon icon="eos-icons:bubble-loading" width="40px" />
        <span class="tw-text-primary500 tw-text-sm"
          >Getting trade information</span
        >
      </div>
    </div>

    <div
      class="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-3 tw-grid-cols-1 lg:tw-gap-3 md:tw-gap-3"
      v-else
    >
      <div class="tw-col-span-2">
        <SideHeader
          title="Trade Information"
          :data="displayData"
          :enable-action="true"
          :display-key="[
            'amount',
            'remaining_Balance',
            'min_Amount',
            'max_Amount',
            'accepted_Currency',
            'rate',
            'date',
            'status',
          ]"
        >
        </SideHeader>
      </div>
      <div class="tw-bg-white tw-p-3 tw-rounded-lg">
        <div class="amount-box">
          <span class="error-alert" v-if="error">{{ error }}</span>
          <div class="mb-3">
            <label for="">Enter Pi Amount</label>
            <div class="enter-amount">
              <span role="button" @click="getPiAmount('min')">Min</span>
              <input type="tel" placeholder="0" v-model="pi_amount" />
              <span role="button" @click="getPiAmount('max')">Max</span>
            </div>
            <span class="tw-text-red-600 tw-text-xs" v-if="insuffientFunds">
              *Insufficient funds in
              {{ getWalletBalance(data.acceptedCurrency.symbol).currency }}
              wallet to perform this transaction
            </span>
          </div>

          <div class="mb-3">
            <label for=""
              >Amount in
              {{
                data.acceptedCurrency ? data.acceptedCurrency.symbol : "-"
              }}</label
            >
            <div class="enter-amount">
              <span>{{
                data.acceptedCurrency ? data.acceptedCurrency.symbol : "-"
              }}</span>
              <input
                type="text"
                class=""
                placeholder="0"
                readonly
                v-model="currency_amount"
              />
            </div>
            <div class="text-center wallet-balance">
              <span
                >Wallet Balance:
                <span class="balance">
                  {{ walletBalance(data.acceptedCurrency.symbol) }}</span
                >
                {{
                  getWalletBalance(data.acceptedCurrency.symbol).currency
                }}</span
              >
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
            :class="{
              'tw-bg-gray4': busy || pi_amount === '' || insufficientFunds,
            }"
             class="primary-btn w-50 py-3"
            :disabled="busy || pi_amount === '' || insufficientFunds"
            @click="buyOrder"
          >
            <span v-if="busy"
              ><i-icon
                icon="eos-icons:bubble-loading"
                width="20px"
                class="text-white"
              />
            </span>
            <span v-else>buy</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import SideHeader from "@/components/utils/SideHeader.vue";
import { timeStamp } from "@/filter";
export default {
  components: {
    SideHeader,
  },
  data() {
    return {
      timeStamp,
      pi_amount: "",
      address: "",
      id: this.$route.params.id,
      data: {},
      displayData: {
        amount: "",
        min_Amount: "",
        max_Amount: "",
        accepted_Currency: "",
        rate: "",
        date: "",
        status: "",
        createdAt: "",
        remaining_Balance: "",
      },
      insuffientFunds: false,
      isLoading: false,
      busy: false,
      currency: "",
      error: "",
    };
  },
  methods: {
    ...mapActions("wallet", ["balances"]),
    ...mapActions("trades", ["placeOrder"]),

    getWalletBalance(e) {
      let value = this.walletBalances.find((item) => item.currency === e);
      return value;
    },

    viewTrade() {
      this.isLoading = true;
      this.$request
        .get(`account/trades/${this.id}`)
        .then((res) => {
          const resPayload = res.data;
          this.data = resPayload;
          this.orders = resPayload.orders;
          this.isLoading = false;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.isLoading = false;
        });
    },

    walletBalance(e) {
      let value = this.walletBalances.find((item) => item.currency === e);
      const current = value.balance;
      this.currency = value.currency;
      const pi_value = this.pi_amount;
      const pi_rate = this.data.rate;
      const currency_value = pi_value * pi_rate;
      var nowBalance = "";
      if (current < currency_value) {
        nowBalance = 0;
        this.insuffientFunds = true;
      } else {
        nowBalance = current - currency_value;
        this.insuffientFunds = false;
      }
      const formattedBalance = Number(nowBalance).toLocaleString();
      return formattedBalance;
    },

    getPiAmount(value) {
      if (value === "min") {
        this.pi_amount = this.data.minAmount;
      } else {
        this.pi_amount = this.data.maxAmount;
      }
    },

    buyOrder() {
      var data = {
        amount: this.pi_amount,
        address: this.address,
      };
      this.busy = true;
      this.error = "";
      this.$request
        .post(`account/trades/${this.id}/buy`, data)
        .then((res) => {
          this.$router.push(
            `/success?type=place_order&amount=${data.amount}&currency_amount=${this.currency_amount}&currency=${this.currency}`
          );
          return res;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.error = err.data.message;
          this.busy = false;
        });
    },
  },

  beforeMount() {
    this.balances();
    this.viewTrade();
  },

  watch: {
    data: {
      handler(val) {
        if (val) {
          this.displayData.amount = `${val.amount} ${val.currency.symbol}`;
          this.displayData.min_Amount = `${val.minAmount}`;
          this.displayData.max_Amount = `${val.maxAmount}`;
          this.displayData.accepted_Currency = `${val.acceptedCurrency.symbol}`;
          this.displayData.rate = `${val.rate}${val.acceptedCurrency.symbol}/${val.currency.symbol}`;
          this.displayData.date = `${timeStamp(val.createdAt)}`;
          this.displayData.status = `${val.status}`;
          this.displayData.remaining_Balance = `${val.remainingBalance} ${val.currency.symbol}`;
        }
      },
      immediate: true,
    },
  },

  computed: {
    ...mapState("wallet", {
      walletBalances: (state) => state.balancesDataSet,
    }),

    currency_amount() {
      let pi_value = this.pi_amount;
      let pi_rate = this.data.rate;
      let amount_value = pi_value * pi_rate;
      var amountFormatted = "";
      if (this.insufficientFunds) {
        amountFormatted = 0;
      } else {
        amountFormatted = amount_value.toLocaleString();
      }
      return amountFormatted;
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
  padding: 0 12px;
  border-radius: 5px;
}

.enter-amount input,
.enter-wallet-address input {
  font-weight: 700;
  font-size: 18px;
  border: transparent;
  padding: 10px;
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

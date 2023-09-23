<template>
  <div class="tw-bg-white tw-p-6 tw-rounded-lg">
    <div class="pi-transaction">
      <div class="info">
        <h3 class="tw-font-bold tw-mb-0">Create Trade</h3>
        <small class="tw-font-semibold tw-text-light"
          >Create a sell order by providing the following information.</small
        >
      </div>

      <div class="form-details tw-mt-3 tw-flex tw-flex-col tw-space-y-3">
        <div>
          <label for="">Currency to Sell</label>
          <div class="enter-wallet-address">
            <select name="" id="" v-model="currencyId" class="tw-p-2">
              <option  :value="item.id" v-for="item in sellingCurrency" :key="item?.id">{{ item?.symbol }}</option>
            </select>
          </div>
        </div>

        <div>
          <label for="">Currency to Accept</label>
          <div class="enter-wallet-address">
            <select name="" id="" class="tw-p-2" v-model="acceptedCurrencyId">
              <option :value="item.id" v-for="item in acceptedCurrencies" :key="item?.id">{{ item?.name }}</option>
            </select>
          </div>
        </div>

        <div>
          <label for="">Enter Pi Quantity</label>
          <div class="enter-wallet-address">
            <input
              type="tel"
              placeholder="Enter Pi Quantity"
              v-model.number="amount"
              class="tw-p-2"
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
              class="tw-p-2"
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
              class="tw-p-2"
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
              class="tw-p-2"
            />
          </div>
        </div>
      </div>

      <div class="note tw-flex tw-space-x-1 tw-mt-2">
        <span class="tw-text-red-600">
          <i-icon icon="quill:warning" width="20px" />
        </span>
        <p class="tw-text-red-600 tw-text-sm">
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
      currencyId: null,
      acceptedCurrencyId: null,
      amount: null,
      rate: null,
      minAmount: null,
      maxAmount: null,
      isLoading: false
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
        currencyId: this.currencyId,
        acceptedCurrencyId: this.acceptedCurrencyId,
      };
      var payload = {
        type: "create_order",
        amount: this.amount,
      };
      this.isLoading = true
      this.$request.post('/account/trades', data)
      .then((res)=> {
        this.isLoading = false
        console.log(res);
        this.$router.push(
          `/success?type=${payload.type}&amount=${payload.amount}`
        );
      })
      .catch((err)=> {
        this.isLoading = false
        console.log(err);
      })
    },
  },
  beforeMount() {
    this.getCurrencies();
  },
  computed: {
    ...mapState("wallet", {
      NGNBalance: (state) => state.balancesDataSet[1],
    }),
    ...mapState("config", {
      currencies: (state) => state.dataSet,
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

    sellingCurrency() {
      let value = this.currencies.filter((item) => item.symbol === "PI");
      return value;
    },

    acceptedCurrencies() {
      let value = this.currencies.filter((item) => item.symbol !== "PI");
      return value;
    },
  },
};
</script>

<style scoped></style>

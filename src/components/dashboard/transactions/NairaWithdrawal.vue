<template>
  <div id="">
    <div class="">
      <div class="info tw-p-3">
        <h3 class="tw-mb-0">Naira Withdrawal</h3>
        <small>Enter correct details to request withdrawal.</small>
      </div>
      <div class="note d-flex" style="gap: 8px">
        <span>
          <i-icon icon="quill:warning" width="20px" />
        </span>
        <div>
          <p>Minimum Withdrawal: {{ minNaira }}</p>
          <p>Charge: 5% of Amount</p>
        </div>
      </div>

      <div class="d-flex flex-column mt-2" style="gap: 15px">
        <span v-if="error" class="error-alert">{{ error }}</span>

        <div>
          <label for="">Select Bank</label>
          <select
            v-model="bankName"
            id="mySelect"
            class="tw-p-3"
            @change="getBankCode"
          >
            <option selected disabled value="">Select Bank</option>
            <option
              v-for="item in banks"
              :id="item.code"
              :key="item.id"
              :value="item.name"
            >
              {{ item.name }}
            </option>
          </select>
        </div>

        <div>
          <label for="">Enter Account Number</label>
          <input
            type="tel"
            v-model="bankAccountNumber"
            placeholder="Enter Account Number"
            class="tw-p-3"
          />
        </div>

        <div>
          <div class="d-flex justify-content-between">
            <label for="">Account Name</label>
            <i-icon
              v-if="isLoading"
              icon="line-md:loading-alt-loop"
              color="var(--primary-500)"
              width="20px"
            />
          </div>
          <input
            type="text"
            v-model="bankAccountName"
            readonly
            disabled
            placeholder="Bank Account Name"
            class="tw-p-3"
          />
        </div>

        <div>
          <label for="">Enter Amount</label>
          <input
            type="number"
            v-model="amount"
            :max="NGNBalance"
            min="0"
            placeholder="Enter amount"
            class="tw-p-3"
          />
          <div class="wallet-balance">
            <span
              >Account Balance:
              <span class="balance">{{ NGNActualBalance }}</span></span
            >
          </div>
        </div>
        <div class="info tw-p-3 d-flex flex-column" style="gap: 10px">
          <div class="deposit-data">
            <span class="item-header">Amount to be Paid:</span>
            <span class="item-content">{{ amountToBePaid }}</span>
          </div>
          <div class="deposit-data">
            <span class="item-header">Charge:</span>
            <span class="item-content">{{ charge }}</span>
          </div>
        </div>
      </div>

      <div class="text-center mt-4">
        <button
          class="button primary-btn w-50 py-3"
          @click="requestFundsWithdrawal"
        >
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      currencyId: "",
      amount: null,
      gateway: "",
      proof: "",
      bankName: "",
      bankAccountName: "",
      bankAccountNumber: null,
      transactionHash: "",
      banks: "",
      bankCode: "",
      isLoading: false,
    };
  },
  methods: {
    // ...mapActions("wallet", ["makeDeposit"]),
    ...mapActions("wallet", ["balances", "requestWithdrawal"]),
    ...mapActions("config", ["getCurrencies"]),
    requestFundsWithdrawal() {
      var dataObj = {
        currencyId: this.ngn.id,
        amount: this.amount,
        bankName: this.bankName,
        bankAccountName: this.bankAccountName,
        bankAccountNumber: this.bankAccountNumber,
      };
      var payload = {
        type: "withdrawal",
        amount: this.amount,
        dataObj,
      };
      console.log(payload);
      this.requestWithdrawal(payload);
    },
    async getBanks() {
      let res = await axios.get("https://api.paystack.co/bank");
      let resPayload = res.data.data;
      this.banks = resPayload;
    },
    getBankCode() {
      var priceOptions = document.getElementById("mySelect");
      var selOption = priceOptions.options[priceOptions.selectedIndex].id;
      console.log(selOption);
      this.bankCode = selOption;
    },
    async resolveAccount() {
      this.isLoading = true;
      try {
        const token = "sk_live_bd5a44ffe02dbf993919572d731c8aeab16fca97";
        const headers = { Authorization: "Bearer " + token };
        let res = await axios.get(
          `https://api.paystack.co/bank/resolve?account_number=${this.bankAccountNumber}&bank_code=${this.bankCode}`,
          { headers }
        );
        console.log(res);
        let resPayload = res.data.data;
        this.bankAccountName = resPayload.account_name;
        this.isLoading = false;
      } catch (error) {
        console.log(error);
        this.isLoadingg = false;
      }

      //   this.banks = resPayload;
    },
  },

  watch: {
    bankCode: function () {
      this.resolveAccount();
    },

    bankAccountNumber: function () {
      this.resolveAccount();
    },
  },

  beforeMount() {
    this.getBanks();
    this.balances();
    this.$store.commit("wallet/REMOVE_ERROR_SUCCESS");
    this.getCurrencies();
  },

  computed: {
    ...mapState("wallet", {
      error: (state) => state.error,
      loading: (state) => state.loading,
      NGNBalance: (state) => state.balancesDataSet[1].balance,
      settingsData: (state) => state.settingsData,
    }),

    NGNActualBalance() {
      let walletBalance = this.NGNBalance;
      let actualBalance =
        walletBalance >= this.amount
          ? walletBalance - this.amount
          : this.NGNBalance;
      return actualBalance.toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
      });
    },

    charge() {
      let value = this.amount * 0.05;
      return value.toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
      });
    },

    amountToBePaid() {
      let value = this.amount - this.charge;
      return Number(value).toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
      });
    },

    ...mapState("config", {
      pi: (state) => state.dataSet[0],
      ngn: (state) => state.dataSet[1],
    }),

    minNaira() {
      let min = this.settingsData.find(
        (item) => item.name === "NGN_MIN_WITHDRAWAL"
      );
      return Number(min.value).toLocaleString("en-US", {
        style: "currency",
        currency: "NGN",
      });
    },
  },
};
</script>

<style>
.info h3 {
  font-weight: 700;
}
.deposit-data {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
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

select,
input {
  border: 1.5px solid var(--gray-400);
  border-radius: 0;
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

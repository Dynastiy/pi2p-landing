<template>
  <div id="pi-transaction">
    <div class="pi-transaction">
      <div class="info spacer">
        <h3>Make Deposit</h3>
        <small>Copy the details below to make deposit.</small>
      </div>
      <div class="note d-flex" style="gap: 12px">
        <span>
          <i-icon icon="quill:warning" width="20px" />
        </span>
        <p>
          QUICK NOTE! After a successful deposit, click on the continue button
          below to upload your proof of payment
        </p>
      </div>

      <div class="info spacer mt-2 d-flex flex-column" style="gap: 10px">
        <div class="deposit-data">
          <span class="item-header">Account Number:</span>
          <span class="item-content">0603634265</span>
        </div>
        <div class="deposit-data">
          <span class="item-header">Bank Name:</span>
          <span class="item-content">GT Bank</span>
        </div>
        <div class="deposit-data">
          <span class="item-header">Account Name:</span>
          <span class="item-content">Samfield H. Bassey</span>
        </div>
      </div>

      <div class="d-flex flex-column mt-2" style="gap: 15px">
        <span v-if="error" class="error-alert">{{ error }}</span>
        <div>
          <label for="">Enter Amount</label>
          <div class="enter-wallet-address">
            <input type="tel" v-model="amount" placeholder="Enter amount" />
          </div>
          <div class="wallet-balance">
            <span>Minimum Amount: <span class="balance">2000</span> NGN</span>
          </div>
        </div>

        <div v-if="proof_added">
          <label for="">Upload Payment Proof</label>
          <div class="enter-wallet-address">
            <input type="file" @change="addProof($event)" placeholder="" />
          </div>
        </div>
      </div>

      <div class="text-center mt-4">
        <button
          class="button primary-btn w-50 py-3"
          v-if="!proof_added"
          @click="proof_added = !proof_added"
        >
          Continue
        </button>
        <button
          v-else
          class="primary-btn w-50 py-3"
          :class="loading ? 'bg-secondary' : ''"
          :disabled="loading"
          @click="deposit"
        >
          <span v-if="loading"
            ><i-icon
              icon="eos-icons:bubble-loading"
              width="20px"
              class="text-white"
            />
          </span>
          <span v-else >Deposit</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      proof_added: false,
      amount: "",
      proof: null,
    };
  },
  methods: {
    ...mapActions("wallet", ["makeDeposit"]),
    deposit() {
      let formData = new FormData();
      formData.append("amount", this.amount);
      formData.append("proof", this.proof);
      let payload = {
        type: "deposit",
        amount: this.amount,
        formData,
      };
      this.makeDeposit(payload);
    },
    addProof() {
      const input = event.target;
      this.proof = input.files[0];
      console.log(this.proof);
    },
  },
  beforeMount() {
    this.$store.commit("wallet/REMOVE_ERROR_SUCCESS");
  },
  computed: {
    ...mapState("wallet", {
      error: (state) => state.error,
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style scoped>
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

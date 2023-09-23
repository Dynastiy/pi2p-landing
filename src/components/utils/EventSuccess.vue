<template>
  <div id="pi-transaction">
    <div class="pi-transaction">
      <div class="info spacer">
        <h3 v-if="type === 'deposit'">Deposit successful!!!</h3>
        <h3 v-if="type === 'withdrawal'">Withdrawal successful!!!</h3>
        <h3 v-if="type === 'create_order'">Create trade successful!!!</h3>
        <h3 v-if="type === 'place_order'">Order placed successful!!!</h3>
      </div>

      <div class="d-flex flex-column align-items-center mt-5" style="gap: 35px">
        <img src="@/assets/img/success.svg" width="150" alt="">
        <p class="text-center" v-if="type === 'deposit'">
          Deposit succesful, your wallet will be credited<span class="balance">{{`${currency} ${currency_amount}` }}</span>.
        </p>
        <p class="text-center" v-if="type === 'withdrawal'">
          Withdrawal requested, you will be credited with<span class="balance">{{`${currency} ${currency_amount}` }}</span>.
        </p>
        <p class="text-center" v-if="type === 'place_order'">
          You have successfully completed the transaction of <span class="balance">{{ amount }}Pi</span> the sum of 
          <span class="balance">{{`${currency} ${currency_amount}` }}</span> has been deducted from your wallet.
        </p>
        <p class="text-center" v-if="type === 'create_order'">
          You have successfully created a trade.
        </p>
      </div>

      <div class="text-center mt-4">
        <button class="button primary-btn w-50 py-3" @click="$router.push('/dashboard')">
          Return Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      proof_added: false,
      proof: null,
    };
  },
  methods: {
    
  },
  beforeMount() {
    // this.$store.commit("wallet/REMOVE_ERROR_SUCCESS");
  },
  computed: {
    type(){
        let query = this.$route.query
        return query.type
    },
    amount(){
        let query = this.$route.query
        return Number(query.amount).toLocaleString()
    },
    currency_amount(){
        let query = this.$route.query
        return query.currency_amount
    },
    currency(){
        let query = this.$route.query
        return query.currency
    }
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

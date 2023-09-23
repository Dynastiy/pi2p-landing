<template>
    <div id="pi-transaction">
      <div class="pi-transaction">
        <div class="info spacer tw-text-center tw-mb-0">
          <h3>Successful</h3>
        </div>
  
        <div class="d-flex flex-column tw-items-center mt-4" style="gap: 35px">
          <img src="@/assets/img/success.svg" width="150" alt="">
          <p class="tw-capitalize">{{ message }} is succesful</p>
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
      message(){
          let query = this.$route.query
          return query.message
      },
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
  
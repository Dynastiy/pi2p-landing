<template>
  <div id="">
    <div class="">
      <div class="info tw-p-3">
        <h3>Crypto Deposit</h3>
        <small>Copy the Wallet Address below to make crypto deposit.</small>
      </div>
      <div class="note d-flex" style="gap: 12px">
        <span>
          <i-icon icon="quill:warning" width="20px" />
        </span>
        <p>QUICK NOTE! Deposit only USDT and BUSD to this wallet Address</p>
      </div>

      <div class="info tw-p-3 mt-2 tw-flex tw-flex-col tw-space-y-4">
        <div class="tw-flex tw-justify-center tw-w-full">
          <v-qr :text="wallet_address" class="tw-bg-gray4" :width="300" />
        </div>
        <div class="deposit-data">
          <span class="item-header">Wallet Address:</span>
          <span class="tw-flex tw-items-center tw-space-x-2">
            <span class="item-content">{{ wallet_address }}</span>
            <span
              role="button"
              v-clipboard:copy="wallet_address"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
            >
              <i-icon icon="tabler:copy" width="22px" />
            </span>
          </span>
        </div>
      </div>

      <div class="wallet-balance tw-mt-3">
        <span
          >Minimum Deposit:
          <span class="balance tw-text-red-600">$20</span></span
        >
      </div>

      <div class="text-center mt-4">
        <button
          class="button primary-btn w-50 py-3"
          @click="$router.push('/dashboard')"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wallet_address: "",
    };
  },
  methods: {
    getWalletAddress() {
      this.$request.get("account/wallet-address").then((res) => {
        console.log(res.data.address, "ommo");
        this.wallet_address = res.data.address;
      });
    },

    onCopy: function () {
      this.toastify({
        text: `Wallet Address copied`,
        className: "info",
        style: {
          background: "green",
          fontSize: "12px",
          borderRadius: "5px",
        },
      }).showToast();
    },

    onError: function () {
      this.toastify({
        text: `Failed to copy`,
        className: "info",
        style: {
          background: "red",
          fontSize: "12px",
          borderRadius: "5px",
        },
      }).showToast();
    },
  },
  beforeMount() {
    this.getWalletAddress();
  },
  computed: {},
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
  word-break: break-all;
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

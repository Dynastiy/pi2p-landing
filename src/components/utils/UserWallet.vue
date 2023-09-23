<template>
  <div class="">
    <div
      class=" md:tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-y-0 md:tw-space-y-0 tw-space-y-2 md:tw-flex-row tw-gap-3"
    >
      <div
        class="tw-bg-primary500 tw-px-4 lg:tw-py-4 md:tw-py-4 tw-py-4 tw-rounded-md wallet-card tw-w-full"
      >
        <div
          class="sm:tw-flex sm:tw-flex-col lg:tw-h-auto md:tw-h-auto tw-h-36 sm:tw-justify-between"
        >
          <img src="@/assets/img/logo.svg" class="tw-block lg:tw-hidden md:tw-hidden tw-w-8 tw-h-8" alt="" />

          <!-- <hr class="tw-my-4 tw-bg-gray4 tw-w-6/12" /> -->
          <div class="tw-flex tw-space-x-2 tw-justify-between tw-items-end">
            <div>
              <span
                class="tw-capitalize tw-text-xs tw-text-medium tw-text-white"
                >wallet balance</span
              >
              <h1 class="tw-text-white tw-text-3xl tw-font-bold">
                {{ fiatBalance.balanceFormatted }}
              </h1>
            </div>

            <span
              role="button"
              class="tw-text-white"
              @click="viewAmount = !viewAmount"
            >
              <i-icon
                :icon="viewAmount ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
                width="20px"
              />
            </span>
          </div>
        </div>
      </div>
      <div class=" tw-w-full">
        <h4
          class="tw-text-sm tw-my-3 tw-font-semibold tw-underline tw-text-light lg:tw-hidden md:tw-hidden tw-block"
        >
          My Assets
        </h4>

        <div class="tw-grid tw-grid-cols-3 tw-gap-3">
          <div
            class="lg:tw-py-4 md:tw-py-4 tw-py-4 lg:tw-px-4 md:tw-px-4 tw-px-4 tw-bg-white tw-shadow-sm tw-rounded-md tw-flex tw-flex-col tw-justify-center tw-space-y-1"
            v-for="item in cryptoBalances"
            :key="item?.id"
          >
            <img class="tw-w-6 tw-h-6" :src="icon(item?.currency)" alt="" />
            <h4 class="tw-text-xs tw-text-light">
              {{ `${item?.currency} Wallet` }}
            </h4>
            <h4 class="tw-font-bold tw-text-dark tw-text-xl">
              {{ dollarFilter2(item?.balance) }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { dollarFilter2 } from '@/filter'
export default {
  data() {
    return {
        dollarFilter2,
      viewAmount: false,
      pi_icon: require("@/assets/img/pi.png"),
      usdt_icon: require("@/assets/img/pi2p_usdt_icon.png"),
      busd_icon: require("@/assets/img/pi2p_busd_icon.webp"),
    };
  },

  methods: {
    icon(e) {
      var iconValue = "";
      if (e === "PI") {
        iconValue = this.pi_icon;
      } else if (e === "USDT") {
        iconValue = this.usdt_icon;
      } else {
        iconValue = this.busd_icon;
      }
      return iconValue;
    },
  },

  computed: {
    ...mapState("wallet", {
      loading: (state) => state.loading,
      balances: (state) => state.balancesDataSet,
    }),

    fiatBalance() {
      let value = this.balances.find((item) => item.currency === "NGN");
      return value;
    },

    cryptoBalances() {
      let value = this.balances.filter((item) => item.currency !== "NGN");
      return value;
    },
  },
};
</script>

<style scoped>
.wallet-card {
  background-image: url("@/assets/img/walll.png");
  background-blend-mode: overlay;
  background-position: top right;
  background-repeat: no-repeat;
  object-fit: contain;
}
</style>

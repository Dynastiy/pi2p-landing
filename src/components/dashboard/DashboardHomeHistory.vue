<template>
  <div>
    <UtilsBaseCardTab class="">
      <UtilsCardTab title="Recent Ads">
        <div class="">
          <div
            class="tw-mt-3 lg:tw-flex md:tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-y-0 md:tw-space-y-0 tw-space-y-2 md:tw-flex-row tw-gap-3"
          >
            <div class="tw-w-full">
              <div class="tw-bg-white tw-p-4 tw-rounded-lg">
                <div class="tw-flex tw-justify-between tw-items-center">
                  <h4 class="tw-text-lg tw-font-semibold">Recent Buy Pi Ads</h4>
                  <span
                    class="tw-text-xs tw-text-light hover:tw-underline"
                    role="button"
                    >view all</span
                  >
                </div>
                <!-- Table of recent buy ads  -->
                <table-component
                  @buy="buyPi"
                  :busy="busy"
                  :items="buyAds"
                  :fields="adFields"
                />
              </div>
            </div>
            <div class="lg:tw-w-8/12 md:tw-w-8/12 tw-w-full">
              <div class="tw-bg-white tw-p-4 tw-rounded-lg">
                <div class="tw-flex tw-justify-between tw-items-center">
                  <h4 class="tw-text-lg tw-font-semibold">
                    Recent Sell Pi Ads
                  </h4>
                  <span
                    class="tw-text-xs tw-text-light hover:tw-underline"
                    role="button"
                    >view all</span
                  >
                </div>
                <!-- Table of recent sell ads  -->
                <table-component
                  :busy="busy"
                  @view="viewTrade"
                  :items="sellAds"
                  :fields="sellFields"
                />
              </div>
            </div>
          </div>
        </div>
      </UtilsCardTab>
      <UtilsCardTab title="Recent Transactions">
        <div class="tw-w-full tw-mt-3">
          <div class="tw-bg-white tw-p-4 tw-rounded-lg">
            <div class="tw-flex tw-justify-between tw-items-center">
              <h4 class="tw-text-lg tw-font-semibold">Recent Transactions</h4>
            </div>
            <!-- Table of recent transactions  -->
            <table-component
              :items="transactions"
              :fields="transactionFields"
              :busy="busy"
            />
            <span
              class="tw-text-xs tw-text-light hover:tw-underline"
              role="button"
              >view all</span
            >
          </div>
        </div>
      </UtilsCardTab>
    </UtilsBaseCardTab>
  </div>
</template>

<script>
import UtilsBaseCardTab from "@/components/utils/BaseCardTab.vue";
import UtilsCardTab from "@/components/utils/CardTab.vue";
import TableComponent from "../TableComponent.vue";
export default {
  components: {
    UtilsBaseCardTab,
    UtilsCardTab,
    TableComponent,
  },

  data() {
    return {
      buyAds: [],
      sellAds: [],
      transactions: [],
      adFields: [
        {
          key: "user",
          label: "User",
          formatter: (val) => {
            return val.firstName + " " + val.lastName;
          },
        },

        {
          key: "amount",
          label: "Quantity",
          formatter: (val) => {
            return Number(val).toLocaleString();
          },
        },

        {
          key: "minMax",
          label: "Min/Max",
        },

        {
          key: "rate",
          label: "Rate",
        },

        {
          key: "buyAction",
          label: "",
        },
      ],
      sellFields: [
        {
          key: "amount",
          label: "Quantity",
          formatter: (val) => {
            return Number(val).toLocaleString();
          },
        },

        {
          key: "minMax",
          label: "Min/Max",
        },

        {
          key: "rate",
          label: "Rate",
        },

        {
          key: "viewAction",
          label: "",
        },
      ],
      transactionFields: [
        {
          key: "txnAmount",
          label: "Amount",
        },

        {
          key: "channel",
          label: "Channel",
          //   formatter: (val) => {
          //     return Number(val).toLocaleString();
          //   },
        },

        {
          key: "transactionType",
          label: "Transaction Type",
        },

        {
          key: "status",
          label: "Status",
        },

        {
          key: "createdAt",
          label: "Date",
        },
      ],
      busy: false,
    };
  },

  methods: {
    viewTrade(value) {
      this.$router.push({ name: "my-trade-details", params: { id: value.id } });
    },

    buyPi(value) {
      this.$router.push({ name: "trade-details", params: { id: value.id } });
    },

    getBuyAds() {
      this.busy = true;
      this.$request
        .get(`/account/trades?pageSize=100`)
        .then((res) => {
          const resPayload = res.data.data;
          this.buyAds = resPayload.slice(0, 5);
          console.log(res.data.data, "ommmo");
          this.busy = false;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.busy = false;
        });
    },

    getSellAds() {
      this.busy = true;
      this.$request
        .get(`account/my-trades?pageSize=100`)
        .then((res) => {
          const resPayload = res.data.data;
          this.sellAds = resPayload.slice(0, 5);
          console.log(res.data.data, "ommmo");
          this.busy = false;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.busy = false;
        });
    },

    getTransactions() {
      this.busy = true;
      this.$request
        .get(`account/transactions?pageSize=100`)
        .then((res) => {
          const resPayload = res.data.data;
          this.transactions = resPayload.slice(0, 5);
          this.busy = false;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.busy = false;
        });
    },
  },

  beforeMount() {
    this.getBuyAds();
    this.getSellAds();
    this.getTransactions();
  },
};
</script>

<style></style>

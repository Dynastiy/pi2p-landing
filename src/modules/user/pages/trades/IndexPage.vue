<template>
  <div>
    <UtilsBaseCardTab class="">
      <UtilsCardTab title="Buy Ads">
        <div class="">
          <div
            class="tw-mt-3 lg:tw-flex md:tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-y-0 md:tw-space-y-0 tw-space-y-2 md:tw-flex-row tw-gap-3"
          >
            <div class="tw-w-full">
              <div class=" tw-rounded-lg">
                <div class="tw-flex tw-justify-between tw-items-center">
                  <h4 class="tw-text-lg tw-font-semibold">Buy Pi Ads</h4>
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
          </div>
        </div>
      </UtilsCardTab>
      <UtilsCardTab title="My Trades">
        <div class="tw-mt-3 tw-w-full">
          <div class=" tw-rounded-lg">
            <div class="tw-flex tw-justify-between tw-items-center">
              <h4 class="tw-text-lg tw-font-semibold">Sell Pi Ads</h4>
              <button
                @click="$router.push('/create-trade')"
                class="tw-bg-primary500 tw-px-3 tw-font-semibold tw-py-2 tw-text-xs tw-text-white tw-rounded-md"
              >
                Create Sell Ad
              </button>
            </div>
            <!-- Table of recent sell ads  -->
            <table-component
              @view="viewTrade"
              :busy="busy"
              :items="sellAds"
              :fields="sellFields"
            />
          </div>
        </div>
      </UtilsCardTab>
    </UtilsBaseCardTab>
  </div>
</template>

<script>
import UtilsBaseCardTab from "@/components/utils/BaseCardTab.vue";
import UtilsCardTab from "@/components/utils/CardTab.vue";
import TableComponent from "@/components/TableComponent.vue";
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
          label: "Quantity of Pi",
          formatter: (val) => {
            return Number(val).toLocaleString();
          },
        },

        {
          key: "acceptedCurrency",
          label: "Accepted Currency",
          formatter: (val) => {
            return val.symbol;
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
          key: "acceptedCurrency",
          label: "Accepted currency",
          formatter: (val) => {
            return val.symbol;
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
          key: "status",
          label: "status",
        },

        {
          key: "viewAction",
          label: "",
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
          this.buyAds = resPayload;
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
          this.sellAds = resPayload;
          console.log(res.data.data, "ommmo");
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
  },
};
</script>

<style></style>

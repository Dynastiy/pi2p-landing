<template>
  <div>
    <div class="tw-mb-3">
      <span
        class="tw-bg-white tw-w-8 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-h-8 tw-block tw-text-light"
        role="button"
        @click="$router.go(-1)"
      >
        <i-icon icon="bx:arrow-back" width="20px" />
      </span>
    </div>

    <UtilsHeader
      title="Trade Details"
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
    </UtilsHeader>

    <div>
      <UtilsHeader
      title="Transaction Details"
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
    </UtilsHeader>
    </div>
  </div>
</template>

<script>
import { createRef, timeStamp } from "@/filter.js";
import UtilsHeader from "@/components/utils/UtilsHeader.vue";
export default {
  components: {
    UtilsHeader,
  },
  data() {
    return {
      createRef,
      timeStamp,
      id: this.$route.params.id,
      Fields: [
        {
          key: "amount",
          label: "Pi Quantity",
          formatter: (val) => {
            return Number(val).toLocaleString();
          },
        },

        {
          key: "status",
          label: "Status",
        },

        {
          key: "createdAt",
          label: "Date",
        },

        {
          key: "viewAction",
          label: "",
        },
      ],
      orders: [],
      data: {},
      busy: false,
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
      loading: false,
    };
  },
  methods: {
    viewTrade() {
      this.busy = true;
      this.$request
        .get(`account/orders/${this.id}`)
        .then((res) => {
          const resPayload = res.data;
          this.data = resPayload;
          this.orders = resPayload.orders;
          this.busy = false;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.busy = false;
        });
    },

    buyAd(item) {
      this.$router.push(`/buy-ad/${item.id}`);
      this.view(item.id);
    },

    closeTradeID() {
      this.loading = true;
      this.$request
        .put(`account/trades/${this.id}/close`)
        .then((res) => {
          this.viewTrade();
          this.loading = false;
          return res;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.loading = false;
        });
    },
  },
  beforeMount() {
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

  computed: {},
};
</script>

<style scoped>
.ad-container {
  /* display: flex;
      display: inline-flex;
      display: -webkit-flex;
      align-items: center; */
  padding: 14px 18px;
  background-color: var(--white);
}
.header-text {
  font-weight: 800;
}
#ads-table {
  /* border: 1px solid var(--primary-100); */
  /* background: var(--white);
      border-radius: 20px; */
}
.item-header {
  font-size: 14px;
  font-weight: 500;
}

.item-content {
  font-size: 15px;
  font-weight: 800;
}
.all-ads {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-columns: auto;
  gap: 15px;
}
.ad-row {
  width: 100%;
  display: flex;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center;
  /* border: 1px solid var(--primary-100); */
  /* padding: 12px 20px; */
}
.ads {
  width: 100%;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
}

.ads .item-header {
  width: 100%;
}

.ad-container:hover {
  transform: translate(-5px, 2px);
  transition: 0.2s all;
}

.details-top {
  background-color: var(--tertiary-50);
  border-radius: 10px;
}

@media (max-width: 990px) {
  .ad-row {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: auto;
    gap: 8px;
    align-items: start;
  }
  .ads {
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    border-bottom: 0.4px solid var(--primary-100);
    padding-bottom: 10px;
  }

  .item-content.address {
    word-break: break-all;
    text-align: right;
  }
}
</style>

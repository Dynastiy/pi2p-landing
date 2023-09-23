<template>
  <div>
    <div
      class="lg:tw-flex md:tw-flex tw-flex-col lg:tw-flex-row lg:tw-space-y-0 md:tw-space-y-0 tw-space-y-2 md:tw-flex-row tw-gap-3"
    >
      <div class="tw-w-full">
        <div class="tw-bg-white tw-p-4 tw-rounded-lg">
          <div class="tw-flex tw-justify-between tw-items-center">
            <h4 class="tw-text-lg tw-font-semibold">All Transactions</h4>
          </div>
          <!-- Table of recent buy ads  -->
          <table-component
            @view="viewOrder"
            :busy="busy"
            :items="transactions"
            :fields="Fields"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TableComponent from "@/components/TableComponent.vue";
export default {
  components: {
    TableComponent,
  },

  data() {
    return {
      transactions: [],
      Fields: [
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

        {
          key: "viewAction",
          label: "",
        },
      ],
      busy: false,
    };
  },

  methods: {
    viewOrder(value) {
      this.$router.push({ name: "order-details", params: { id: value.id } });
    },

    getTransactions() {
      this.busy = true;
      this.$request
        .get(`account/transactions?pageSize=100`)
        .then((res) => {
          const resPayload = res.data.data;
          this.transactions = resPayload;
          this.busy = false;
        })
        .catch((err) => {
          console.log(err, "nawa");
          this.busy = false;
        });
    },
  },

  beforeMount() {
    this.getTransactions();
  },
};
</script>

<style></style>

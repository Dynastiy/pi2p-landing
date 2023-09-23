<template>
    <div>
      <div>
        <MainTab :tabs="tabs" :currentTab="activeTab">
          <template #default="{ activeTab }">
            <component :is="tabs[activeTab].component" />
          </template>
        </MainTab>
      </div>
      <!-- <UtilsBaseCardTab class="">
        <UtilsCardTab title="Make Deposit">
          <div class="tw-bg-white tw-p-4 tw-mt-3">
            <MainTab :tabs="tabs" :currentTab="activeTab">
              <template #default="{ activeTab }">
                <component
                  :is="tabs[activeTab].component"
                />
              </template>
            </MainTab>
          </div>
        </UtilsCardTab>
        <UtilsCardTab title="Deposit History">
          <div class="tw-w-full tw-mt-3">
            <div class="tw-bg-white tw-p-4 tw-rounded-lg">
              <div class="tw-flex tw-justify-between tw-items-center">
                <h4 class="tw-text-lg tw-font-semibold">Deposit History</h4>
              </div>
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
      </UtilsBaseCardTab> -->
    </div>
  </template>
  
  <script>
  import UtilsBaseCardTab from "@/components/utils/BaseCardTab.vue";
  import UtilsCardTab from "@/components/utils/CardTab.vue";
  import TableComponent from "@/components/TableComponent.vue";
  
  import MainTab from "@/components/Layout/MainTab.vue";
  import CryptoWithdrawalVue from "@/components/dashboard/transactions/CryptoWithdrawal.vue";
  import NairaWithdrawalVue from "@/components/dashboard/transactions/NairaWithdrawal.vue";
  import PiWithdrawalVue from "@/components/dashboard/transactions/PiWithdrawal.vue";
  
  export default {
    components: {
      UtilsBaseCardTab,
      UtilsCardTab,
      TableComponent,
  
      MainTab,
      CryptoWithdrawalVue,
      NairaWithdrawalVue,
      PiWithdrawalVue,
    },
  
    data() {
      return {
        transactions: [],
        activeTab: 0,
        activeName: "naira",
        tabs: [
          {
            id: 1,
            title: "NGN",
            component: NairaWithdrawalVue,
            name: "naira",
          },
          {
            id: 2,
            title: "PI",
            component: PiWithdrawalVue,
            name: "pi",
          },
          {
            id: 3,
            title: "Crypto (USDT & BUSD)",
            component: CryptoWithdrawalVue,
            name: "crypto",
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
  
      getTransactions() {
        this.busy = true;
        this.$request
          .get(`account/payments?pageSize=100`)
          .then((res) => {
            const resPayload = res.data.data;
            this.transactions = resPayload;
            console.log(resPayload, "ommo");
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
  
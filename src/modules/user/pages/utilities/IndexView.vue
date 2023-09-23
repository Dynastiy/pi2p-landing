<template>
    <div>
      <h4 class="tw-text-xl tw-font-semibold">Pay for Utilities</h4>
      <div
        class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-4 tw-mt-4 tw-grid-cols-2 tw-gap-4"
      >
        <div
          class="tw-bg-white tw-text-center tw-p-4 tw-rounded-lg hover:tw-translate-x-4"
          role="button"
          v-for="item in utilities"
          :key="item?.id"
          @click="$router.push(`/utilities/${item?.identifier}?identifier=${item?.identifier}`)"
        >
          <div class="tw-flex tw-justify-center">
            <i-icon :icon="item?.icon" width="30px" />
          </div>
          <h4
            class="tw-text-sm tw-font-semibold tw-mb-0 tw-mt-3 tw-text-primary500"
            v-text="item?.name"
          ></h4>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        utilities: [
          {
            identifier: "airtime",
            name: "Airtime Recharge",
            icon: "solar:card-outline",
          },
          {
            identifier: "data",
            name: "Data Services",
            icon: "majesticons:data-line",
          },
          {
            identifier: "electricity-bill",
            name: "Electricity Bill",
            icon: "pepicons-pencil:electricity",
          },
          {
            identifier: "tv-subscription",
            name: "Cable Subscription",
            icon: "solar:tv-broken",
          },
        ],
      };
    },
  
    methods: {
      // getAllUtilities() {
      //   this.$request
      //     .get(`/account/bill-payment/service-categories`)
      //     .then((res) => {
      //       console.log(res);
      //       var resPayload = res.data.content;
      //       var utilitiesList = resPayload.filter(
      //         (item) =>
      //           item.identifier == "airtime" &&
      //           item.identifier == "data" &&
      //           item.identifier == "electricity-bill" &&
      //           item.identifier == "tv-subscription"
      //       );
      //       this.utilities = res.data.content;
      //     });
      // },
    },
  
    beforeMount() {
      // this.getAllUtilities();
    },
  };
  </script>
  
  <style></style>
  
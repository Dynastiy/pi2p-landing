<template>
  <div>
    <div class="tw-mb-4">
      <h4 class="tw-text-xl tw-font-semibold tw-mb-0">Airtime Purchase</h4>
      <div class="tw-block tw-w-fit" style="width:max-content">
        <span class="tw-flex tw-space-x-1 tw-items-center tw-bg-white tw-py-2 tw-px-4 tw-mt-2 tw-rounded-lg ">
          <span span class="tw-text-sm tw-font-normal tw-mb-0"
            >Wallet Balance:</span
          >
          <h4 class="tw-text-xl tw-font-semibold tw-mb-0">
            {{ walletBalance.balance.toLocaleString() }}
            <span class="tw-text-sm tw-font-normal">PI</span>
          </h4>
        </span>
      </div>
    </div>
    <div v-if="busy" class="tw-flex tw-space-x-2 tw-w-full tw-items-center">
      <span>
        <i-icon icon="eos-icons:bubble-loading" width="22px" />
      </span>
      <span class="tw-w-full tw-block">retrieving networks...</span>
    </div>
    <div
      class="tw-grid lg:tw-grid-cols-3 md:tw-grid-cols-3 tw-grid-cols-2 tw-gap-4"
    >
      <div
        class="tw-bg-white tw-text-center tw-p-4 tw-rounded-lg tw-text-center tw-relative"
        v-for="item in service_categories"
        :key="item?.id"
        @click="makeActive(item)"
      >
        <span
          class="tw-text-green-600 tw-absolute tw-top-0 tw-right-0"
          v-if="item?.serviceID === active"
        >
          <i-icon icon="uil:check-circle" width="35px" />
        </span>
        <img
          :src="item?.image"
          class="tw-w-12 tw-h-12 tw-rounded-full tw-mx-auto tw-block"
          alt=""
        />
        <h5 class="tw-text-sm tw-mt-2">{{ item?.name }}</h5>
      </div>
    </div>
    <div class="tw-bg-white tw-p-5 tw-rounded-lg tw-mt-4">
      <validation-observer v-slot="{ invalid, handleSubmit }">
        <form @submit.prevent="handleSubmit(buyAirtime)">
          <!-- <span v-if="error" class="mb-3 error-alert">{{ errors }}</span> -->
          <div class="tw-mb-3">
            <validation-provider
              name="Phone Number"
              rules="required"
              v-slot="{ dirty, valid, invalid, errors }"
            >
              <label for="">Phone Number</label>
              <input
                type="tel"
                v-model="phone_number"
                id="phone_number"
                class="tw-p-3"
                placeholder="Enter Phone Number"
                v-bind:class="{
                  'tw-text-success': dirty && valid,
                  'tw-text-danger': dirty && invalid,
                }"
              />
              <!-- <small
                class="tw-text-danger tw-text-xs"
                v-for="item in errors"
                :key="item.id"
              >
                <span v-for="error in item.user_email" :key="error">
                  * {{ error }}
                </span>
              </small> -->
              <span class="tw-block tw-text-danger tw-text-xs" v-if="errors">{{
                errors[0]
              }}</span>
            </validation-provider>
            
          </div>

          <div class="tw-mb-6">
            <validation-provider
              name="Amount"
              rules="required"
              v-slot="{ dirty, valid, invalid, errors }"
            >
              <label for="">Amount</label>
              <input
                type="tel"
                v-model="amount"
                id="amount"
                placeholder="Amount in NGN"
                class="tw-p-3"
                v-bind:class="{
                  'tw-text-success': dirty && valid,
                  'tw-text-danger': dirty && invalid,
                }"
              />
              <span class="tw-block tw-text-danger tw-text-xs" v-if="errors">{{
                errors[0]
              }}</span>
            </validation-provider>
            <span class="tw-flex tw-space-x-1 tw-items-center">
              <span span class="tw-text-sm tw-font-normal">Amount in PI:</span>
              <h4 class="tw-text-lg tw-font-semibold tw-mb-0">
                {{ piAmount.toLocaleString() }}
                <span class="tw-text-sm tw-font-normal">PI</span>
              </h4>
            </span>
          </div>

          <div class="tw-mb-3">
            <button
              class="primary-btn w-100"
              v-bind:disabled="invalid"
              v-bind:class="{ 'tw-bg-gray4': invalid || loading }"
            >
              <span v-if="loading"
                ><i-icon
                  icon="eos-icons:bubble-loading"
                  width="20px"
                  class="tw-text-white"
                />
              </span>
              <span v-else>Buy Airtime</span>
            </button>
          </div>
        </form>
      </validation-observer>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      service_identifier: this.$route.query.identifier,
      service_categories: [],
      categories: [],
      phone_number: "",
      amount: "",
      loading: false,
      busy: false,
      active: null,
      piRate: "200",
    };
  },

  methods: {
    ...mapActions("wallet", ["balances"]),
    makeActive(selectedItem) {
      this.active =
        this.active === null
          ? selectedItem.serviceID
          : this.active === selectedItem.serviceID
          ? null
          : selectedItem.serviceID;
    },

    getServices() {
      this.busy = true;
      this.$request
        .get(
          `account/bill-payment/service-categories/${this.service_identifier}/services`
        )
        .then((res) => {
          console.log(res);
          this.service_categories = res.data.content;
          this.busy = false;
          return res;
        });
    },

    buyAirtime() {
      var payload = {
        serviceID: this.active,
        amount: this.amount,
        phone: this.phone_number,
      };
      this.loading = true;
      this.$request
        .post(`account/bill-payment/pay`, payload)
        .then((res) => {
          this.loading = false;
          this.$router.push(`/utilities-success?message=airtime recharge`);
          this.balances();
          return res;
        })
        .catch((err) => {
          this.loading = false;
          this.toastify({
            text: `Error occurred`,
            className: "info",
            style: {
              background: "red",
              fontSize: "12px",
              borderRadius: "5px",
            },
          }).showToast();
          console.log(err);
        });
    },
  },

  watch: {
    service_categories: {
      handler(val) {
        this.categories = val;
      },
      immediate: true,
      deep: true,
    },
  },

  beforeMount() {
    this.getServices();
    this.balances();
  },

  computed: {
    ...mapState("wallet", {
      walletBalance: (state) => state.balancesDataSet[0],
    }),

    piAmount() {
      let value = this.amount / this.piRate;
      return value || 0;
    },
  },
};
</script>

<style></style>

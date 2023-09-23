<template>
  <div class="tw-sticky-top tw-top-0 tw-bg-white tw-z-10">
    <div
      class="tw-bg-white tw-px-4 tw-py-4 lg:tw-ml-64 md:tw-ml-64 tw-ml-0 tw-border-b tw-border-gray6"
    >
      <div class="tw-flex tw-justify-between tw-items-center tw-w-full">
        <span class="lg:tw-block md:tw-block tw-hidden">{{ name }}</span>
        <span class="lg:tw-hidden md:tw-hidden tw-block" @click="goHome" role="button">
          <img src="@/assets/img/logo.svg" class="tw-w-12" alt="" />
        </span>
        <div
          class="tw-flex lg:tw-flex tw-items-center lg:tw-justify-end md:tw-justify-end tw-justify-end lg:tw-w-auto md:tw-w-auto tw-w-full tw-space-x-3"
        >
          <div>
            <div class="tw-flex tw-space-x-2 tw-items-center">
              <span
                class="tw-bg-primary500 tw-block tw-text-white tw-rounded-full tw-w-8 tw-h-8 tw-font-bold tw-flex tw-justify-center tw-text-xl tw-items-center"
              >
                {{ avatar }}
              </span>
              <div>
                <span class="tw-text-sm tw-font-semibold">{{
                  `Hello, ${user.firstName}`
                }}</span>
                <span
                  class="tw-flex tw-items-center tw-space-x-1"
                  :class="verified ? 'tw-text-red-600' : 'tw-text-green-600'"
                >
                  <i-icon
                    :icon="
                      verified
                        ? 'ic:baseline-circle'
                        : 'solar:verified-check-bold'
                    "
                    width="12px"
                  />
                  <span class="tw-text-xs">{{
                    verified ? "unverified" : "verified"
                  }}</span>
                </span>
              </div>
            </div>
          </div>

          <span
            class="lg:tw-hidden md:tw-hidden tw-block"
            role="button"
            @click="$emit('toggle')"
          >
            <i-icon icon="mdi:menu" width="30px" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  methods: {
    goHome() {
      this.$router.push("/dashboard").catch(() => {});
    },
  },

  computed: {
    ...mapState("auth", {
      user: (state) => state.user,
    }),

    avatar() {
      let value = this.user.firstName;
      let avatar = value.charAt(0);
      return avatar;
    },

    verified() {
      let value = this.user.kyc === null;
      return value;
    },

    name(){
      return this.$route.meta.name
    }
  },
};
</script>

<style></style>

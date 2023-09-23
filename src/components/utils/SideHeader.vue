<template>
    <div
      class=" tw-bg-white tw-pt-4 tw-pb-4 tw-scroll-smooth tw-border-0 tw-rounded-md tw-mb-5"
      style=""
    >
      <div>
        <div class="tw-px-6 tw-flex tw-items-center tw-justify-between">
          <div class="">
            <div class="tw-text-xl tw-uppercase tw-font-bold tw-text-primary500">
              {{ `${title}` }}
            </div>
            <span class="tw-text-gray4 tw-font-medium tw-text-sm">{{
              email
            }}</span>
          </div>
          <div class="tw-flex tw-justify-between">
            <slot name="card-icons"></slot>
          </div>
        </div>
        <hr class="tw-mt-2 tw-mb-0" />
        <div class="card-body tw-px-6 tw-py-3">
          <slot name="main-body">
            <div class=" w-100">
              <div class="tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-4 tw-grid-cols-2">
                <div
                  v-for="(value, name) in filterData"
                  :key="value"
                  class=""
                >
                  <span
                    class="tw-text-xs tw-text-light tw-capitalize tw-font-medium"
                    >{{ name.split("_").join(" ") }}:</span
                  >
                  <div
                    v-if="typeof value !== 'object'"
                    class="tw-font-medium tw-text-sm"
                    :class="name === 'status' ? value : ''"
                  >
                    <slot :name="name" :value="value">
                      {{ value ? value : "No data available" }}
                      </slot
                    >
                  </div>
                </div>
              </div>
            </div>
          </slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { pick } from "lodash";
  export default {
    props: {
      data: {
        type: Object,
        default: () => ({}),
      },
      title: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: false,
      },
      displayKey: {
        type: Array,
        default: () => [],
        required: false,
      },
    },
    data() {
      return {
        format: [".jpg", ".jpeg", ".png"],
        profile_picture: this.data.profile_picture,
        isSticky: false,
        scrollPosition: null,
        months: "",
      };
    },
    computed: {
      getInitals() {
        return this.title.charAt(0);
      },
  
      filterData() {
        return pick(this.data, this.displayKey);
      },
     
      // picture() {
      //   if (this.profile_picture) {
      //     return this.profile_picture;
      //   } else if (!this.profile_picture && this.data.gender == "Female") {
      //     return require("@/assets/img/female-avatar.svg");
      //   } else if (!this.profile_picture && this.data.gender == "Male") {
      //     return require("@/assets/img/male-avatar.svg");
      //   }
      // },
    },
    methods: {
      
    },
  };
  </script>
  
  <style scoped>
  .transition {
    transition: opacity 2s ease;
    animation: slide-fade 0.3s ease-in-out 0s;
    /* opacity: 0; */
  }
  </style>
  
<template>
  <div class="home">
    <div class="mb-4">
      <HeroSection/>
      <div class="tw-bg-primary500 lg:tw-px-12 md:tw-px-8 tw-px-4 tw-py-4 tw-rounded-lg tw-grid lg:tw-grid-cols-4 md:tw-grid-cols-2 tw-grid-cols-1 tw-gap-4">
        <div class="tw-flex tw-space-x-2" v-for="item in features" :key="item?.id">
          <div >
            <i-icon :icon="item?.icon" class="tw-bg-primary600 tw-h-8 tw-w-8 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-text-tertiary-800 tw-p-2"/>
          </div>
          <div class="tw-full">
            <h6 class="tw-text-white tw-mb-0 tw-text-sm tw-font-medium">{{ item?.header }}</h6>
            <p class="tw-text-xs tw-text-gray4 tw-mt-1 tw-mb-0">{{ item?.desc }}</p>
          </div>
        </div>
      </div>
      <HowTo class="mt-5" />
      <TagLine />
    </div>
  </div>
</template>

<script>
import HowTo from "@/components/HowTo.vue";
import TagLine from "@/components/TagLine.vue";
import HeroSection from "@/components/Landing/HeroSection.vue";

export default {
  name: "HomeView",
  components: { HowTo, TagLine, HeroSection },

  data(){
    return {
      features: [
        {
          id: 1, 
          icon: "streamline:interface-help-customer-support-2-customer-headphones-headset-help-microphone-phone-person-support",
          header: "24/7 Customer Support",
          desc: "Our dedicated Support Team is available 24/7, even on holiday, to assist you with any questions.",
        },
        {
          id: 2, 
          icon: "game-icons:buy-card",
          header: "Instant Trade",
          desc: "Easily complete Pi transactions with Fiat or Crypto ",
        },
        {
          id: 3, 
          icon: "solar:user-linear",
          header: "User Friendly Experience",
          desc: "You don’t need to be expert! Our easy-to-use platform makes trading simple for all users.",
        },
        {
          id: 4, 
          icon: "grommet-icons:secure",
          header: "Secure and Safe",
          desc: "High-level trusted secure system will fully protect your transactions and personal information.",
        }
      ]
    }
  }
};
</script>

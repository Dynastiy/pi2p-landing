<template>
  <div>
    <app-nav class="tw-sticky tw-top-0 lg:tw-px-44 md:tw-px-32 tw-px-6 tw-z-10" @toggleDrawer="toggleDrawer"/>
    
    <div class="lg:tw-px-44 md:tw-px-32 tw-px-6">
      <slot />
    </div>

    <mobile-nav @close="toggleDrawer" :drawer="drawer"/>

    <AppFooter />
  </div>
</template>

<script>
import AppNav from "@/components/static/AppNav.vue";
import AppFooter from "@/components/static/AppFooter.vue";

import { mapState } from "vuex";
import MobileNav from '@/components/static/MobileNav.vue';

export default {
  name: "AppHomeLayout",

  components: { AppNav, AppFooter, MobileNav},
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    switchForm(value) {
      this.operation = value;
      console.log(value);
    },

    toggleDrawer(){
      this.drawer = !this.drawer
    },
  },
  mounted() {
    this.$store.commit("modals/REMOVE_MODAL");
  },
  computed: {
    ...mapState("modals", {
      dialogVisible: (state) => state.openAuthModal,
    }),
  },
};
</script>

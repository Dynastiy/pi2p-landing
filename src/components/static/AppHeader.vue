<template>
  <div id="app-header" class="bg-white py-3 sticky-top">
    <div class="container">
      <div class="d-flex align-items-center justify-content-between">
        <router-link to="/"
          ><img src="@/assets/img/logo.svg" width="45" alt=""
        /></router-link>
        <div class="d-flex align-items-center" style="gap: 20px">
          <button class="outline-btn web-menu" @click="getStarted">get started</button>
          <a
            href="https://play.google.com/store/apps/details?id=com.mings.pi2p&pli=1"
            target="_blank"
            class=""
            ><button class="primary-btn">Download App</button></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    ...mapActions("modals", ["setOpenState"]),
    getStarted() {
      this.setOpenState();
    },
  },
};
</script>

<style scoped>

</style>

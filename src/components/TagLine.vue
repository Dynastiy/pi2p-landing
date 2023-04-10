<template>
  <div class="container mt-5">
    <div id="tag-line" class="">
   <div class="text-center"> 
    <h1 class="header-font text-white">Buy. Sell. Trade</h1>
    <p class="text-white">Your Portal to endless possibilities</p>
    <div class="mt-3 d-flex align-items-center justify-content-center" style="gap:20px">
      <!-- <button class="tertiary-btn" @click="getStarted">get started</button> -->
        <a href="https://play.google.com/store/apps/details?id=com.mings.pi2p&pli=1" target="_blank"> <img src="@/assets/img/download.png" width="120" alt=""> </a>
    </div>
</div>
  </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {};
  },
  methods: {
    ...mapActions("modals", ['setOpenState']),
    getStarted(){
      this.setOpenState()
    }
  }
};
</script>

<style>

</style>
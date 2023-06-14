<template>
  <div>
    <div v-if="loading" class="text-center">
      <i-icon icon="eos-icons:bubble-loading" width="40px" />
    </div>
    <div id="ads-table" class="" v-else>
      <div class="all-ads mt-3">
        <div v-for="item in trades" :key="item.id">
          <div class="ad-container" style="border-radius: 20px" role="button">
            <!-- <div>
          <i-icon icon="ion:list-circle" width="30px" color="var(--primary-500)"/>
        </div> -->
            <div class="ad-row">
              <div class="ads">
                <span class="item-header">Pi Quantity:</span>
                <span class="item-content">{{ item.amount }}</span>
              </div>
              <div class="ads">
                <span class="item-header">Min/Max:</span>
                <span class="item-content">{{
                  item.maxAmount + " " + "/" + " " + item.minAmount
                }}</span>
              </div>
              <div class="ads">
                <span class="item-header">User:</span>
                <span class="item-content">{{
                  item.user.firstName + " " + item.user.lastName
                }}</span>
              </div>
              <div class="ads">
                <span class="item-header">Rate:</span>
                <span class="item-content">{{
                  item.rate + " " + item.acceptedCurrency.symbol
                }}</span>
              </div>
              <div>
                <button class="button primary-btn" @click="buyAd(item)">
                  Buy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("trades", ["view"]),
    buyAd(item) {
      this.$router.push(`/trades/buy-ad/${item.id}`);
      this.view(item.id);
    },
  },
  computed: {
    ...mapState("trades", {
      trades: (state) => state.dataSet,
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style scoped>
.ad-container {
  /* display: flex;
  display: inline-flex;
  display: -webkit-flex;
  align-items: center; */
  padding: 14px 18px;
  background-color: var(--white);
}
.header-text {
  font-weight: 800;
}
#ads-table {
  /* border: 1px solid var(--primary-100); */
  /* background: var(--white);
  border-radius: 20px; */
}
.item-header {
  font-size: 14px;
  font-weight: 500;
}

.item-content {
  font-size: 15px;
  font-weight: 800;
}

.all-ads {
  display: grid;
  display: -ms-grid;
  display: -moz-grid;
  grid-template-columns: auto;
  gap: 15px;

}

.ad-row {
  width: 100%;
  display: flex;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  /* border: 1px solid var(--primary-100); */
  /* padding: 12px 20px; */
}
.ads {
  width: 100%;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
  column-gap: 15px;
}

.ad-container:hover {
  transform: translate(-5px, 2px);
  transition: 0.2s all;
}

@media (max-width: 990px) {
  .ad-row {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: auto;
    gap: 8px;
  }
  .ads {
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
  }
}
</style>

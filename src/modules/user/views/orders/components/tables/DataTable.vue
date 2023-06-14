<template>
  <div>
    <div v-if="loading" class="text-center">
      <i-icon icon="eos-icons:bubble-loading" width="40px" />
    </div>
    <div id="ads-table" class="" v-else>
      <div class="all-ads mt-3">
        <div v-for="item in orders" :key="item.id">
          <div class="ad-container" style="border-radius: 20px" role="button">
            <div class="ad-row">
              <div class="ads">
                <span class="item-header">Pi Quantity:</span>
                <span class="item-content">{{ item.amount }}</span>
              </div>
              <div class="ads">
                <span class="item-header">Amount:</span>
                <span class="item-content address">{{
                  Number(item.transaction.amount).toLocaleString() + "NGN"
                }}</span>
              </div>
              <div class="ads">
                <span class="item-header">Status:</span>
                <span class="status" :class="item.status">{{
                  item.status
                }}</span>
              </div>

              <div class="">
                <button class="button primary-btn" @click="viewOrder()">
                  view
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
    viewOrder() {},
  },
  computed: {
    ...mapState("orders", {
      orders: (state) => state.dataSet,
      loading: (state) => state.loading,
    }),
  },
};
</script>

<style scoped>
.ad-container {
  padding: 14px 18px;
  background-color: var(--white);
}
.header-text {
  font-weight: 800;
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
.ads .item-header {
  width: 100%;
}
@media (max-width: 990px) {
  .ad-row {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: auto;
    gap: 12px;
  }
  .ads {
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
  }

  .item-content.address {
    /* word-break: break-all; */
    text-align: right;
  }
}
</style>

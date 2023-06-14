<template>
  <div class="container">
    <div v-if="loading" class="text-center">
      <i-icon icon="eos-icons:bubble-loading" width="40px" />
    </div>
    <div v-else>
      <div class="details-top">
        <div class="spacer">
          <span class="" role="button" @click="$router.go(-1)">
            <i-icon icon="bx:arrow-back" width="25px" />
          </span>
          <div class="d-flex justify-content-between align-items-center">
            <h3 class="font-weight-bolder mt-3">
              Trade
              <span class="text-uppercase">#{{ createRef(data.id) }}</span>
            </h3>
            <div v-if="data.status === 'open'">
              <button class="outline-btn py-2 px-2" @click="closeTradeID">
                Close Trade
              </button>
            </div>
          </div>
          <div class="d-flex align-items-center mt-3" style="gap: 20px">
            <div class="d-flex flex-column">
              <span class="">Amount: </span>
              <span class="font-weight-bolder">{{
                data.amount + data.currency.symbol
              }}</span>
            </div>
            <el-divider direction="vertical"></el-divider>
            <div class="d-flex flex-column">
              <span class="">Date Created:</span>
              <span class="font-weight-bolder">
                {{ timeStamp(data.createdAt) }}</span
              >
            </div>
            <el-divider direction="vertical"></el-divider>
            <div>
              <span class="status" :class="data.status">{{ data.status }}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h4 class="font-weight-bolder my-3">Trade Orders</h4>
        <div v-if="data.orders.length === 0">
            <span class="text-danger">No orders for this trade</span>
        </div>
        <div id="ads-table" class="">
          <div class="all-ads">
            <div v-for="item in data.orders" :key="item.id">
              <div
                class="ad-container"
                style="border-radius: 20px"
                role="button"
              >
                <div>
                  <i-icon
                    icon="ion:list-circle"
                    width="30px"
                    color="var(--primary-500)"
                  />
                </div>
                <div class="ad-row">
                  <div class="ads">
                    <span class="item-header">Pi Quantity:</span>
                    <span class="item-content">{{ item.amount }}</span>
                  </div>
                  <div class="ads">
                    <span class="item-header">Wallet Address:</span>
                    <span class="item-content address">{{ item.address }}</span>
                  </div>
                  <div class="ads">
                    <span class="item-header">Status:</span>
                    <span class="status" :class="item.status">{{
                      item.status
                    }}</span>
                  </div>

                  <div
                    class="text-right d-flex"
                    style="gap: 10px"
                    v-if="item.status === 'pending'"
                  >
                    <button class="button primary-btn" @click="completeTrade()">
                      complete
                    </button>
                    <button
                      class="button primary-btn bg-danger"
                      @click="decline(item)"
                    >
                      decline
                    </button>
                  </div>
                </div>
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
import { createRef, timeStamp } from "@/filter.js";
export default {
  data() {
    return {
      createRef,
      timeStamp,
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions("trades", ["view", "close"]),
    ...mapActions("orders", ["declineOrder"]),
    buyAd(item) {
      this.$router.push(`/buy-ad/${item.id}`);
      this.view(item.id);
    },
    closeTradeID() {
      this.close(this.id).then(() => {
        this.view(this.id);
      });
    },
    decline(value) {
      this.declineOrder(value.id);
    },
    completeTrade() {},
  },
  beforeMount() {
    this.view(this.id);
  },
  computed: {
    ...mapState("trades", {
      data: (state) => state.dataSet,
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
  align-items: center;
  /* border: 1px solid var(--primary-100); */
  /* padding: 12px 20px; */
}
.ads {
  width: 100%;
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  flex-direction: column;
}

.ads .item-header {
  width: 100%;
}

.ad-container:hover {
  transform: translate(-5px, 2px);
  transition: 0.2s all;
}

.details-top {
  background-color: var(--tertiary-50);
  border-radius: 10px;
}

@media (max-width: 990px) {
  .ad-row {
    display: grid;
    display: -ms-grid;
    display: -moz-grid;
    grid-template-columns: auto;
    gap: 8px;
    align-items: start;
  }
  .ads {
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
    border-bottom: 0.4px solid var(--primary-100);
    padding-bottom: 10px;
  }

  .item-content.address {
    word-break: break-all;
    text-align: right;
  }
}
</style>

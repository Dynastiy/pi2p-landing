<template>
  <div class="mt-2">
    <!-- <b-tabs content-class="" >
        <b-tab
          :active="Boolean(currentTab)"
          :title="tab.title"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="activateCurrentTab(index)"
        >
          <slot :activeTab="activeTab" />
        </b-tab>
      </b-tabs> -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane
        :label="tab.title"
        :name="tab.name"
        v-for="(tab, index) in tabs"
        :key="index"
      >
        <div class="tw-bg-white tw-p-4 tw-mt-3">
          <slot :activeTab="activeTab" />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      default: () => [],
      type: Array,
      required: false,
    },
    currentTab: {
      default: 0,
      type: Number,
      required: false,
    },
    currentName: {
      default: "naira",
      type: String,
    },
  },
  data() {
    return {
      activeTab: 0,
      selectedIndex: 0,
      activeName: "naira",
    };
  },

  methods: {
    activateCurrentTab(index) {
      this.activeTab = index;
      this.selectedIndex = index;
    },

    handleClick(tab, event) {
      console.log(tab, event);
      this.activeTab = tab._data.index;
      this.activeName = tab.name;
    },
  },

  watch: {
    currentTab: {
      handler: function (val) {
        this.activeTab = val;
        this.selectedIndex = val;
      },
      immediate: true,
      deep: true,
    },

    // currentName: {
    //     handler: function(val) {
    //         this.activeName = val
    //     },
    // }
  },
};
</script>

<style>
.el-tabs__item {
  color: var(--gray-400) !important;
  font-weight: 400;
  font-size: 13.7px;
}

.el-tabs__item.is-active {
  color: var(--primary-500) !important;
  font-weight: 600;
}

.el-tabs__active-bar {
  background-color: var(--primary-500) !important;
}
</style>

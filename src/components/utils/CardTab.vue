<template>
    <div v-if="active" class="" role="" aria-labelledby="pills-class-board-tab">
      <div v-if="tabs" class="">
        <ul class="d-flex list-unstyled mb-0 mx-3">
          <li
            v-for="(subTab, index) in subTabs"
            :key="index"
            class="px-2 py-2 pointer text-muted"
            :class="[index === selectedIndex ? 'active' : '']"
            @click="selectTab(index)"
          >
            {{ subTab.title }}
            <span></span>
          </li>
        </ul>
      </div>
      <slot>
        <h1>Hello Word</h1>
      </slot>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from "vue";
  export default Vue.extend({
    props: {
      tabs: {
        type: Boolean,
        required: false,
        default: false,
      },
      title: {
        type: String,
        required: true,
      },
    },
    data() {
      return {
        subTabs: [],
        active: false,
        selectedIndex: 0,
      };
    },
    watch: {
      active: {
        handler(newVal) {
          if (this.tabs && newVal === true) {
            this.subTabs = this.$children;
          }
        },
        immediate: true,
      },
    },
    mounted() {
      if (this.tabs) {
        this.subTabs = this.$children;
        const urlTab = this.checkUrlForTab();
        this.selectTab(urlTab);
      }
    },
    methods: {
      selectTab(subTabIndex) {
        this.selectedIndex = subTabIndex;
        // loop over all the tabs
        this.subTabs.forEach((control, index) => {
          control.active = index === subTabIndex;
          if (index === subTabIndex) {
            // debugger
  
            this.$router
              .replace({
                // name: this.$route.name,
                // params: {
                //   ...this.$route.params
                // },
                query: {
                  ...this.$route.query,
                  subTab: index,
                },
              })
              .catch(() => {});
          }
        });
        // console.log(this.tabs)
      },
      checkUrlForTab() {
        if (this.$route.query.subTab) {
          return Number(this.$route.query.subTab);
        }
        return 0;
      },
    },
  });
  </script>
  
  <style scoped>
  
  li {
    position: relative;
  }
  
  span {
    position: absolute;
    bottom: 0;
    width: 30px !important;
    height: 30px !important;
    background-color: var(--primary-900) !important;
  }
  
  </style>
  
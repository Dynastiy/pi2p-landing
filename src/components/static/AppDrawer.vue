<template>
  <div
    id="app-drawer"
    class="tw-pt-6 tw-border-r tw-p-4 tw-bg-white tw-border-gray6 tw-z-20 tw-fixed tw-left-0 tw-top-0 tw-h-screen tw-overflow-auto tw-w-64"
  >
    <div class="">
      <img src="@/assets/img/logo.svg" class="tw-w-16 tw-h-16" alt="" />
    </div>

    <hr class="tw-my-4" />
    <ul class="tw-pl-0">
      <li v-for="item in menu" :key="item.id">
        <div class="menu-item">
          <span
            class="menu-item-link"
            :role="item.header ? '' : 'button'"
            @click="item.hasChildren ? openSubMenu(item) : goToLink(item)"
            :class="{ 'active-link': item.parent === routeParent }"
          >
            <div class="tw-flex tw-items-center tw-space-x-2">
              <i-icon
                :icon="item.icon"
                v-if="item.icon"
                class="menu-item-icon"
                width="23px"
              />
              <span class="tw-flex tw-flex-col">
                <span :class="item.header ? 'menu-title-header' : 'menu-title'">
                  {{ item.title }}
                </span>
              </span>
            </div>
            <span v-if="item.hasChildren">
              <i-icon
                :icon="
                  subMenu === item.id ? 'prime:angle-down' : 'prime:angle-right'
                "
                width="22px"
              />
            </span>
          </span>
          <div
            class="sub-menu tw-flex tw-flex-col tw-space-y-2 tw-mt-2"
            :class="{ 'sub-menu-open': subMenu === item.id }"
          >
            <span
              role="button"
              class=""
              v-for="subMenu in item.children"
              :key="subMenu.id"
              @click="$router.push(subMenu.url)"
            >
              <span
                class="sub-menu-items tw-flex tw-space-x-2"
                :class="{ 'active-sub-menu': subMenu.subItem === routeName }"
              >
                <i-icon
                  :icon="subMenu.icon"
                  class="menu-item-icon"
                  width="23px"
                />
                <span class="sub-menu-title"> {{ subMenu.title }} </span>
              </span>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // subMenu: null,
    };
  },

  methods: {
    goToLink(item) {
      this.$router.push(item.url).catch(() => {});
    },

    openSubMenu(item) {
      let value = this.subMenu === item.id ? null : item.id;
      this.$store.commit("drawer/SET_SUB_MENU", value);
    },

    collapseAppDrawer() {
      this.$store.dispatch("drawer/setCollapseState");
    },
  },

  computed: {
    routeName() {
      return this.$route.meta.name;
    },

    routeParent() {
      return this.$route.meta.parent;
    },

    user() {
      return this.$store.getters["auth/getUser"];
    },
    
    ...mapState("drawer", {
      isCollapsed: (state) => state.collapsed,
      subMenu: (state) => state.subMenu,
    }),
  },
};
</script>

<style>

</style>

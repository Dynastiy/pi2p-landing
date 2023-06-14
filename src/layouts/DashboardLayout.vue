<template>
  <div id="body">
    <AppHeader class="sticky-top" />
    <div class="spacer px-0 main">
      <slot />
    </div>
    <div class="bottom-sheet">
      <RingBottomNavigation
        border-color="#563876"
        title-color="#563876"
        icon-color="#563876"
        :options="options"
        v-model="selected"
      />
    </div>
  </div>
</template>

<script>
// import { WindowsBottomNavigation } from "bottom-navigation-vue";
import AppHeader from "@/modules/user/components/static/AppHeader.vue";
export default {
  name: "DashboardLayout",
  data: () => ({
    selected: 1,
    options: [
      { id: 1, icon: "fas fa-home", title: "Home", path: { name: "user" } },
      {
        id: 2,
        icon: "fas fa-shopping-cart",
        title: "Trades",
        path: { name: "trades" },
      },
      {
        id: 3,
        icon: "fas fa-user",
        title: "Profile",
        path: { name: "profile" },
      },
    ],
  }),
  computed: {},
  components: { AppHeader },
};
</script>

<style>
#body {
  background: var(--primary-bg);
  min-height: 100vh;
}
.bottom-sheet {
  display: none;
}

@media (max-width: 990px) {
  .bottom-sheet {
    display: block;
  }
  .main {
    padding-bottom: 90px;
  }
}
</style>

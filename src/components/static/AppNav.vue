<template>
  <div id="" class="tw-bg-white tw-py-3">
    <div class="tw-flex tw-items-center tw-justify-between">
      <router-link to="/"
        ><img src="@/assets/img/logo.svg" width="45" alt=""
      /></router-link>

      <div class="lg:tw-block md:tw-block tw-hidden">
        <ul class="tw-flex tw-space-x-4 tw-mb-0 menu">
          <li>
            <router-link
              class="tw-text-sm tw-text-light tw-font-capitalize"
              to="/"
              >home</router-link
            >
          </li>
          <li>
            <router-link
              class="tw-text-sm tw-text-light tw-font-capitalize"
              to="/about"
              >about</router-link
            >
          </li>
          <li>
            <router-link
              class="tw-text-sm tw-text-light tw-font-capitalize"
              to="/how-it-works"
              >video & learn</router-link
            >
          </li>
          <li>
            <router-link
              class="tw-text-sm tw-text-light tw-font-capitalize"
              to="/contact"
              >contact</router-link
            >
          </li>
        </ul>
      </div>

      <div class="lg:tw-flex md:tw-flex tw-hidden tw-items-center tw-space-x-2">
        <button
          class="outline-btn tw-py-2 tw-px-3"
          @click="$router.push('/register')"
        >
          register
        </button>
        <button
          @click="$router.push('/login')"
          class="primary-btn tw-py-2 tw-px-3"
        >
          login
        </button>
        <!-- <a
          href="https://play.google.com/store/apps/details?id=com.mings.pi2p&pli=1"
          target="_blansk"
          class=""
          ><button class="primary-btn tw-py-2 tw-px-3">Download App</button></a
        > -->
      </div>

      <div class="lg:tw-hidden md:tw-hidden tw-block">
        <span class="" role="button" @click="$emit('toggleDrawer')">
          <i-icon icon="mdi:menu" width="30px" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
        drawerVisible: false,
    };
  },
  methods: {},
};
</script>

<style scoped>
.menu li .router-link-exact-active {
  color: var(--dark) !important;
  font-weight: bold;
}
</style>

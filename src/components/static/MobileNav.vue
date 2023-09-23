<template>
  <div>
    <el-drawer
      direction="ttb"
      :visible.sync="drawerVisible"
      :with-header="false"
      size="auto"
    >
      <div class="p-4 mobile--menu">
        <div class="tw-flex tw-justify-end tw-mb-8">
          <span @click="$emit('close')" role="button">
            <i-icon icon="codicon:close" class="tw-text-red-600" width="20px" />
          </span>
        </div>
        <ul class="tw-flex tw-flex-col tw-pl-0 tw-space-y-6 menu">
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
          <li>
            <button
              class="outline-btn tw-py-2 tw-px-3"
              @click="$router.push('/register')"
            >
              register
            </button>
          </li>
          <li>
            <button
              @click="$router.push('/login')"
              class="primary-btn tw-py-2 tw-px-3"
            >
              login
            </button>
          </li>
        </ul>
      </div>
    </el-drawer>
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

  watch: {
    drawer: {
      handler(val) {
        this.drawerVisible = val;
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
.menu li .router-link-exact-active {
  color: var(--dark) !important;
  font-weight: bold;
}
</style>

<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />

    <!-- Auth Modals  -->
    <div class="auth">
      <el-dialog
        :visible.sync="dialogVisible"
        :close-on-click-modal="false"
        class="container"
        :show-close="false"
      >
        <LoginView @goToRegister="switchForm" v-if="operation === 'login'"/>
        <RegisterView @goToLogin="switchForm"  v-if="operation === 'register'"/>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/static/AppHeader.vue";
import AppFooter from "@/components/static/AppFooter.vue";
import LoginView from '@/modules/auth/views/loginView.vue';
import RegisterView from '@/modules/auth/views/registerView.vue';

import { mapState } from "vuex";

export default {
  name: "AppHomeLayout",

  components: { AppHeader, AppFooter, LoginView, RegisterView },
  data() {
    return {
      operation: "login"
    };
  },
  methods: {
    switchForm(value) {
      this.operation = value
      console.log(value);
    }
  },
  mounted() {
      this.$store.commit("modals/REMOVE_MODAL");
  },
  computed: {
    ...mapState("modals", {
      dialogVisible: (state) => state.openAuthModal
    }),
   
  },
};
</script>

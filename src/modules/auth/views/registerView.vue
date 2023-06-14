<template>
  <div class="auth-container">
    <div class="auth-content">
      <div>
        <img src="@/assets/img/logo.svg" width="50px" height="50px" alt="" />
      </div>

      <div>
        <h6 class="text-uppercase text-center my-3"  style="font-weight: 700;">
          create new account
        </h6>

        <form action="" @submit.prevent="register">
          <span v-if="error" class="mb-3 error-alert">{{ error }}</span>

          <div class="d-lg-flex align-items-center" style="gap:20px">
            <div class="mb-3">
              <label for="">First Name</label>
              <div class="input-field">
                <i-icon icon="solar:user-linear" class="form-icon" />
                <input
                  type="text"
                  v-model="credentials.firstName"
                  id="firstName"
                  placeholder="First Name"
                />
              </div>
            </div>
            <div class="mb-3">
              <label for="">Last Name</label>
              <div class="input-field">
                <i-icon icon="solar:user-linear" class="form-icon" />
                <input
                  type="text"
                  v-model="credentials.lastName"
                  id="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div class="mb-3">
            <label for="">Email</label>
            <div class="input-field">
              <i-icon icon="lucide:at-sign" class="form-icon" />
              <input
                type="email"
                v-model="credentials.email"
                id="email"
                placeholder="Email"
              />
            </div>
          </div>

          <div class="mb-4">
            <label for="">Password</label>
            <div class="input-field">
              <i-icon icon="uil:padlock" class="form-icon" />
              <input
                type="password"
                v-model="credentials.password"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>

          <div class="">
            <button
              class="primary-btn w-100"
              :class="loading ? 'bg-secondary' : ''"
              :disabled="loading"
            >
              <span v-if="loading"
                ><i-icon
                  icon="eos-icons:bubble-loading"
                  width="20px"
                  class="text-white"
                />
              </span>
              <span v-else>create account</span>
            </button>
          </div>

          <div class="text-center mt-2">
            <small
              >Already have an account?
              <span
                role="button"
                style="color: var(--primary-500);  font-weight: 700;"
                @click="$emit('goToLogin', 'login')"
                >Login</span
              ></small
            >
          </div>

          <div class="text-center mt-2">
            <span role="button" class="font-weight-bold" @click="goBack"
              >Go Back</span
            >
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => {
    return {
      credentials: {
        email: null,
        password: null,
        firstName: null,
        lastName: null
      },
    };
  },
  methods: {
    ...mapActions("auth", ["registerUser"]),
    ...mapActions("modals", ["setOpenState"]),
    register() {
      this.registerUser(this.credentials);
    },

    goBack() {
      this.setOpenState();
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
    }),
  },
};
</script>

<style></style>

<template>
    <div class="auth-container">
      <div class="auth-content">
        <div>
          <img src="@/assets/img/logo.svg" width="50px" height="50px" alt="" />
        </div>
  
        <div>
          <h5 class="text-uppercase text-center my-3" style="font-weight: 700;">
            user login
          </h5>
          
          <form action="" @submit.prevent="login">
            <span v-if="error" class="mb-3 error-alert">{{ error }}</span>
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
  
            <div class="text-right mb-3">
              <router-link
                to="/forgot-password"
                style="color: var(--primary-500)"
                >Forgot Password</router-link
              >
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
                <span v-else>sign in</span>
              </button>
            </div>

            <div class="text-center mt-2">
             <small>Do not have an account? <span role="button" style="color: var(--primary-500); font-weight: 700;" @click="$emit('goToRegister', 'register')">Register</span></small>
            </div>

            <div class="text-center mt-2">
              <span role="button" class="font-weight-bold" @click="goBack">Go Back</span>
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
          email: "",
          password: "",
        },
      };
    },
    methods: {
      ...mapActions("auth", ["loginUser"]),
      ...mapActions("modals", ['setOpenState']),
      login() {
        let credentials = {
          email: this.credentials.email,
          password: this.credentials.password,
        };
        this.loginUser(credentials);
      },

      goBack(){
        this.setOpenState()
      }
    },
  
    mounted() {
      this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
    },
  
    computed: {
      ...mapState("auth", {
        loading: (state) => state.loading,
        error: (state) => state.error,
        errors: (state) => state.validationErrors,
        user: (state) => state.user
      }),
    },
  };
  </script>
  
  <style></style>
  
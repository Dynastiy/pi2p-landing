<template>
  <div>
    <div class="tw-mb-8">
      <img src="@/assets/img/logo.svg" class="tw-h-12 tw-w-12" alt="" />
      <h5 class="tw-font-bold tw-text-2xl tw-mb-0">Email Verification</h5>
      <small class="tw-text-light tw-text-xs"
        >Enter the verification code sent to {{ emailAddress }}
      </small>
    </div>
    <div class="tw-my-6">
      <PincodeInput v-model="pin" placeholder="-" />
    </div>
    <div class="tw-text-center tw-mb-4">
      <span
        @click="resendOTP"
        class="tw-text-sm tw-font-semibold tw-text-primary500"
        >Resend OTP
      </span>
    </div>
    <div class="tw-text-center">
      <button
        @click="verifyOTP"
        class="primary-btn tw-w-full"
        :class="{ 'bg-secondary': pin.length < 4 }"
        :disabled="pin.length < 4"
      >
        Verify
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {},
  data: () => {
    return {
      credentials: {
        email: "",
        password: "",
      },
      typePassword: true,
      cardNumber: {},
      emailAddress: "",
      pin: "",
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),

    onSubmit() {
      let credentials = {
        email: this.credentials.email,
        password: this.credentials.password,
      };
      this.loginUser(credentials);
    },

    resendOTP() {
      var payload = {
        email: this.email,
      };
      this.$request
        .post(`auth/resend-otp`, payload)
        .then((res) => {
          console.log(res);
          var resPayload = res.data.message;
          this.toastify({
            text: `${resPayload}`,
            className: "info",
            style: {
              background: "green",
              fontSize: "12px",
              borderRadius: "5px",
            },
          }).showToast();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    verifyOTP() {
      var payload = {
        email: this.email,
        otp: this.pin,
      };
      this.$request
        .post(`auth/verify-otp`, payload)
        .then((res) => {
          this.$router.push('/login')
          return res
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  watch: {
    email: {
      handler(val) {
        let emailInfo = val.split("@");
        let mainEmail = emailInfo[0].split("");
        let spacing = mainEmail.length;
        let hideInfo = mainEmail.fill("*", "2", spacing);
        this.emailAddress = `${hideInfo.join("")}@${emailInfo[1]}`;
      },
      immediate: true,
    },
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
      success: (state) => state.success,
    }),

    email() {
      const data = this.$route.query.email;
      return data;
    },
  },
};
</script>

<style>
.vue-pincode-input-wrapper {
  width: 100%;
  justify-content: center;
  gap: 3px;
}

.vue-pincode-input {
  border: 1px solid var(--gray-200) !important;
  box-shadow: unset !important;
  padding: 12px !important;
  border-radius: 4px;
  max-width: 60px !important;
  font-size: 20px;
  font-weight: 600;
  outline: none !important;
}
</style>

<template>
  <div class="auth-content">
    <div>
      <div class="tw-mb-8 ">
        <img
          src="@/assets/img/logo.svg"
          class="tw-h-12 tw-w-12"
          alt=""
        />
        <h5 class="tw-font-bold tw-text-2xl tw-mb-0">Welcome back,</h5>
        <small class="tw-text-light tw-text-xs">Sign in to continue to Pi2P</small>
      </div>
      <validation-observer v-slot="{ invalid, handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <span v-if="error" class="tw-mb-3 error-alert">{{ error }}</span>

          <validation-provider
            name="email"
            rules="required|email"
            v-slot="{ dirty, valid, invalid, errors }"
          >
            <div class="field">
              <input
                type="email"
                name="email"
                id="email"
                v-model="credentials.email"
                placeholder="xxxx@xx.xxx"
                v-bind:class="{
                  'tw-text-success': dirty && valid,
                  'tw-text-danger': dirty && invalid,
                }"
              />
              <span
                class="email-iccon"
                role="button"
                @click="typePassword = !typePassword"
              >
                <i-icon icon="fluent:mail-24-regular" class="form-icon" />
              </span>
              <span class="invalid-feedback d-inline-block" v-show="errors">{{
                errors[0]
              }}</span>
              <label for="email">User Email</label>
            </div>
          </validation-provider>

          <validation-provider
            class="tw-mt-4"
            name="password"
            rules="required"
            v-slot="{ dirty, valid, invalid, errors }"
          >
            <div class="field">
              <input
                :type="typePassword ? 'password' : 'text'"
                name="password"
                id="password"
                v-model="credentials.password"
                v-bind:class="{
                  'tw-text-success': dirty && valid,
                  'tw-text-danger': dirty && invalid,
                }"
                placeholder="Password"
              />
              <span
                class="password-iccon"
                role="button"
                @click="typePassword = !typePassword"
              >
                <i-icon
                  :icon="typePassword ? 'tabler:eye' : 'gridicons:not-visible'"
                  class="form-icon"
                />
              </span>
              <span class="invalid-feedback d-inline-block" v-show="errors">{{
                errors[0]
              }}</span>
              <label for="password">Password</label>
            </div>
          </validation-provider>

          <div class="tw-mt-8">
            <button
              class="primary-btn w-100 tw-py-4"
              v-bind:disabled="invalid"
              :class="{ 'tw-bg-gray4': invalid }"
            >
              <span>Login</span>
            </button>
          </div>
        </form>
      </validation-observer>
      <div class="tw-text-center tw-mt-3">
        <span class="tw-text-sm tw-font-semibold"
          >Don't have an account?
          <router-link to="/register" class="tw-text-primary500"
            >Sign Up</router-link
          >
        </span>
      </div>
      <div class="tw-text-center tw-mt-1">
        <span class="tw-text-sm tw-font-semibold">
          <router-link to="/" class="tw-text-primary500"
            >Go to Homepage</router-link
          >
        </span>
      </div>
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
      disabled: true,
      cardNumber: {},
    };
  },
  methods: {
    ...mapActions("auth", ["loginUser"]),

    onSubmit() {
      let credentials = {
          email: this.credentials.email,
          password: this.credentials.password,
        };
        this.loginUser(credentials)
    },
  },

  mounted() {
    this.$store.commit("auth/REMOVE_ERROR_SUCCESS");
  },

  watch: {
  },

  computed: {
    ...mapState("auth", {
      loading: (state) => state.loading,
      error: (state) => state.error,
      errors: (state) => state.validationErrors,
      user: (state) => state.user,
      success: (state) => state.success,
    }),
  },
};
</script>

<style scoped>
.form-icon {
  font-size: 20px;
  color: var(--gray-400);
}
.field {
  display: flex;
  flex-flow: column-reverse;
  margin-bottom: 20px;
  position: relative;

  width: 100%;
}

.invalid-feedback {
  position: absolute;
  bottom: -18px;
  font-size: 12px;
  /* right: 0; */
}

.password-iccon,
.email-iccon {
  position: absolute;
  bottom: 6px;
  right: 0;
}
/**
  * Add a transition to the label and input.
  * I'm not even sure that touch-action: manipulation works on
  * inputs, but hey, it's new and cool and could remove the 
  * pesky delay.
  */
label,
input {
  transition: all 0.2s;
  touch-action: manipulation;
}

input {
  font-size: 14px;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-family: inherit;
  -webkit-appearance: none;
  border-radius: 0;
  padding: 0;
  cursor: text;
  padding: 4px 0;
}

input:focus {
  outline: 0;
  border-bottom: 1px solid var(--primary-500);
  padding: 12px 0;
}

label {
  /* text-transform: uppercase; */
  /* letter-spacing: 0.05em; */
  font-size: 14px;
}
/**
  * Translate down and scale the label up to cover the placeholder,
  * when following an input (with placeholder-shown support).
  * Also make sure the label is only on one row, at max 2/3rds of the
  * field—to make sure it scales properly and doesn't wrap.
  */
input:placeholder-shown + label {
  cursor: text;
  max-width: 66.66%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  transform-origin: left bottom;
  transform: translate(0, 1.125rem) scale(1);
}

input:placeholder-shown + .form-icon {
  color: red;
}
/**
  * By default, the placeholder should be transparent. Also, it should 
  * inherit the transition.
  */
::-webkit-input-placeholder {
  opacity: 0;
  transition: inherit;
}
/**
  * Show the placeholder when the input is focused.
  */
input:focus::-webkit-input-placeholder {
  opacity: 1;
}
/**
  * When the element is focused, remove the label transform.
  * Also, do this when the placeholder is _not_ shown, i.e. when 
  * there's something in the input at all.
  */
input:not(:placeholder-shown) + label,
input:focus + label {
  transform: translate(0, 0) scale(1);
  cursor: pointer;
}
</style>

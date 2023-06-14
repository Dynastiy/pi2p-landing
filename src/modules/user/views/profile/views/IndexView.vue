<template>
  <div id="user-profile">
    <div class="user-profile">
      <div class="d-flex justify-content-center text-center">
        <div>
          <span class="user-icon text-uppercase mb-2 mx-auto">{{
            user.firstName.slice(0, 2)
          }}</span>
          <h5>{{ user.firstName + " " + user.lastName }}</h5>
          <small>{{ user.email }}</small>
        </div>
      </div>
      <div class="mt-3 d-flex flex-column" style="gap: 20px">
        <router-link to="/edit-profile">
          <div
            class="d-flex align-items-center shadow-sm justify-content-between payment-method"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon icon="la:user-edit" width="18px" />
              <span>Edit Profile</span>
            </div>
            <span>
              <i-icon icon="prime:angle-right" width="30px" />
            </span>
          </div>
        </router-link>

        <router-link to="/kyc">
          <div
            class="d-flex align-items-center shadow-sm justify-content-between payment-method"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon icon="iconoir:verified-user" width="18px" />
              <span>KYC</span>
            </div>
            <span>
              <i-icon icon="prime:angle-right" width="30px" />
            </span>
          </div>
        </router-link>

        <router-link to="/privacy-policy">
          <div
            class="d-flex align-items-center shadow-sm justify-content-between payment-method"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon icon="ic:outline-privacy-tip" width="18px" />
              <span>Privacy Policy</span>
            </div>
            <span>
              <i-icon icon="prime:angle-right" width="30px" />
            </span>
          </div>
        </router-link>

        <router-link to="/terms-and-conditions">
          <div
            class="d-flex align-items-center shadow-sm justify-content-between payment-method"
          >
            <div class="d-flex align-items-center" style="gap: 10px">
              <i-icon icon="solar:document-add-outline" width="18px" />
              <span>Terms of Use</span>
            </div>
            <span>
              <i-icon icon="prime:angle-right" width="30px" />
            </span>
          </div>
        </router-link>

        <a href="">
            <div
          class="d-flex align-items-center shadow-sm justify-content-between payment-method"
        >
          <div class="d-flex align-items-center" style="gap: 10px">
            <i-icon icon="fluent:people-community-20-regular" width="18px" />
            <span>Our Community</span>
          </div>
          <span>
            <i-icon icon="prime:angle-right" width="30px" />
          </span>
        </div>
        </a>
        

        <router-link to="/logout">
            <div
          class="d-flex align-items-center shadow-sm justify-content-between payment-method"
        >
          <div class="d-flex align-items-center" style="gap: 10px">
            <i-icon icon="solar:logout-2-linear" width="18px" />
            <span>Logout</span>
          </div>
        </div>
        </router-link>
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      pi_amount: "",
    };
  },
  methods: {
    ...mapActions('profile', ['profile'])
  },
  beforeMount(){
    this.profile()
  },
  computed: {
    ...mapState("profile", {
      user: (state) => state.dataSet,
    }),
  },
};
</script>

<style scoped>
.payment-method {
  background: var(--gray-50);
  padding: 8px 12px;
  border-radius: 12px;
  color: var(--primary-800);
}
.info {
  background: var(--gray-50);
}
h5,
label {
  font-weight: 600;
}

label {
  font-size: 14px;
  margin-bottom: 0;
}
#user-profile {
  display: flex;
  display: inline-flex;
  display: -webkit-flex;
  justify-content: center;
}
.user-profile {
  background: var(--white);
  width: 40%;
  padding: 20px;
}

@media (max-width: 990px) {
  .user-profile {
    width: 90%;
  }
}
</style>

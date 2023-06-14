<template>
  <div id="user-profile">
    <div class="user-profile">
      <h5 class="text-center mb-3">Edit and Update Profile Details</h5>
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
        <el-collapse accordion>
          <el-collapse-item name="1">
            <template slot="title">
              Personal Details
            </template>
            <div>
                <personal-details/>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2">
            <template slot="title">
              Update Next of Kin
            </template>
            <div>
             <next-of-kin/>
            </div>
          </el-collapse-item>
         
          <el-collapse-item name="3">
            <template slot="title">
              Change Password
            </template>
            <div>
              <reset-password/>
            </div>
          </el-collapse-item>
          
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NextOfKin from '../components/forms/NextOfKin.vue';
import PersonalDetails from '../components/forms/PersonalDetails.vue';
import ResetPassword from '../components/forms/ResetPassword.vue';
export default {
  components: { PersonalDetails, NextOfKin, ResetPassword },
  data() {
    return {
        activeName: '1'
    };
  },
  methods: {},
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

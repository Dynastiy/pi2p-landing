<template>
  <div class="personal-details">
    <div class="mb-2">
      <label for="">First Name</label>
      <input type="text" v-model="firstName" />
    </div>
    <div class="mb-2">
      <label for="">Last Name</label>
      <input type="text" v-model="lastName" />
    </div>
    <div class="mb-2">
      <label for="">Phone Number</label>
      <input type="tel" v-model="phone" />
    </div>
    <div class="mb-2">
      <label for="">Date of Birth</label>
      <input type="date" v-model="dob" />
    </div>
    <div class="mb-2">
      <label for="">Gender</label>
      <select name="" v-model="gender" id="">
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="nil">Prefer not to Specify</option>
      </select>
    </div>
    <div class="mb-3">
      <label for="">Address</label>
      <input type="text" v-model="address" />
    </div>

    <div>
      <button class="button w-100 primary-btn" @click="submit">save</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      payload: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        dateOfBirth: "",
        gender: "",
        address: "",
      },
    };
  },
  methods: {
    ...mapActions("profile", ["updatePersonalDetails"]),
    submit() {
      this.updatePersonalDetails(this.payload);
    },
  },
  computed: {
    ...mapState("profile", {
      user: (state) => state.dataSet,
      loading: (state) => state.loading,
    }),
    firstName: {
      get: function () {
        return this.user.firstName;
      },
      set: function (newValue) {
        this.payload.firstName = newValue;
      },
    },
    lastName: {
      get: function () {
        return this.user.lastName;
      },
      set: function (newValue) {
        this.payload.lastName = newValue;
      },
    },
    phone: {
      get: function () {
        return this.user.phone;
      },
      set: function (newValue) {
        this.payload.phoneNumber = newValue;
      },
    },
    dob: {
      get: function () {
        return this.user.dateOfBirth;
      },
      set: function (newValue) {
        this.payload.dateOfBirth = newValue;
      },
    },
    gender: {
      get: function () {
        return this.user.gender;
      },
      set: function (newValue) {
        this.payload.gender = newValue;
      },
    },
    address: {
      get: function () {
        return this.user.address;
      },
      set: function (newValue) {
        this.newPageNumber = newValue;
      },
    },
  },
};
</script>

<style></style>

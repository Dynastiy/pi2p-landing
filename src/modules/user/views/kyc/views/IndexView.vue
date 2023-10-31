<template>
  <div class="container kyc tw-mt-5">
    <h4>Submit KYC</h4>
    <form @submit.prevent="completeKYC" class="tw-mt-3 tw-p-3">
      <span v-if="error" class="mb-3 error-alert">{{ error }}</span>
      <div class="mb-3">
        <label for="">Full Legal Name</label>
        <input type="text" v-model="full_legal_name" />
      </div>

      <div class="d-lg-flex align-items-center" style="gap: 30px">
        <div class="mb-3 w-100">
          <label for="">Phone Number</label>
          <input type="number" v-model="phoneNumber" />
        </div>
        <div class="mb-3 w-100">
          <label for="">Email <span class="text-danger small">*(Registered Email)</span> </label>
          <input type="email" v-model="email" />
        </div>
      </div>

      <div class="mb-3">
        <label for="">Document Type</label>
        <select name="" id="" v-model="document_type">
          <option v-for="item in docs" :key="item.id" :value="item.name">{{ item.name }}</option>
        </select>
        <!-- <input type="text" v-model="document_type" /> -->
      </div>

      <div class="mb-4">
        <label for="">Document</label>
        <input id="file-ip-1" @change="addDocument($event)" type="file" />
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
          <span v-else>submit</span>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import docs from "@/api/documents"
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      full_legal_name: "",
      phoneNumber: "",
      document_type: "",
      document: "",
      email: "",
      docs,
    };
  },
  methods: {
    ...mapActions("kyc", ["submitKYC"]),
    completeKYC() {
      let formData = new FormData();
      formData.append("full_legal_name", this.full_legal_name);
      formData.append("phoneNumber", this.phoneNumber);
      formData.append("document_type", this.document_type);
      formData.append("document", this.document);
      formData.append("email", this.email);
      this.submitKYC(formData);
    },
    addDocument() {
      const input = event.target;
      this.document = input.files[0];
      console.log(this.document);
    },
  },
  computed: {
    ...mapState("kyc", {
      loading: (state) => state.loading,
      error: (state) => state.error
    }),
  },
};
</script>

<style scoped>
  input, select {
    padding: 8px;
  }

  label{
    font-size: 13px
  }
</style>

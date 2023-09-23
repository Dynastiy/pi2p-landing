<template>
  <div>
    <button @click="signIn">Deposit Pi</button>
    <!-- <button id="but">Deposit Pi</button> -->
  </div>
</template>

<!-- <script src="https://sdk.minepi.com/pi-sdk.js"></script> -->
<!-- <script>

</script> -->
<script>
export default {
  data() {
    return {
      AuthResult: {
        accessToken: String,
        user: {
          uid: String,
          username: String,
        },
      },
    };
  },
  methods: {
    async signIn() {
      const PiNetworkClient = window.Pi;
      console.log(PiNetworkClient, "na wa for pi o");
      const scopes = ['username', 'payments'];  
      console.log("testing the button");

      try {
        const user = await PiNetworkClient.authenticate(scopes, this.onIncompletePayment);
        console.log(`Hello ${user.username}`);
      } catch (err) {
        console.log(err, 'wonderful');
      }
    },

    onIncompletePayment(){
      console.log("ommmo, e choke")
    }
    
    
    // signInUser() {},
  },

  mounted() {
    
  },
};
</script>

<style></style>

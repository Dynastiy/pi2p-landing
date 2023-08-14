<template>
  <div>
    <!-- <button @click="signIn">Deposit Pi</button> -->
    <button id="but">Deposit Pi</button>
  </div>
</template>

<script src="http://sdk.minepi.com/pi-sdk.js"></script>
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
      const PiNetworkClient = window.PiNetwork;
      try {
        const user = await PiNetworkClient.Authenticate();
        console.log(`Hello ${user.username}`);
      } catch (err) {
        // Not able to fetch the user
      }
      // const scopes = ["username", "payments"];
      // await window.Pi.authenticate(scopes).then((res) => {
      //   console.log("Welcome to Pi");
      //   console.log(res);
      // });
    },
    signInUser() {},
  },

  mounted() {
    const PiNetworkClient = window.PiNetwork;
    let button = document.getElementById("but");
    button.addEventListener("click", signIn);
    async function signIn() {
      alert("Hello World");
      try {
        const user = await PiNetworkClient.Authenticate();
        console.log(`Hello ${user.username}`);
      } catch (err) {
        // Not able to fetch the user
      }
    }
  },
};
</script>

<style></style>

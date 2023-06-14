<template>
  <div>
    <button @click="signIn">Deposit Pi</button>
  </div>
</template>

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
      const scopes = ["username", "payments"];
      await window.Pi.authenticate(scopes).then((res) => {
        console.log("Welcome to Pi");
        console.log(res);
      });
      
      // signInUser(authResult);
      // setUser(authResult.user);
    },
    signInUser() {},
  },
};
</script>

<style></style>

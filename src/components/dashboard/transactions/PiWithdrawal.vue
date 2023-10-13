<template>
  <div>
    <button @click="openPiBrowser" class="tw-bg-primary-500">
      Open Pi Browser
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    openPiBrowser() {
      // Replace 'yourapp' with the actual package name of your Android app
      const packageName = "pi.browser";

      // Replace 'yourapp://path' with the actual scheme and path for your app
      const appUrl =
        "pi://sandbox.minepi.com/app/p2pie-app/?action=deposit&amount=$amount&user=$user_id";
      // Check if the user is on an Android device
      if (navigator.userAgent.toLowerCase().includes("android")) {
        // Try to open the app using the intent URL
        window.location.href = `intent://${appUrl}#Intent;scheme=${appUrl};package=${packageName};end`;
      } else {
        // Provide a fallback for non-Android devices
        console.log("This feature is only supported on Android devices.");
      }
    },
  },
};
</script>

<style></style>

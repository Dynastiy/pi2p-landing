<template>
    <div>
        <AppHeader/>
        <span class="spacer">
            <slot />
        </span>
    </div>
  </template>
  
  <script>
import AppHeader from '@/modules/user/components/static/AppHeader.vue'; 
    export default {
        name: "DashboardLayout",
        computed: {},
        components: { AppHeader }
    };
  </script>
  
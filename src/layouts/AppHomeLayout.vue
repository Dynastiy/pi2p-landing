<template>
  <div>
      <AppHeader />
      <slot />
      <AppFooter/>
  </div>
</template>

<script>
import AppHeader from '@/components/static/AppHeader.vue';
import AppFooter from '@/components/static/AppFooter.vue';

export default {
    name: "AppHomeLayout",
    computed: {},
    components: { AppHeader, AppFooter }
};
</script>
        AppFooter

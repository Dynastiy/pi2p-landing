<template>
  <div class="home">
   <div class="my-4">
    <HeroSection/>
    <HowTo/>
    <TagLine/>
   </div>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroSection.vue';
import HowTo from '@/components/HowTo.vue'
import TagLine from '@/components/TagLine.vue';
// import HeroSection from '@/components/HeroSection.vue'

export default {
  name: 'HomeView',
  components: { HowTo, HeroSection, TagLine }
}
</script>

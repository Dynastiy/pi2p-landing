<template>
  <div class="home">
   <div class="mb-4">
    <HeroSection/>
    <HowTo class="mt-5"/>
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

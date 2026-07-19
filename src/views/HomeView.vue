<template>
  <div class="font-sans text-gray-800 bg-gray-50">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProfileAdminSection />
    <DestinationSection />
    <UmkmSection />
    <FooterSection />
  </div>
</template>

<script setup>
    import Navbar from '../components/Navbar.vue'
    import HeroSection from '../components/HeroSection.vue'
    import AboutSection from '../components/AboutSection.vue'
    import ProfileAdminSection from '../components/ProfileAdminSection.vue'
    import DestinationSection from '../components/DestinationSection.vue'
    import UmkmSection from '../components/UmkmSection.vue'
    import FooterSection from '../components/FooterSection.vue'
</script>

<style scoped>
</style>
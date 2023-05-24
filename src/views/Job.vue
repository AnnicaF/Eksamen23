<script setup>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
import LogoSlider from '@/components/LogoSlider.vue'
</script>
<template>
    <nav>
        <Navigation/>
    </nav>
    <h1>Hej det er en test</h1>
    <LogoSlider/>
    <footer>
        <Footer/>
    </footer>
</template>

<script>
export default {
  name: 'Job',
}
</script>
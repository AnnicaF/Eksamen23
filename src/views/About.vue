<script setup>
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Navigation/>
    <router-view/>
    <h1>Det her er en om os side</h1>
    <footer>
        <Footer/>
    </footer>
</template>

<script>
export default {
  name: 'About',
}
</script>

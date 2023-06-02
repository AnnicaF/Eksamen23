<script setup>
import JobTest         from '../components/JobTest.vue'
import Nav             from '../components/Nav.vue'
import Banner          from '../components/Banner.vue'
import ContactSection  from '../components/ContactSection.vue'
import Footer          from '../components/Footer.vue'
</script>
<template>
    <Nav/>
    <Banner text="Find dit nye job her" imageSrc="src/assets/img/img-03.jpg" altText="Banner billede"/>
    <JobTest/>
    <ContactSection imageSrc="src/assets/img/img-05.jpg" altText="Banner billede"/>
    <Footer/>
</template>
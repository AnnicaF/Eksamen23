<script setup>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import Section from '@/components/Section.vue'
import TextSection from '@/components/TextSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
     <Banner text="Hvem er vi?" imageSrc="src/assets/img/teamwork.jpg" altText="Banner billede" />
     <TextSection heading="Stor passion og partnerskab" text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."></TextSection>
        <Section/>
        <ContactSection/>
    <Footer />
</template>
  
  <script>
  export default {
  components: { TextSection, ContactSection, Footer, Banner, Section},
    name: 'About',
  }
  </script>
  
  <style scoped>  
  
  </style>
  


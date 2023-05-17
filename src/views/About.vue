<script setup>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import Section from '@/components/Section.vue'
</script>

<template>
     <Banner />
        <div class="about">
            <h2>Stor passion og partnerskab</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
            </p>
        </div>
        <Section/>
    <Footer />
</template>
  
  <script>
  export default {
    name: 'About',
  }
  </script>
  
  <style>
  h2{
    text-align: center;
    font-size: 30px;
    color: #F3AE3D;
    padding-bottom: 35px;
  }


  
  
  </style>
  


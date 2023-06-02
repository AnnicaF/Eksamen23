<script setup>
import NavVikar from '../components/NavVikar.vue'
import Section from '../components/Section.vue'
import ContactSection from '../components/ContactSection.vue'
import IconBanner from '../components/IconBanner.vue'
import VikarSection from '../components/VikarSection.vue'
import Slider from '../components/Slider.vue'
import SectionTwo from '../components/SectionTwo.vue'
import JobSlider from '../components/JobSlider.vue'
</script>
<template>
  <NavVikar/>
    <div class="banner-container-vikar">
      <img class="banner-image" src="../assets/img/img-04.jpg" alt="Stemningsbillede af DK Vikarservice">
      <div class="content-box">
        <h2 class="hvid style">Leder du efter et nyt job?</h2>
        <p class="italic-hvid style">Vi sidder altid klar ved telefonerne</p>
        <button class="btn">Register dig som vikar</button>
      </div>
    </div>
  <Section/>
  <VikarSection/>
  <IconBanner/>
  <Slider/>
  <ContactSection imageSrc="src/assets/img/img-05.jpg" altText="Banner billede"/>
</template>

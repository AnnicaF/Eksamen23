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
      <h2>Leder du efter et nyt job?</h2>
      <h5>Vi sidder altid klar ved telefonerne</h5>
      <button>Register dig som vikar</button>
      <img class="banner-image" src="../assets/img/img-04.jpg" alt="Stemningsbillede af DK Vikarservice">
    </div>
    <Section/>
    <VikarSection/>
    <IconBanner/>
    <Slider/>
    <SectionTwo/>
    <ContactSection imageSrc="src/assets/img/img-05.jpg" altText="Banner billede"/>
    <JobSlider/>
  </template>
  
  
<script setup>
import Nav from '../components/Nav.vue'
import Section from '../components/Section.vue'
import ContactSection from '../components/ContactSection.vue'
</script>
<template>
    <div class="banner-container">
      <h2>Leder du efter et nyt job?</h2>
      <h5>Vi sidder altid klar ved telefonerne</h5>
      <button>Register dig som vikar</button>
      <img class="banner-image" src="../assets/img/img-04.jpg" alt="Stemningsbillede af DK Vikarservice">
    </div>
    <Section/>
    <ContactSection imageSrc="src/assets/img/img-05.jpg" altText="Banner billede"/>
  </template>
  
  <style scoped>
  h2{
    font-size: 30px;
    color: #fff;
    padding-top:100px ;
    padding-left: 100px;
  }
  h5{
    font-size:18px;
    color: #fff;
    padding-left: 100px;
  }
  button{
  background-color: #F3AE3D;
  padding: 10px;
  color: #fff;
  margin-left: 100px;
}
  .banner-container {
    position: relative;
    height: 400px;
    background-color: rgba(62, 62, 62, 0.7);
  }  
  .banner-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  
  @media (max-width: 800px) {
    .banner-container {
      height: 500px;
    }
  }
  </style>
  
<script setup>
import JobTest         from '../components/JobTest.vue'
import Nav             from '../components/Nav.vue'
import ContactSection  from '../components/ContactSection.vue'
import Footer          from '../components/Footer.vue'
import JobList         from '../components/JobList.vue'
import Bread           from '../components/Bread.vue'
</script>
<template>
    <Nav/>
    <div class="banner-container-vikar">
      <img class="banner-image" src="../assets/img/img-07.jpg" alt="Stemningsbillede af DK Vikarservice">
      <div class="head-box">
        <h1>Find dit nye job her</h1>
      </div>
    </div>
    <Bread :items="breadcrumbItems" />
    <JobTest/>
    <JobList/>
    <ContactSection/>
    <Footer/>
</template>
<script>
export default {
    components: {
      Bread,
    },
    data() {
      return {
        breadcrumbItems: [
        { title: "Forside", url: "/" },
          { title: "/ Ledige Job", url: "JobTest" },
        ],
      };
    },
  };
  </script>
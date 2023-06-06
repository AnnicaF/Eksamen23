<script setup>
import JobTest         from '../components/JobTest.vue'
import Nav             from '../components/Nav.vue'
import Banner          from '../components/Banner.vue'
import ContactSection  from '../components/ContactSection.vue'
import Footer          from '../components/Footer.vue'
import JobList         from '../components/JobList.vue'
import Bread           from '../components/Bread.vue'
</script>
<template>
    <Nav/>
    <Banner text="Find dit nye job her" imageSrc="src/assets/img/img-07.jpg" altText="Banner billede"/>
    <Bread :items="breadcrumbItems" />
    <JobTest/>
    <JobList/>
    <ContactSection imageSrc="src/assets/img/box2.jpg" altText="Banner billede"/>
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
<script setup>
import Nav         from '../components/Nav.vue'
import Footer      from '../components/Footer.vue'
import Team        from '../components/Team.vue'
import Banner      from '../components/Banner.vue'
import Cities      from '../components/Cities.vue'
import ContactForm from '../components/ContactForm.vue'
import Bread       from '../components/Bread.vue'
</script>

<template>
  <Nav/>
  <div class="banner-container-vikar">
      <img class="banner-image" src="../assets/img/img-03.jpg" alt="Stemningsbillede af DK Vikarservice">
      <div class="head-box">
        <h1>Kontakt</h1>
      </div>
    </div>
  <Bread :items="breadcrumbItems" />
    <div class="section-kontakt">
        <h2 class="heading">Ring til os på: <span>+ 45 70 60 59 60</span></h2>
        <h5> Mandag - torsdag kl: 08:00 - 16:00  <br> <br>
        Fredag kl: 08:00 - 15:30 <br> </h5>
        <h5 class="italic kontakt-style">
        Ønsker du at sende en mail til os, så kan du sende den til info@dkv.dk eller udfylde kontaktformularen nedenfor</h5>
    </div>
  <Team/>
  <ContactForm/>
  <Cities/>
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
          { title: "/ Kontakt", url: "Contact" },
        ],
      };
    },
  };
  </script>

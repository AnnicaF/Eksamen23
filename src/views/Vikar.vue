<script setup>
import NavVikar from '../components/NavVikar.vue'
import Section from '../components/Section.vue'
import ContactSection from '../components/ContactSection.vue'
import IconBanner from '../components/IconBanner.vue'
import Cities from '../components/Cities.vue'
import VikarSection from '../components/VikarSection.vue'
import SectionTwo from '../components/SectionTwo.vue'
import JobList from '../components/JobList.vue'
import Benefit from '../components/Benefit.vue'
import Youtube         from '../components/Youtube.vue'
import Footer         from '../components/Footer.vue'
import BannerCta         from '../components/BannerCta.vue'
import Bread           from '../components/Bread.vue'
</script>
<template>
  <NavVikar/>
    <div class="banner-container-vikar">
      <img class="banner-image" src="../assets/img/box3.jpg" alt="Stemningsbillede af DK Vikarservice">
      <div class="content-box">
        <h2 class="hvid style">Leder du efter et nyt job?</h2>
        <p class="italic-hvid style">Vi sidder altid klar ved telefonerne</p>
        <button class="btn-stor">Register dig som vikar</button>
      </div>
    </div>
    <Bread :items="breadcrumbItems" class="bread-background"/>
    <Benefit
      heading="Tre fordele ved at være vikar"
      :items="[
        {text: 'Faglige kompetencer: En fordel ved at være vikar er muligheden for at udvide dine faglige kompetencer og lære nye færdigheder. Når du arbejder i forskellige virksomheder og projekter, udsættes du for forskellige arbejdsmetoder, teknologier og opgaver.' },
        { text: ' Erfaring og udvikling: Vikararbejde giver dig mulighed for at opbygge en bred vifte af erfaringer og færdigheder. Du kan arbejde i forskellige virksomheder, brancher og arbejdsmiljøer, hvilket giver dig indsigt og viden, der kan styrke din professionelle profil. Du kan udvikle dine evner og lære nye ting undervejs.' },
        { text: 'Netværk og karrieremuligheder: Som vikar har du mulighed for at opbygge et omfattende professionelt netværk. Du kan møde mennesker indenfor din branche, skabe kontakter og få anbefalinger. Dette kan åbne døre til fremtidige jobmuligheder, potentielle faste stillinger eller muligheden for at arbejde på spændende projekter og opgaver i fremtiden.' }
      ]"
    />
  <Youtube/>
  <IconBanner/>
  <SectionTwo/>
  <JobList/>
  <BannerCta/>
  <Cities/>
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
        { title: "Forside /", url: "/" },
        { title: "Jobsøgende", url: "Vikar" },
        ],
      };
    },
  };
  </script>


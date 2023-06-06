<script setup>
import NavVikar        from '../components/NavVikar.vue'
import ContactSection  from '../components/ContactSection.vue'
import Footer          from '../components/Footer.vue'
import IconBanner      from '../components/IconBanner.vue'
import Benefit         from '../components/Benefit.vue'
import BannerCta       from '../components/BannerCta.vue'
import Bread           from '../components/Bread.vue'
</script>
<template>
    <NavVikar/>
    <div class="banner-container-vikar">
      <img class="banner-image" src="../assets/img/img-03.jpg" alt="Stemningsbillede af DK Vikarservice">
      <div class="head-box">
        <h1>Vikarservice</h1>
      </div>
    </div>
    <Bread :items="breadcrumbItems" />
    <div class="about">
    <h2 class="gul">Hvad er vikarservice?</h2>
      <p class="italic">Vikarservice giver dig som vikar mulighed for at få adgang til spændende midlertidige jobmuligheder, der passer til dine færdigheder og præferencer. Du kan nyde godt af fleksibilitet i arbejdstiden, variation i opgaver og professionel support fra vikarbureauet, der hjælper dig med at trives og udvikle din karriere.</p>

      <p class="italic">Vikararbejde kan variere i varighed og omfang afhængigt af virksomhedens behov og kan omfatte en bred vifte af jobtyper og industrier. Som vikar kan man opnå fleksibilitet, muligheder for at opbygge erfaring og et bredt netværk af kontakter.</p> 
    </div>
    <Benefit
      heading="Hvad er fordelene?"
      :items="[
        { text: '1: Fleksibilitet og variation: Som vikar får du mulighed for at arbejde på forskellige midlertidige opgaver hos forskellige virksomheder. Dette giver dig fleksibilitet i din arbejdstid og mulighed for at opbygge en bred erfaring på tværs af brancher og arbejdskulturer.' },
        { text: 'Udvidelse af dit professionelle netværk: Ved at arbejde som vikar får du mulighed for at møde og samarbejde med forskellige mennesker indenfor din branche. Dette kan hjælpe med at udvide dit professionelle netværk og skabe muligheder for fremtidige karriereudvikling.' },
        { text: 'Professionel support og udvikling: Som vikar hos DKV får du adgang til professionel support, rådgivning og opfølgning. Vores team af rekrutteringseksperter er dedikerede til at hjælpe dig med at trives og udvikle dine færdigheder, hvilket kan bidrage til at styrke din karriere og åbne døre for nye muligheder.' }
      ]"
    />
    <BannerCta/>
    <IconBanner/>
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
        { title: "/ At arbejde med os", url: "ToBeVikar" },
        { title: "/ Vikarservice", url: "VikarService" },
        ],
      };
    },
  };
  </script>
<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Section from '../components/Section.vue'
import ContactSection from '../components/ContactSection.vue'
import Bread from '../components/Bread.vue'
</script>

<template>
  <Nav/>
  <div class="banner-container-vikar">
      <img class="banner-image" src="../assets/img/box1.jpg" alt="Stemningsbillede af DK Vikarservice">
      <div class="head-box">
        <h1>Hvem er DKV?</h1>
      </div>
    </div>
  <Bread :items="breadcrumbItems" />
  <div class="about">
    <h2 class="gul">Stor passion og partnerskab</h2>
      <p class="italic">DKV er en virksomhed, der tilbyder vikartjenester til forskellige industrier og virksomheder. Vi formidler midlertidigt ansatte arbejdskraft til virksomheder, der har behov for ekstra personale i en begrænset periode. DKV kan hjælpe med at finde vikarer til forskellige typer job, herunder administrative stillinger, produktionsarbejde, lagerarbejde, kundeservice og meget mere.</p>

      <p class="italic">Vi sikrer, at vores vikarer er kvalificerede og i stand til at udføre de opgaver, der kræves af dem. Vi sørger for at matche de rette vikarer med virksomhedernes specifikke behov og krav. DKV kan derfor være en nyttig ressource for virksomheder, der har brug for ekstra arbejdskraft i travle perioder eller ved midlertidige projekter. Hvis du vil i kontakt med os, så tøv ikke med at kontakte os. Du kan finde alle vores kontakter her, og dertil se hvem vi er.</p> 
    </div>
  <Section/>
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
          { title: "/ Om os", url: "About" },
        ],
      };
    },
  };
  </script>



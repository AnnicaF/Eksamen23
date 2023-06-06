<script setup>
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Banner from '../components/Banner.vue'
import Section from '../components/Section.vue'
import ContactSection from '../components/ContactSection.vue'
import Bread from '../components/Bread.vue'
</script>

<template>
  <Nav/>
  <Banner text="Hvem er DKV?" imageSrc="src/assets/img/box1.jpg" altText="Banner billede" />
  <Bread :items="breadcrumbItems" />
  <div class="about">
    <h2 class="gul">Stor passion og partnerskab</h2>
      <p class="italic">DKV er en virksomhed, der tilbyder vikartjenester til forskellige industrier og virksomheder. Vi formidler midlertidigt ansatte arbejdskraft til virksomheder, der har behov for ekstra personale i en begrænset periode. DKV kan hjælpe med at finde vikarer til forskellige typer job, herunder administrative stillinger, produktionsarbejde, lagerarbejde, kundeservice og meget mere.</p>

      <p class="italic">Vi sikrer, at vores vikarer er kvalificerede og i stand til at udføre de opgaver, der kræves af dem. Vi sørger for at matche de rette vikarer med virksomhedernes specifikke behov og krav. DKV kan derfor være en nyttig ressource for virksomheder, der har brug for ekstra arbejdskraft i travle perioder eller ved midlertidige projekter. Hvis du vil i kontakt med os, så tøv ikke med at kontakte os. Du kan finde alle vores kontakter her, og dertil se hvem vi er.</p> 
    </div>
  <Section/>
  <ContactSection imageSrc="src/assets/img/img-02.jpg" altText="Banner billede" />
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



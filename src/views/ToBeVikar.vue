<script setup>
import NavVikar        from '../components/NavVikar.vue'
import Footer          from '../components/Footer.vue'
import Banner          from '../components/Banner.vue'
import Slider          from '../components/Slider.vue'
import Benefit         from '../components/Benefit.vue'
import ContactSection  from '../components/ContactSection.vue'
import Bread           from '../components/Bread.vue'
</script>

<template>
<NavVikar/>
  <Banner text="At arbejde ved DKV" imageSrc="src/assets/img/img-08.jpg" altText="Banner billede" />
  <Bread :items="breadcrumbItems" />
  <div class="about">
    <h2 class="gul">Hvad vil det sige at være vikar?</h2>
      <p class="italic">DKV er en virksomhed, der tilbyder vikartjenester til forskellige industrier og virksomheder. Vi formidler midlertidigt ansatte arbejdskraft til virksomheder, der har behov for ekstra personale i en begrænset periode. DKV kan hjælpe med at finde vikarer til forskellige typer job, herunder administrative stillinger, produktionsarbejde, lagerarbejde, kundeservice og meget mere.</p>

      <p class="italic">Vi sikrer, at vores vikarer er kvalificerede og i stand til at udføre de opgaver, der kræves af dem. Vi sørger for at matche de rette vikarer med virksomhedernes specifikke behov og krav. DKV kan derfor være en nyttig ressource for virksomheder, der har brug for ekstra arbejdskraft i travle perioder eller ved midlertidige projekter. Hvis du vil i kontakt med os, så tøv ikke med at kontakte os. Du kan finde alle vores kontakter her, og dertil se hvem vi er.</p> 
    </div>
    <Benefit
      heading="Tre fordele ved at være vikar"
      :items="[
        { title: '1', text: 'Hurtig indgang til arbejdsmarkedet: Vikararbejde kan være en hurtig vej til at komme ind på arbejdsmarkedet eller skifte karriereretning. Det giver dig mulighed for at få relevant arbejdserfaring og opbygge et netværk, samtidig med at du søger efter faste ansættelser eller udforsker dine karrieremuligheder. Det kan også være en chance for at demonstrere dine evner og skabe positive referencer til fremtidige jobmuligheder.' },
        { title: '2', text: 'Læring og udvikling: Som vikar får du mulighed for at lære nye færdigheder og udvikle dine eksisterende kompetencer gennem forskellige arbejdsopgaver og udfordringer. Du kan blive udsat for forskellige arbejdsmetoder, brancher og projekter, hvilket giver dig mulighed for at udvide din viden og erfaring, og styrke din professionelle profil.' },
        { title: '3', text: 'Professionel support og vejledning: Vores erfarne team af rekrutteringskonsulenter står klar til at guide dig igennem hele rekrutteringsprocessen. Vi tilbyder professionel support, rådgivning og opfølgning, der sikrer, at du er godt rustet til at præstere dit bedste på dine opgaver og udvikle din karriere på bedst mulig vis.' }
      ]"
    />
    <Slider/>
    <ContactSection imageSrc="src/assets/img/img-01.jpg" altText="Banner billede"/>
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

        ],
      };
    },
  };
  </script>
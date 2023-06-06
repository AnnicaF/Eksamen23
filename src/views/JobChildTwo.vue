<script setup>
import Nav             from '../components/Nav.vue'
import Banner          from '../components/Banner.vue'
import Footer          from '../components/Footer.vue'
import JobText         from '../components/JobText.vue'
</script>
<template>
    <Nav/>
    <Banner text="Murer i Stubbekøbing" imageSrc="src/assets/img/img-03.jpg" altText="Banner billede"/>
      <JobText
        :jobbeskrivelse="jobbeskrivelse"
        :rolle="rolle"
        :sted="sted"
        :fuldTid="fuldTid"
        :start="start"
        :kravListe="kravListe"
        :ansogningTekst="ansogningTekst"
        :fordeleOverskrift="fordeleOverskrift"
        :fordeleListe="fordeleListe"
        :ansogningTekst2="ansogningTekst2"
      />
      <Footer/>
  </template>
  
  <script>
  
  export default {
    components: {
      JobText,
    },
    data() {
      return {
        jobbeskrivelse:
          'På vegne af vores samarbejdspartner søger vi dygtige murere nær Stubbekøbing til at hjælpe med at skalmure huse henover sommeren. Du vil komme til at arbejde sammen med et hold andre murere i et tæt samarbejde med højt humør. Vi leder efter dig, som oplever en stolthed ved sit fag og kvalifikationer. Dig, der er både mødestabil og overholder en aftale. Der er brug for dig, som har lyst til at være en del af et hold dygtige håndværkere..',
        rolle: 'Murer',
        sted: 'Stubbekøbing',
        fuldTid: 'Fuld tid',
        start: 'Hurtigst muligt',
        kravListe: [
          'Du er murer med god erfaring fra faget.',
          'Du er glad for at arbejde selvstændigt men trives også i at arbejde med andre',
          'Du er glad for at arbejde sammen med andre, men kan også arbejde selvstændigt.',
          'Du er mødestabil og pligtopfyldende med ansvar for udførelsen af dit arbejde.',
          'Du er fleksibel',
        ],
        ansogningTekst:
          'Lyder det som noget for dig, er du velkommen til at søge stillingen på “ansøg her”. Hvis du har spørgsmål til stillingen, må du meget gerne kontakte os på 70 60 59 60 så sidder vi klar til at besvare dine eventuelle spørgsmål.',
        fordeleOverskrift: 'Fordele som vikar hos DKV:',
        fordeleListe: [
          'Du får mulighed for fleksibilitet i dit arbejdsliv, samtidig med at du kan mærke efter, hvad der er det rette sted for dig.',
          'For at sikre dig lægger vi vægt på at følge vikarloven og gældende overenskomster indenfor dit område.',
          'Vi bestræber os altid på at finde det bedst mulige match mellem kandidater og virksomheder - med dig i fokus.',
          'Som aktiv vikar hos os får du adgang til Danmarks største rabatportal – Visma LogBuy.',
        ],
        ansogningTekst2:
          'Lyder dette som noget for dig, så send os en ansøgning i dag. Vi holder samtaler løbende.',
      };
    },
  };
  </script>
  
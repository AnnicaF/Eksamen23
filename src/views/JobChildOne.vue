<script setup>
import Nav             from '../components/Nav.vue'
import Banner          from '../components/Banner.vue'
import Footer          from '../components/Footer.vue'
import JobText         from '../components/JobText.vue'
</script>
<template>
    <Nav/>
    <div class="banner-container-vikar">
      <img class="banner-image" src="../assets/img/img-03.jpg" alt="Stemningsbillede af DK Vikarservice">
      <div class="head-box">
        <h1>Rørlægger i Randers</h1>
      </div>
    </div>
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
          'På vegne af vores samarbejdspartner søger vi en dygtig rørlægger nær Randers til at arbejde med renoveringsopgaver af hovedledninger og vand. Virksomheden er en jordnær entreprenørvirksomhed, der har gode og trofaste kunder i lokalområdet. De går op i dygtige og glade medarbejdere, der altid efterlader det bedste stykke arbejde. Opstart hurtigst muligt.',
        rolle: 'Rørlægger',
        sted: 'Randers',
        fuldTid: 'Fuld tid',
        start: 'Hurtigst muligt',
        kravListe: [
          'Du er en erfaren rørlægger',
          'Du er glad for at arbejde selvstændigt men trives også i at arbejde med andre',
          'Du er mødestabil og pligtopfyldende med ansvar for udførelsen af dit arbejde',
          'Er fleksibel',
          'Har kørekort B',
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
  
  
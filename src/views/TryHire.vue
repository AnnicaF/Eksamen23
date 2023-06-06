<script setup>
import NavVikar        from '../components/NavVikar.vue'
import Banner          from '../components/Banner.vue'
import ContactSection  from '../components/ContactSection.vue'
import Footer          from '../components/Footer.vue'
import TextSection     from '../components/TextSection.vue'
import IconBanner      from '../components/IconBanner.vue'
import Benefit         from '../components/Benefit.vue'
import BannerCta       from '../components/BannerCta.vue'
import Bread           from '../components/Bread.vue'
</script>
<template>
    <NavVikar/>
    <Banner text="Vikarservice" imageSrc="src/assets/img/img14.jpg" altText="Banner billede"/>
    <Bread :items="breadcrumbItems" />
    <div class="about">
    <h2 class="gul">Try & Hire</h2>
      <p class="italic">Try & Hire er hvor du som vikar får mulighed for at arbejde midlertidigt i en virksomhed med potentialet for at blive fastansat. Det indebærer en prøveperiode på op til 3 måneder, hvor du og virksomheden kan vurdere, om det er et gensidigt match. Dette før der træffes en beslutning om permanent ansættelse. Dette giver dig en chance for at bevise dine færdigheder, opbygge et godt arbejdsforhold og mulighed for en varig karriere i virksomheden.</p> 
    </div>
    <Benefit
      heading="Hvad er Try & Hire?"
      :items="[
        { title: '1', text: '1: Fleksibilitet og variation: Som vikar får du mulighed for at arbejde på forskellige midlertidige opgaver hos forskellige virksomheder. Dette giver dig fleksibilitet i din arbejdstid og mulighed for at opbygge en bred erfaring på tværs af brancher og arbejdskulturer.' },
        { title: '2', text: 'Udvidelse af dit professionelle netværk: Ved at arbejde som vikar får du mulighed for at møde og samarbejde med forskellige mennesker indenfor din branche. Dette kan hjælpe med at udvide dit professionelle netværk og skabe muligheder for fremtidige karriereudvikling.' },
        { title: '3', text: 'Professionel support og udvikling: Som vikar hos DKV får du adgang til professionel support, rådgivning og opfølgning. Vores team af rekrutteringseksperter er dedikerede til at hjælpe dig med at trives og udvikle dine færdigheder, hvilket kan bidrage til at styrke din karriere og åbne døre for nye muligheder.' }
      ]"
    />
    <BannerCta/>
    <IconBanner/>
    <ContactSection imageSrc="src/assets/img/img14.jpg" altText="Banner billede"/>
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
        { title: "/ Try & Hire", url: "TryHire" },
        ],
      };
    },
  };
  </script>
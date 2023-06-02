<script setup>
import Nav from '../components/Nav.vue'
import Footer     from '../components/Footer.vue'
import IconBanner from '../components/IconBanner.vue';
import Slider     from '../components/Slider.vue';
import LogoSlider from '../components/LogoSlider.vue';
import SectionTwo from '../components/SectionTwo.vue';
</script>

<template>
  <Nav/>
  <div class="banner-container2">
    <img class="banner-image" src="../assets/img/banner.jpg" alt="Stemningsbillede af DK Vikarservice"/>
  <div class="box-container">
      <div class="boxe box-1">
        <h2 class="hvid">Mangler du en medarbejder?</h2>
        <p class="hvid">Vi kan hjælpe via vikarservice, rekruttering og Try & hire.</p>
        <button class="btn-secondary2">Klik ind og læs mere</button>
      </div>
      <div class="boxe box-2">
        <h2 class="hvid">Leder du efter et nyt job?</h2>
        <p class="hvid">Se alle vores ledige job, og registrer dig som vikar.</p>
        <button class="btn-secondary">Klik ind og læs mere</button>
      </div>
    </div>
  </div>
  <div class="about1">
    <h2>Hvem er vi?</h2>
      <p class="italic">DKV er et dansk vikar- og rekrutteringsbureau, der tilbyder flere forskellige løsninger. Vikarservice, rekruttering og Try & Hire forløb. Vi har vikarer til faglærte brancher, samt alt ufaglært arbejde. Vi sørger altid for at matche den rigtige medarbejder til hver enkelt opgave. </p>
      <p class="italic">Hos DKV har vi dig i fokus hele vejen lige meget om du er arbejdsgiver eller jobsøgende. Vores hovedfokus er at finde det rette match mellem virksomheden og vikaren, så begge parter er glade for samarbejdet. Vi står klar til at hjælpe med både vikarer og virksomheder, med vores viden, erfaring og indsigt. Hos DKV er du ikke bare et nummer i rækken men vi går op i dig og dine behov. Vi er med hele vejen.</p> 
  
    <div class="buttons">
      <button class="btn-secondary">Læs mere</button>
      <button class="btn-primary">Kontakt os</button>
    </div>
  </div>
  <Slider/>
  <LogoSlider/>
  <SectionTwo/>
  <IconBanner/>
  <Footer/>
</template>

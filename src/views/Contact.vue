<script setup>
import Nav from '../components/Nav.vue'
import Team from '../components/Team.vue'
import Banner from '../components/Banner.vue'
import Cities from '../components/Cities.vue'
import ContactForm from '../components/ContactForm.vue'
</script>

<template>
    <Nav/>
  <Banner text="Kontakt" imageSrc="src/assets/img/img-03.jpg" altText="Banner billede"/>
    <div class="section">
        <h2>Ring til os på: <span>+ 45 70 60 59 60</span></h2>
        <h5> Mandag - torsdag kl: 08:00 - 16:00  <br> <br>
        Fredag kl: 08:00 - 15:30 <br> </h5>
    <h5 class="italic">
    Ønsker du at sende en mail til os, så kan du sende den til info@dkv.dk eller udfylde kontaktformularen nedenfor</h5>
    </div>
 <Team/>
 <ContactForm/>
 <Cities/>
    <Footer/>
</template>

<style scoped>
.section{
    padding-top: 50px;
    padding-left: 50px;
    padding-bottom: 50px;
}
.contact-section h2{
    color: black;
    text-align: left;
}
.italic h5{
    font-style: italic;
}
span{
    color: #8E4949;
}
h5{
    font-size: 16px;
}
</style>
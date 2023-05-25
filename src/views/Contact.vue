<script setup>
import Footer from '@/components/Footer.vue'
import Banner from '@/components/Banner.vue'
import TextSection from '@/components/TextSection.vue'
import ContactSection from '@/components/ContactSection.vue'
</script>

<template>
  <Banner text="Kontakt" imageSrc="src/assets/img/teamwork.jpg" altText="Banner billede"/>
<div class="contact-section">
    <h2>Ring til os på: <span>+ 45 70 60 59 60</span></h2>
    <h5> Mandag - torsdag kl: 08:00 - 16:00  <br> <br>
    Fredag kl: 08:00 - 15:30 <br></h5>
    <h5 class="speciel">Ønsker du at sende en mail til os, så kan du sende den til info@dkv.dk eller udfylde kontaktformularen nedenfor </h5>
</div>

</template>

<script>

</script>

<style>
.contact-section{
    padding-top: 50px;
    padding-left: 70px;
}

.contact-section h2{
    color: black;
    text-align: left;
}
h5 .speciel{
    font-style: italic;
}
.contact-section h2 span{
    color: #8E4949;
}
h5{
    font-size: 16px;
}

</style>
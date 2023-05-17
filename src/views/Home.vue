<script setup>
import Navigation from '../components/Navigation.vue'
import Footer from '../components/Footer.vue'

</script>
<template>
  <div class="banner-container">
    <img class="banner-image" src="../assets/img/banner.jpg" alt="Stemningsbillede af DK Vikarservice">
    <Navigation/>
  <div class="box-container">
      <div class="box box-1">
        <h2>Mangler du en medarbejder?</h2>
        <p>Vi kan hjælpe via vikarservice, rekruttering og Try & hire.</p>
        <button class="button-1">Klik ind og læs mere</button>
      </div>
      <div class="box box-2">
        <h2>Leder du efter et nyt job?</h2>
        <p>Se alle vores ledige job, og registrer dig som vikar.</p>
        <button class="button-2">Klik ind og læs mere</button>
      </div>
    </div>
  </div>
  <div class="about">
    <h2>Hvem er vi?</h2>
      <p>DK Vikarservice er et dansk vikar- og rekrutteringsbureau, der tilbyder flere forskellige løsninger. Mandskabsleje og Try & Hire forløb. Vi har vikarer til faglærte brancher, samt alt ufaglært arbejde. Vi sørger for at matche den rigtige arbejdskraft til hver enkelt opgave vi modtager forespørgsler på. <br> <br>

      Hos DK Vikarservice har vi dig i fokus hele vejen – lige meget om du er arbejdsgiver eller arbejdstager. Vores hovedfokus er at finde det rette match mellem virksomhed og vikar, så begge parter er glade for samarbejdet. Vi står klar til hjælpe med både vikarer og virksomheder, med vores viden, erfaring og indsigt.
      Hos hos er du ikke bare et nummer i rækken – men vi går op i dig og dine behov. Vi er med hele vejen.  
      </p>
    <div class="buttons">
      <button class="button-style-1">Læs mere</button>
      <button class="button-style-2">Kontakt os</button>
    </div>
  </div>
  <Logo/>
  <footer>
    <Footer/>
  </footer>
</template>

<script>
export default {
  components: { Navigation, Footer },
  name: 'Home',
}
</script>
<style>
.banner-container{
  position: relative;
  height: 800px;
  background-color: rgba(62, 62, 62, 0.7);
}
.banner-image{
  position:absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
}
.box-container{
  display: flex;
  flex-direction: row;
  justify-content: center;

}
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 450px;
  margin: 80px;
  padding: 30px;
  background-color: rgba(32, 32, 32, 0.7);
  border: 3px solid rgb(255, 255, 255);
  color: #fff;
  text-align: center;
}
.box-2{
  border: 3px solid  #F3AE3D;
}
.button-1{
  border: 3px solid #fff;
  background-color: rgba(32, 32, 32, 0.7);
  padding: 10px;
  color: #fff;
}
h2{
font-size: 30px;
}
p{
  font-size: 20px;
  padding-bottom: 15px;
}
.button-2{
  border: 3px solid #F3AE3D;
  background-color: rgba(32, 32, 32, 0.7);
  padding: 10px;
  color: #fff;
}
.about{
  margin-top:50px;
  margin-left:170px;
  margin-right:170px;
  margin-bottom:50px;
}
.about h2{
  text-align: center;
  font-size: 30px;
  color:#F3AE3D;
  padding-bottom: 35px;
}
.about p{
  font-size:20px;
  font-style: italic;
  line-height: 2;
}
.buttons{
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 80px;
}
.button-style-1{
  margin-right: 50px;
  border: 3px solid #F3AE3D;
  padding: 15px;
  width: 170px;
  background-color: transparent;
  color: #F3AE3D;
  font-size: 20px;
}
.button-style-2{
  margin-left: 50px;
  padding: 15px;
  width: 170px;
  background-color: #8E4949;
  color:#fff;
  border: none;
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  /* Banner */
  .banner-container {
    height: 850px;
  }
  .box-container {
    margin-top:50px;
    flex-direction: row;
    align-items: center;
  }

  .box {
    width: 200px;
    height: 300px;
    margin: 40px 20px;
  }

  .about {
    margin: 50px 10px;
  }

  .about h2 {
    font-size: 25px;
  }

  .about p {
    font-size: 18px;
  }

  .buttons {
    margin: 40px 0;
  }

  .button-style-1, .button-style-2 {
    padding: 10px;
    font-size: 14px;
    width: 130px;
  }
}

@media screen and (max-width: 480px) {
  .banner-container {
    height: 850px;
  }
  .box {
    width: 170px;
    height: 220px;
    margin: 30px 0;
  }

  h2{
    font-size: 20px;
  }
  p{
    font-size: 15px;
  }
  .about {
    margin: 30px 30px;
  }

  .about h2 {
    font-size: 20px;
  }

  .about p {
    font-size: 16px;
  }

  .button-style-1, .button-style-2 {
    padding: 8px;
    font-size: 12px;
    width: 100px;
  }
}
</style>
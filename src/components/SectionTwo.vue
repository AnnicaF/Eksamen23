<template>
  <section>
      <h4>Det tilbyder vi til virksomheder</h4> 
        <div class="overlay">
          <img src="../assets/img/teamwork.jpg"    alt="Billede" class="background-img" />
          <div class="boxes"> 
            <div class="box1">
              <img  class="icon" src="src/assets/img/icons/people-01.png" alt="Ikon til rekrutering">
              <h5>REKRUTTERING</h5>
              <p>Når du taler med os, taler du med nogen, som kender din verden. FirmaVikar hjælper dig med effektiv rekruttering af medarbejdere, så du undgår dyre fejlansættelser, der kan gå ud over både drift, omsætning og vækst.</p>
            </div>

            <div class="box2">
              <img class="icon" src="src/assets/img/icons/people-box-01.png" alt="Ikon til rekrutering">
              <h5>VIKARSERVICE</h5>
              <p>Med vores dygtige vikarer har du altid ekstra hænder lige ved hånden. Det er enkelt, der er ingen spildtid, personale administration eller unødige udgifter, og som kunde hos os betaler du alene for de effektive timer.</p>
            </div>

            <div class="box3">
                <img class="icon" src="src/assets/img/icons/build-01.png" alt="Ikon til rekrutering">
                <h5>TRY & HIRE</h5>
                <p>Et Try & Hire forløb er en mellemting mellem et vikariat og en fastansættelse. Ved Try & Hire undgår man dyre fejlansættelser, og du får mulighed for at se din nye medarbejder an, inden I vælger at fastansætte den pågældende.</p>
             </div>
          </div>
       </div>
    </section>
</template>
  
  <style scoped>
  section {
    position: relative;
    width: 100%;
    height: 600px;
    background-color: rgba(62, 62, 62, 0.7);
  }
  .background-img{
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
    position:absolute;
  }
  .box1 { grid-area: a;}
  .box2 { grid-area: b;}
  .box3 { grid-area: c;}
  .boxes {
    display: grid;
    grid-template-areas: 'a b c';
    gap: 20px;
    justify-items: center;
    justify-content: center;
    align-items:center;
    position: absolute;
    top: 10%;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .box1, .box3 {
    background-color: #fff;
    padding: 20px;
    width: 200px;
    height: 360px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 3px solid #F3AE3D;
  }
  .icon {
    height: 80px;
    display: block;
    margin: 0 auto;
  }
  .box2{
    background-color: #8E4949;
    color: white;
    padding: 20px;
    width: 200px;
    height: 400px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
  }
  h4{
    padding: 35px;
    font-size: 30px;
    text-align: center;
    color: #fff;
  }
  h5{
    font-size: 20px;
    text-align: center;
  }
  p{
    font-size:14px;
  }
  @media screen and (max-width: 800px) {
  .boxes {
    grid-template-areas: 
    'b b'
    'a c';
    align-items: center;
  }
  .box2{
    width: 250px;
  }
  .background-img{
    height: 1020px;
    padding-bottom: 20px;
  }
  section {
    height: 1000px;
  }
}
@media screen and (max-width: 600px) {
  .boxes {
    grid-template-areas: 
    'a'
    'b'
    'c';
  }
  .overlay{
    height: 870px;
}
  .box1, .box2, .box3 {
    width: 180px;
    height: 220px;
  }
  h4{
    font-size: 25px;
  }
  h5{
    font-size: 18px;
    text-align: center;
    margin: 2px;
  }
  p{
    font-size:12px;
  }
  section {
    height: 920px;
  }
}
  </style>
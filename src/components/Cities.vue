<template>
    <div class="contact-section">
        <h2>Vikarservice i hele landet</h2>
        <div class="box-kontrol">
            <div class="outer-box-1">
                <img class="city-img" src="src/assets/img/icons/people-01.png" alt="Ikon af varetegn fra Aalborg">
                <div class="tekst-top">
                    <h5>Aalborg</h5>
                    <p>Her skal der stå en tekst, måske</p>
                </div>
            </div>

            <div class="outer-box-2">
                <img class="city-img" src="src/assets/img/icons/people-01.png" alt="Ikon af varetegn fra Århus">
                <div class="tekst-top">
                    <h5>Århus</h5>
                    <p>Her skal der stå en tekst, måske</p>
                </div>
            </div>


            <div class="outer-box-3">
                <img class="city-img" src="src/assets/img/icons/people-01.png" alt="Ikon af varetegn fra Odense">
                <div class="tekst-top">
                    <h5>Odense</h5>
                    <p>Her skal der stå en tekst, måske</p>
                </div>
            </div>


            <div class="outer-box-4">
                <img class="city-img" src="src/assets/img/icons/people-01.png" alt="Ikon af varetegn fra København">
                <div class="tekst-top">
                    <h5>København</h5>
                    <p>Her skal der stå en tekst, måske</p>
                </div>
            </div>

            <div class="outer-box-5">
                <img class="city-img" src="src/assets/img/icons/people-01.png" alt="Ikon af varetegn fra Nyborg">
                <div class="tekst-top">
                    <h5>Nyborg</h5>
                    <p>Her skal der stå en tekst, måske</p>
                </div>
            </div>


            <div class="outer-box-6">
                <img class="city-img" src="src/assets/img/icons/people-01.png" alt="Ikon af varetegn fra Esbjerg">
                <div class="tekst-top">
                    <h5>Esbjerg</h5>
                    <p>Her skal der stå en tekst, måske</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
.outer-box-1 { grid-area: a;}
  .outer-box-2 { grid-area: b;}
  .outer-box-3 { grid-area: c;}
  .outer-box-4 { grid-area: d;}
  .outer-box-5 { grid-area: e;}
  .outer-box-6 { grid-area: f;}
  
h2 {
    margin-left: 15px;
    margin-bottom: 50px;
    padding-top: 50px;
    font-size:35px;
    color: #F3AE3D;
    text-align: center;
    margin-top:0px;
}
h5{
    text-align: center;
    font-size:20px;
}
.box-kontrol {
    display: grid;
    justify-content: space-around;;
    justify-items: center;
    gap:50px;
    justify-content: center;
    grid-template-areas: 'a b c'
    'd e f';
}
.contact-section {
    background-color:#FDF8F1;
    width: 100%;
    padding-bottom: 50px;
}
.outer-box-1, .outer-box-2, .outer-box-3, .outer-box-4, .outer-box-5, .outer-box-6 {
    width: 200px;
    height: 250px;
    border-color:#F3AE3D;
    border: 3px solid #F3AE3D;
    border-radius: 10px;
    box-shadow: 5px 5px 5px grey;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
    img{
    width:90px;
  }
  .tekst-top{
    text-align: center;
    padding-left:10px;
    padding-right:10px;

  }
  @media (max-width: 910px) {
    .box-kontrol {
    grid-template-areas: 'a b c'
    'd e f';
}
  }
  @media (max-width: 766px) {
    .box-kontrol {
    justify-content: center;
    gap: 50px;
    grid-template-areas: 'a b'
    'c d' 'e f ';
}
  }
  @media (max-width: 500px) {
    .box-kontrol {
    justify-content: center;
    grid-template-areas: 'a' 'b'
    'c' 'd' 'e' 'f';
    gap:20px;
}
  }

</style>
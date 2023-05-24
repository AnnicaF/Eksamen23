<template>
<div class="logo-container">
  <div class="logo1">
    <img src="../assets/img/logo04.png" alt="">
  </div>
  <div class="logo2">
    <img src="../assets/img/logo04.png" alt="">
  </div>
  <div class="logo3">
    <img src="../assets/img/logo04.png" alt="">
  </div>
  <div class="logo4">
    <img src="../assets/img/logo04.png" alt="">
  </div>
  
</div>

</template>

<style>
.logo-container{
    width: 100%;
    height: 150px;
    background-color: #8E4949;
    display: grid;
    grid-template-areas: 'a b c d';
    align-items: center;
    gap:60px;
    justify-content: center;
}

.logo1{ grid-area: a;}
.logo2{ grid-area: b;}
.logo3{ grid-area: c;}
.logo4{ grid-area: d;}

img{
    height: 150px;  
}

@media screen and (max-width: 920px) {
  .logo-container {
   gap: 30px;
  }
  img{
    height: 130px;
  }
}
@media screen and (max-width: 740px) {
  .logo-container {
   gap: 30px;
  }
  img{
    height: 100px;
  }
}
@media screen and (max-width: 600px) {
  .logo-container{
    height: 140px;
    gap: 5px;
    justify-content: space-evenly;
  }
  img{
    height: 60px;
  }
}

</style>
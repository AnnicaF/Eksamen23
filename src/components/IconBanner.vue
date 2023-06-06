<template>
  <div class="logo-container">
    <div class="logo1">
      <img src="../assets/img/logo/byglogo1.png" alt="Logo af samarbejdspartner">
    </div>
    <div class="logo2">
      <img src="../assets/img/logo/byglogo2.png" alt="Logo af samarbejdspartner">
    </div>
    <div class="logo3">
      <img src="../assets/img/logo/byglogo3.png" alt="Logo af samarbejdspartner">
    </div>
    <div class="logo4">
      <img src="../assets/img/logo/byglogo4.png" alt="Logo af samarbejdspartner">
    </div>
  </div>
</template>

<style lang="scss" scoped>

.logo-container {
  width: 100%;
  height: 150px;
  background-color:#8E4949;;
  display: grid;
  grid-template-areas: 'a b c d';
  align-items: center;
  gap: 60px;
  justify-content: center;

  img {
    height: 60px; 
  }
}

@media screen and (max-width: 920px) {
  .logo-container {
    gap: 30px;
    grid-template-areas: 'a b c d';
  }
}

@media screen and (max-width: 800px) {
  .logo-container {
    height: 200px;
    gap: 5px;
    justify-content: space-evenly;
    grid-template-areas: 'a b' 'c d';
  }
  img {
    height: 40px; 
  }
}

</style>
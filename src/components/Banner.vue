<template>
    <div class="banner-container">
      <h2 class="banner-heading">Hvem er DKV?</h2>
      <img class="banner-image" src="../assets/img/teamwork.jpg" alt="Stemningsbillede af DK Vikarservice">
    </div>
  </template>
  
  <style scoped>
  .banner-container {
    position: relative;
    height: 400px;
    background-color: rgba(62, 62, 62, 0.7);
  }
  
  .banner-heading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 40px;
    z-index: 1;
  }
  
  .banner-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  
  @media (max-width: 800px) {
    .banner-container {
      height: 500px;
    }
  
    .banner-heading {
      font-size: 24px;
    }
  }
  </style>
  
  
  
  
  
  
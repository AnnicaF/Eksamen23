<template>
    <div class="banner-container">
      <h1> {{ text }}</h1>
      <img class="banner-image" :src="imageSrc" alt="Stemningsbillede af DK Vikarservice">
    </div>
  </template>

  <script>
  export default {
  props: {
    text: {
      type: String,
    },
    imageSrc: {
      type: String,
    },
  }
}
  </script>
  
  
  
  
  
  
  
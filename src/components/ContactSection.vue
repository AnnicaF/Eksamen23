<template>
    <div class="image-section-2">
        <div class="overlay"></div>
        <img class="responsive-image" :src="imageSrc" alt="Stemningsbillede af DK Vikarservice">
      <div class="content">
        <h2 class="hvid">Kontakt os med dine spørgsmål</h2>
        <p class="italic-hvid">Vi sidder altid klar ved telefonerne</p>
        <button class="btn">Kontakt os</button>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      imageSrc: {
        type: String,
      },
    }
  };
</script>
<template>
    <div class="image-section">
        <div class="overlay"></div>
      <img src="../assets/img/teamwork.jpg" alt="Billede" class="responsive-image" />
      <div class="content">
        <h2>Kontakt os med dine spørgsmål</h2>
        <p>Vi sidder altid klar ved telefonerne</p>
        <button>Kontakt os</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: {
        type: String,
      },
    }
  };
  </script>
  
  <style scoped>
  .image-section {
    position: relative;
    width: 100%;
    height: 400px;
  }
  
  .responsive-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
  
  .content {
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    padding-left:100px;
    padding-top:100px;
    color: white;
  }
  
  h2 {
    font-size: 30px;
    margin-bottom: 10px;
    margin-top:30px;
  }
  
  p {
    font-size: 16px;
    margin-bottom: 10px;
    font-style: italic;
  }
  
  button {
    margin-top:50px;
    padding: 10px 20px;
    background-color: #F3AE3D;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
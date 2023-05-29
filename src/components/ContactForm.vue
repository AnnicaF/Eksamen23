<template>
    <div class="image-section">
      <div class="overlay"></div>
      <img src="../assets/img/teamwork.jpg" alt="Billede" class="responsive-image" />
      <div class="form-container">
        <h2>Kan vi hjælpe?</h2>
        <form @submit.prevent="sendMail">
          <div class="form-group">
            <input type="text" id="name" v-model="name" placeholder="Navn" required>
          </div>
          <div class="form-group">
            <input type="email" id="email" v-model="email" placeholder="Email" required>
          </div>
          <div class="form-group">
            <input type="tel" id="phone" v-model="phone" placeholder="Telefonnummer"
            required>
          </div>
          <div class="form-group">
            <div class="checkbox-group">
              <input type="checkbox" id="vikar" v-model="isVikar">
              <label for="vikar">Vikar</label>
              <input type="checkbox" id="arbejdsgiver" v-model="isArbejdsgiver">
              <label for="arbejdsgiver">Arbejdsgiver</label>
            </div>
          </div>
          <div class="form-group">
            <textarea id="message" v-model="message"  placeholder="Din besked" rows="4" required></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        phone: '',
        isVikar: false,
        isArbejdsgiver: false,
        message: '',
      };
    },
    methods: {
    },
  };
  </script>
  
  <style scoped>
    *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  .image-section {
    position: relative;
    width: 100%;
    height: 550px;
  }
  h2{
    color: #fff;
    padding-bottom: 25px;
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
  
  .form-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem;
    width: 100%;
    max-width: 500px;
  }
  
  .form-group {
    margin-bottom: 1rem;
    width:100%;
  }

  .checkbox-group {
    display: flex;
    align-items:center ;
    width: 150px;

  }
  
  input[type="checkbox"] {
    margin-right: 0.5rem;
  }
  input{
    width: 100%;
    height: 30px;
    padding: 5px;
  }
  
  textarea {
    width: 100%;
    padding: 5px;
  }
  label{
    color: #fff;
  }
  
  button {
    background-color:  #F3AE3D;
    color: #fff;
    padding: 0.7rem 2rem;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 650px) {
    .form-container{
        max-width: 350px;
    }
}

@media (max-width: 460px) {
    .form-container{
        max-width: 250px;
    }
}


  </style>
  
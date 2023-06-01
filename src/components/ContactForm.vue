<template>
    <div class="image-section">
      <div class="overlay"></div>
      <img src="../assets/img/teamwork.jpg" alt="Billede" class="responsive-image" />
      <div class="form-container">
        <h3>Kan vi hjælpe?</h3>
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
          <button class="btn" type="submit">Send</button>
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
  
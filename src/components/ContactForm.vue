<template>
  <div class="image-section-form">
    <div class="overlay"></div>
    <img src="../assets/img/img-06.jpg" alt="Billede af en arbejder" class="responsive-image" />
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
          <input type="tel" id="phone" v-model="phone" placeholder="Telefonnummer" required>
        </div>
        <div class="form-group">
          <div class="checkbox-group">
            <input type="checkbox" id="vikar" v-model="isVikar" :disabled="isArbejdsgiver">
            <label for="vikar">Vikar</label>
            <input type="checkbox" id="arbejdsgiver" v-model="isArbejdsgiver" :disabled="isVikar">
            <label for="arbejdsgiver">Arbejdsgiver</label>
          </div>
        </div>
        <div class="form-group">
          <textarea id="message" v-model="message" placeholder="Din besked" rows="4" required></textarea>
        </div>
        <button class="btn" type="submit">Send</button>
      </form>
      <div v-if="showFeedback" class="feedback">
        <p class="hvid">Tak for din besked! Vi vil besvare den hurtigst muligt. Kontakt os gerne på 60 70 59 70 for hurtigere betjening.</p>
      </div>
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
      showFeedback: false,
    };
  },
  methods: {
    sendMail() {
      setTimeout(() => {
        this.showFeedback = true;

        this.name = '';
        this.email = '';
        this.phone = '';
        this.isVikar = false;
        this.isArbejdsgiver = false;
        this.message = '';
      }, 1000);
    },
  },
};
</script>
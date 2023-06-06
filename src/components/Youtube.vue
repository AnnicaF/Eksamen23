<template>
  <section class="image-section">
    <img src="../assets/img/img-06.jpg" alt="Banner billede som baggrund" class="background-image" />
    <div class="overlay"></div>
    <div class="content2">
      <div class="video-box">
        <iframe
          width="530"
          height="500"
          src="https://www.youtube.com/embed/25WoYN6okqs"
          title="YouTube video player"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-box">
        <h3>
          “Jeg kan klart anbefale at blive vikar hos DKV. Der er altid god
          service, hvis jeg har spørgsmål, eller hvis der er problemer på
          arbejdspladsen så står de altid klar til at hjælpe og så kommer min
          løn også altid til tiden. Igennem hele ansættelsesprocessen har DKV
          været meget hjælpsomme og imødekommende.”
        </h3>
      </div>
    </div>
  </section>
</template>

<style scoped>
.image-section {
  position: relative;
  width: 100%;
  padding-top: 40px;
  height: 600px;
}

.background-image {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.content2 {
  position: absolute;
  color: #fff;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text-box {
  padding: 20px;
}

.video-box {
  padding: 20px;
}

@media (max-width: 1140px) {
  .image-section {
    height: 150vh;
  }
  .content2 {
    display: flex;
    flex-direction: column;
  }
}

@media (max-width: 960px) {
  .image-section {
    height: 160vh;
  }
}

@media (max-width: 678px) {
  .image-section {
    height: 140vh;
  }

  .content2 {
    flex-direction: column;
  }

  .video-box {
    order: 1;
    margin-bottom: 20px;
  }

  .text-box {
    order: 2;
  }
}
</style>

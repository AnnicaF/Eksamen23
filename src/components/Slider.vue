<template>
  <div class="slider2">
    <div
      class="slide2"
      v-for="(item, index) in items"
      :key="index"
      :class="{ active: index === activeSlide2 }"
    >
      <div
        class="image-container"
        :class="{ 'image-top': screenWidth < 500 }"
      >
        <div class="rounded-image">
          <img v-if="index === 0" src="../assets/img/slideimg2.jpg" alt="Slide Image" />
          <img v-else-if="index === 1" src="../assets/img/slideimg.jpg" alt="Slide Image" />
          <!-- Add more images here as needed -->
        </div>
      </div>
      <div
        class="text-container"
        :class="{ 'text-below': screenWidth < 500 }"
      >
        <p class="italic slide-text">{{ item.description }}</p>
      </div>
    </div>
    <div class="arrow left" @click="prevSlide">&#8592;</div>
    <div class="arrow right" @click="nextSlide">&#8594;</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          description:
            '"Vi er ovenud tilfreds med DK Vikarservice. Tilsammen har vi over 50 års erfaring inden for malerfaget, og vi sagde begge op fra vores faste stillinger for at kunne arbejde som fast makkerpar. DK Vikarservice har givet os denne mulighed, og vi kan kun anbefale DK Vikarservice."',
        },
        {
          description:
            '"Jeg har været vikar hos DK Vikarservice i 2 år, og jeg har kun positive ting at sige om dem. De er altid klar til at hjælpe, og de er gode til at finde vikariater, der passer til mig. Jeg kan kun anbefale DK Vikarservice til andre."',
        },
        // Add more items here as needed
      ],
      activeSlide2: 0,
      screenWidth: 0,
    };
  },
  mounted() {
    this.screenWidth = window.innerWidth;
    window.addEventListener('resize', this.handleResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    handleResize() {
      this.screenWidth = window.innerWidth;
    },
    prevSlide() {
      this.activeSlide2 =
        (this.activeSlide2 - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      this.activeSlide2 = (this.activeSlide2 + 1) % this.items.length;
    },
  },
};
</script>
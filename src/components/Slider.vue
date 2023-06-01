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
          <img :src="item.image" alt="Slide Image" />
        </div>
      </div>
      <div
        class="text-container"
        :class="{ 'text-below': screenWidth < 500 }"
      >
        <p>{{ item.description }}</p>
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
          image: 'src/assets/img/teamwork.jpg',
          description:
            'Vi er ovenud tilfreds med DK Vikarservice. Tilsammen har vi over 50 års erfaring inden for malerfaget, og vi sagde begge op fra vores faste stillinger for at kunne arbejde som fast makkerpar. DK Vikarservice har givet os denne mulighed, og vi kan kun anbefale DK Vikarservice.',
        },
        {
          image: 'src/assets/img/banner.jpg',
          description:
            'Vi er ovenud tilfreds med DK Vikarservice. Tilsammen har vi over 50 års erfaring inden for malerfaget, og vi sagde begge op fra vores faste stillinger for at kunne arbejde som fast makkerpar. DK Vikarservice har givet os denne mulighed, og vi kan kun anbefale DK Vikarservice.',
        },
        // Tilføj flere slides efter behov
      ],
      activeSlide2: 0, // Ændret fra activeSlide til activeSlide2
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
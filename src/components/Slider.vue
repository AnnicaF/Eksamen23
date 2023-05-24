<template>
  <div class="slider">
    <div
      class="slide"
      v-for="(item, index) in items"
      :key="index"
      :class="{ active: index === activeSlide }"
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
        // Add more slides as needed
      ],
      activeSlide: 0,
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
      this.activeSlide =
        (this.activeSlide - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      this.activeSlide = (this.activeSlide + 1) % this.items.length;
    },
  },
};
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  background-color: #fdf8f1;
}

.slide {
  display: none;
  height: 100%;
}

.slide.active {
  display: flex;
}

.image-container {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-top {
  order: -1;
}

.rounded-image {
  width: 350px;
  height: 350px;
  border-radius: 50%;
  overflow: hidden;
}

.rounded-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.text-container {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-below {
  margin-top: 20px;
}

.text-container p {
  padding: 100px;
  font-size: 20px;
  line-height: 2;
  font-style: italic;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
  color: #f3ae3d;
  padding: 10px;
  cursor: pointer;
}

.left {
  left: 10px;
}

.right {
  right: 10px;
}

@media (max-width: 950px) {
  .rounded-image {
    width: 250px;
    height: 250px;
  }
  .text-container{
    padding:0px;
  }

  .text-container p {
    font-size: 16px;
    padding: 45px;
  }
  .image-container{
    padding-top: 20px;
  }
}

@media (max-width: 600px) {
  .slider {
    height: auto;
  }
  .slide.active {
  display: flex;
  flex-direction: column;
}

  .rounded-image {
    width: 200px;
    height: 200px;
  }

  .text-container p {
    padding-left: 50px;
    padding-right: 50px;
    font-size: 14px;
  }
}
</style>
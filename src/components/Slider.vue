<template>
    <div class="slideshow-section">
      <div class="slideshow-container">
        <transition-group name="slide" tag="div">
          <div v-for="(slide, index) in slides" :key="index" v-show="index === currentSlideIndex" class="slide">
            <div class="image-box">
              <img :src="slide.image" alt="Slide image">
            </div>
            <div class="text-box">
              <p>{{ slide.text }}</p>
            </div>
          </div>
        </transition-group>
      </div>
      <div class="navigation">
        <button class="arrow-button prev" @click="prevSlide">&#8249;</button>
        <button class="arrow-button next" @click="nextSlide">&#8250;</button>
      </div>
    </div>
</template>
  
  <script>
  import image1 from '@/assets/img/banner.jpg';
    import image2 from '@/assets/img/banner.jpg';
    import image3 from '@/assets/img/banner.jpg';
   
    export default {
  data() {
    return {
      slides: [
        { image: image1, text: 'Slide 1' },
        { image: image2, text: 'Slide 2' },
        { image: image3, text: 'Slide 3' },
      ],
        currentSlideIndex: 0,
      };
    },
    methods: {
      nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
      },
      prevSlide() {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
      },
    },
  };
  </script>
  
  <style>
  .slideshow-container {
    overflow: hidden;
  }
  
  .slide {
    display: none;
  }
  
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.5s;
  }
  
  .slide-enter,
  .slide-leave-to {
    transform: translateX(100%);
  }
  
  .slide-enter-to,
  .slide-leave {
    transform: translateX(-100%);
  }
  
  .slide-leave-active {
    position: absolute;
  }
  </style>
  
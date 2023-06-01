<template>
    <div class="carousel">
      <div class="slides-container">
        <div class="slide" v-for="(box, index) in boxes" :key="index" :style="getSlideStyles(index)">
          <div class="box">
            <h3 class="box-title">{{ box.title }}</h3>
            <p class="box-text">{{ box.text1 }}</p>
            <p class="box-text">{{ box.text2 }}</p>
            <p class="box-text">{{ box.text3 }}</p>
          </div>
        </div>
      </div>
      <div class="controls">
        <button class="prev" @click="prevSlide">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button class="next" @click="nextSlide">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        boxes: [
          { title: 'Overskrift 1', text1: 'Tekst 1', text2: 'Tekst 2', text3: 'Tekst 3' },
          { title: 'Overskrift 2', text1: 'Tekst 4', text2: 'Tekst 5', text3: 'Tekst 6' },
          { title: 'Overskrift 3', text1: 'Tekst 7', text2: 'Tekst 8', text3: 'Tekst 9' },
          { title: 'Overskrift 4', text1: 'Tekst 10', text2: 'Tekst 11', text3: 'Tekst 12' },
          { title: 'Overskrift 5', text1: 'Tekst 13', text2: 'Tekst 14', text3: 'Tekst 15' }
        ],
        currentSlide: 0,
        slidesToShow: 3
      };
    },
    methods: {
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.boxes.length) % this.boxes.length;
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.boxes.length;
      },
      getSlideStyles(index) {
        const offset = index - this.currentSlide;
        const slideWidth = 100 / this.slidesToShow;
        const transform = `translateX(${offset * slideWidth}%)`;
  
        return {
          width: `${slideWidth}%`,
          transform
        };
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel {
    margin-left: 100px;
    margin-right: 100px;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:flex-start;
    overflow: hidden;
  }
  
  .slides-container {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }
  
  .slide {
    flex-shrink: 0;
    width: 33.3333%;
  }
  
  .box {
    background-color: #fff;
    border: 1px solid #000;
    padding: 20px;
    text-align: center;
  }
  
  .box-title {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .box-text {
    color: #fff;
  }
  
  .controls {
    margin-top: 10px;
    text-align: center;
    display: flex;
  }
  
  .next{
    margin-left:400px;
  }
  button {
    margin: 0 5px;
    background: none;
    border: none;
    font-size: 24px;
  }
  
  .fa-chevron-left,
  .fa-chevron-right {
    color: #000;
  }
  </style>
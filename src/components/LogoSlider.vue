<template>
<div class="slider">
    <div class="slider-track">
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo1.jpeg" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo2.jpeg" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo3.jpeg" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo4.png" alt="Logo af">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo6.png" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo7.png" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo8.png" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo10.png" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo11.png" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo12.png" alt="Logo af virksomheder">
        </div>
        <div class="slide">
            <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo13.jpeg" alt="Logo af virksomheder">
        </div>
        <div class="slide">
              <div class="logo-overlay"></div>
            <img src="src/assets/img/logo/logo14.png" alt="Logo af virksomheder">
        </div>
    </div>
</div>
</template>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

img {
  height: 100px;
  width: 100%;
  object-fit: contain;
}
.slider {
  height: 100px;
  margin-top:50px;
  margin-bottom:50px;
  overflow: hidden;
  position: relative;
  width: auto;
  justify-content: center;
  align-items: center;
}

.logo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.slider .slide:hover .logo-overlay {
  opacity: 1;
}

.slider .slide img {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.slider .slide:hover img {
  filter: grayscale(0%);
}

.slider .slide:hover img + .logo-overlay {
  opacity: 0;
}

.slider .slider-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 21);
  animation-play-state: running;
}

.slider:hover .slider-track {
  animation-play-state: paused;
}

.slider .slide {
  height: 100px;
  width: 250px;
  margin-left: 30px;
  margin-right: 30px;
  position: relative;
}
@media  screen and (max-width:600px) {
    .slider{
        margin-top: 30px;
        margin-bottom: 30px;
    }
    
}
</style>
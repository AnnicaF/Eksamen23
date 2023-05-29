<template>
    <nav :class="{ 'navbar-scroll': scrolled }">
      <div class="navbar-toggle" @click="toggleMenu">
        <i class="fa-solid fa-bars"></i>
      </div>
      <div class="navbar-links" :class="{ 'active': menuActive }">
        <div class="navbar-logo">
          <img src="src/assets/img/logo/logo.png" alt="Logo af DKV">
        </div>
        <router-link to="/">Home</router-link>
        <router-link to="/job">Ledige stillinger</router-link>
        <router-link to="/about">Om os</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        scrolled: false,
        menuActive: false,
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 0;
      },
      toggleMenu() {
        this.menuActive = !this.menuActive;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed; 
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    padding: 0 20px;
    z-index: 10;
    background-color: transparent;
  }
  img{
    width:200px;
  }
  
  .navbar-scroll {
    background-color: #303030;
    color: white; 
    position: sticky;
    top: 0;
    z-index: 999;
  }
  .navbar-scroll a{
    color: white; 
  }
  
  .navbar-logo {
    width: 100px;
    padding: 30px;
  }
  
  .navbar-toggle {
    display: none;
    cursor: pointer;
  }
  .navbar-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
  }
  .navbar-links a {
    color: black;
    text-decoration: none;
    padding: 0 10px;
  }
  .navbar-links a:hover {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    .navbar-links {
      display: none;
    }
  
    .navbar-toggle {
      display: block;
      text-align: right;
      padding: 30px;
    }
  
    .navbar-links.active {
      display: flex;
      flex-direction: column;
      background-color: #303030;
      position: absolute;
      top: 80px;
      left: 0;
      width: 100%;
      padding: 20px 0;
    }
  
    .navbar-links a {
      color: white;
      text-decoration: none;
      padding: 10px 0;
    }
  }
  </style>
  
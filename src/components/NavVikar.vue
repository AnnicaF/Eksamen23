<template>
    <header :class="{'scrolled-nav': scrolledNav }">
      <nav>
        <div class="branding">
          <router-link to="/">
            <img src="../assets/img/logo/logo.png" alt="Logo af DKV">
          </router-link>
        </div>
        <ul v-show="!mobile" class="navigation">
          <li>
            <router-link class="link" :to="{ name:'' }" :class="{ 'active': $route.name === '' }">Jobsøgende</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name:'' }" :class="{ 'active': $route.name === '' }">At arbejde ved os
                <i class="fa-solid fa-chevron-down dropdown-ikon"></i>
            </router-link>
            <div class="dropdown-menu">
              <ul>
                <li><router-link :to="{ name: 'VikarService' }">Vikarservice</router-link></li>
                <li><router-link :to="{ name: 'Rekrutering' }">Rekrutering</router-link></li>
                <li><router-link :to="{ name: 'TryHire' }">Try &amp; Hire</router-link></li>
              </ul>
            </div>
          </li>
          <li>
            <router-link class="link" :to="{ name:'JobTest' }" :class="{ 'active': $route.name === 'JobTest' }">Ledige job</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name:'About' }" :class="{ 'active': $route.name === 'About' }">Om os</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name:'Contact' }" :class="{ 'active': $route.name === 'Contact' }">Kontakt</router-link>
          </li>
          <div class="login-btn">
            <router-link class="login-link" :to="{ name: '' }">Login</router-link>
          </div>
        </ul>
        <div class="icon">
          <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active' : mobileNav}"> </i>
        </div>
        <transition name="mobile-nav">
            <ul v-show="mobileNav" class="dropdown-nav">
                <li>
                <router-link class="link" :to="{ name:'' }">Jobsøgende</router-link>
                </li>
                <li>
                <router-link class="link" :to="{ name:'' }">Info til vikarer</router-link>
                </li>
                <li class="dropdown-item">
                <router-link class="link" :to="{ name:'ToBeVikar' }" :class="{ 'active': $route.name === 'ToBeVikar' }">At arbejde ved os
                </router-link>
                </li>
                <li class="dropdown-item">
                <router-link class="link" :to="{ name:'VikarService' }" :class="{ 'active': $route.name === 'VikarService' }">Vikarservice
                </router-link>
                </li>
                <li class="dropdown-item">
                <router-link class="link" :to="{ name:'Rekrutering' }" :class="{ 'active': $route.name === 'Rekrutering' }">Rekrutering
                </router-link>
                </li>
                <li class="dropdown-item">
                <router-link class="link" :to="{ name:'TryHire' }" :class="{ 'active': $route.name === 'TryHire' }">At Try & Hire
                </router-link>
                </li>
                <li>
                <router-link class="link" :to="{ name:'About' }" :class="{ 'active': $route.name === 'About' }">Om os</router-link>
                </li>
                <li>
                <router-link class="link" :to="{ name:'Contact' }" :class="{ 'active': $route.name === 'Contact' }">Kontakt</router-link>
                </li>
                <div class="login-btn">
                <router-link class="login-link" :to="{ name: '' }">Login</router-link>
                </div>
            </ul>
        </transition>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "Nav",
    data() {
      return {
        scrolledNav: null,
        mobile: null,
        mobileNav: null,
        windowWidth: null,
      };
    },
    created() {
      window.addEventListener("resize", this.checkScreen);
    },
    mounted() {
      window.addEventListener("scroll", this.updateScroll);
      this.checkScreen();
    },
    methods: {
      toggleMobileNav() {
        this.mobileNav = !this.mobileNav;
      },
      updateScroll() {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 50) {
          this.scrolledNav = true;
          return;
        }
        this.scrolledNav = false;
      },
      checkScreen() {
        this.windowWidth = window.innerWidth;
        if (this.windowWidth <= 1010) {
          this.mobile = true;
          return;
        }
        this.mobile = false;
        this.mobileNav = false;
        return;
      },
    },
  };
  </script>
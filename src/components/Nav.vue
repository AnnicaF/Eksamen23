<template>
    <header :class="{'scrolled-nav': scrolledNav}">
      <nav>
        <div class="branding">
          <router-link to="/">
            <img src="../assets/img/logo/logo.png" alt="Logo af DKV">
          </router-link>
        </div>
        <ul v-show="!mobile" class="navigation">
          <li>
            <router-link class="link" :to="{ name: '' }" :class="{ 'active': $route.name === '' }">
              Arbejdsgivere
            </router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Vikar' }" :class="{ 'active': $route.name === 'Vikar' }">
              Jobsøgende
            </router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'JobTest' }" :class="{ 'active': $route.name === 'JobTest' }">
              Ledige job
            </router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'About' }" :class="{ 'active': $route.name === 'About' }">
              Om os
            </router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'Contact' }" :class="{ 'active': $route.name === 'Contact' }">
              Kontakt
            </router-link>
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
                    <li><router-link class="link" :to="{ name:'' }">Arbejdsgivere</router-link></li>
                    <li><router-link class="link" :to="{ name:'Vikar' }" :class="{ 'active': $route.name === 'Vikar' }">Jobsøgendeb</router-link></li>
                    <li><router-link class="link" :to="{ name:'JobTest' }" :class="{ 'active': $route.name === 'JobTest' }">Ledige job</router-link></li>
                    <li><router-link class="link" :to="{ name:'About' }" :class="{ 'active': $route.name === 'About' }">Om os</router-link></li>
                    <li><router-link class="link" :to="{ name:'Contact' }" :class="{ 'active': $route.name === 'Contact' }">Kontakt</router-link></li>
                    <div class="login-btn">
                        <router-link class="login-link" :to="{ name: '' }">Login</router-link>
                    </div>
                </ul>
            </transition>
        </nav>
    </header>
</template>

<script>
export default{
    name: "Nav",
    data() {
        return {
            scrolledNav: false,
            mobile: false,
            mobileNav: false,
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
            this.scrolledNav = scrollPosition > 50;
        },

        checkScreen() {
            this.windowWidth = window.innerWidth;
            this.mobile = this.windowWidth <= 968;
            this.mobileNav = false;
        },
    },
};
</script>

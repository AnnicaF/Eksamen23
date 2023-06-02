<template>
    <header :class="{'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <img src="../assets/img/logo/logo.png" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name:'' }">Jobsøgende</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Info til vikarer</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">At arbejde ved os</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Ledige job</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Om os </router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Kontakt</router-link></li>
                <div class="login-btn">
            <router-link class="login-link" :to="{ name: '' }">Login</router-link>
      </div>
            </ul>
            <div class="icon">
                <i @click="toggleMobileNav" v-show="mobile" class="fa-solid fa-bars" :class="{'icon-active' : mobileNav}"> </i>
            </div>
            <transition name="mobile-nav">
                <ul v-show="mobileNav" class="dropdown-nav">
                <li><router-link class="link" :to="{ name:'' }">Jobsøgende</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Info til vikarer</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">At arbejde ved os</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Om os</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Kontakt</router-link></li>
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
    data(){
        return {
            scrolledNav: null,
            mobile: null,
            mobileNav: null,
            windowWidth: null,
        };
    },

    created(){
        window.addEventListener("resize", this.checkScreen);
    },
    mounted(){
        window.addEventListener("scroll", this.updateScroll);
        this.checkScreen();
    },
    methods:{
        toggleMobileNav(){
            this.mobileNav = !this.mobileNav;
        },

        updateScroll(){
            const scrollPosition = window.scrollY;
            if(scrollPosition > 50){
                this.scrolledNav = true;
                return;
            }
            this.scrolledNav = false;
        },

        checkScreen(){
            this.windowWidth = window.innerWidth;
            if (this.windowWidth <= 854){
                this.mobile = true;
                return;
            }
            this.mobile = false;
            this.mobileNav = false;
            return;
            }
        }

};
</script>
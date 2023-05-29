<template>
    <header :class="{'scrolled-nav': scrolledNav }">
        <nav>
            <div class="branding">
                <img src="src/assets/img/logo/logo.png" alt="">
            </div>
            <ul v-show="!mobile" class="navigation">
                <li><router-link class="link" :to="{ name:'' }">Arbejdsgivere</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Jobsøgende</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Ledige job</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Om os</router-link></li>
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
                <li><router-link class="link" :to="{ name:'' }">Home</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Home 1</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Home 2</router-link></li>
                <li><router-link class="link" :to="{ name:'' }">Home 3</router-link></li>
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
            this.mobilNav = false;
            return;
            }
        }

};
</script>

<style scoped>
header{
    background-color: transparent;
    z-index: 999;
    width: 100%;
    top:0;
    position: fixed;
    transition: 0.5s ease all;
}
nav{
    position: relative;
    display: flex;
    flex-direction: row;
    padding:12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
}

ul .link{
font-weight: 500;
color: white;
list-style:none;
}
li{
    padding: 16px;
    margin-left: 16px;
}
nav ul li a {
  list-style: none;
}
.link{
    font-size: 16px;
    transition:  .5s ease all;
    padding-bottom: 4px;
    border-bottom: 1px solid transparent;
    text-decoration: none;
}
.link:hover{
    border-color: #F3AE3D;
}
.branding{
    display: flex;
    align-items: center;
    z-index: 999;
}
img{
    width:180px;
    transition: .5s ease all;
}
.navigation{
    display: flex;
    align-items: center;
    flex: 1;
    justify-content: flex-end;
}
.icon{
    display:flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
    color: white;
    z-index: 999;
}
i{
    cursor: pointer;
    font-size: 24px;
    transition: 0.8s ease all;
}
.icon-active{
    transform: rotate(180deg);
}

.dropdown-nav{
    display: flex;
    flex-direction: column;
    position: fixed;
    align-items: center;
    width: 100%;
    height: 60%;
    background-color: #303030;
    top: 80px;
    left: 0;
}
li{
    margin-left: 0;
}
.login-btn {
    display: flex;
    align-items: center;
  }

  .login-link {
    display: inline-block;
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    border-radius: 5px;
    text-transform: uppercase;
    background-color: #F3AE3D;
    text-decoration: none;
    transition: .5s ease all;
  }

li::marker{
    content: none;
}
header.scrolled-nav{
    background-color:#303030;
}
@media (min-width:1140px) {
    nav{
        max-width: 1140px;
    }
}
</style>
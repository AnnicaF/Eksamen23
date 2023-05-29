<template>
    <footer>
      <div class="footer-container">
        <div class="footer-item">
            <img src="src/assets/img/logo/logo.png" alt="Logo af DKV">
            <h5>OM DK VIKARSERVICE</h5>
            <p class="info">DK Vikarservice er et dansk 
                vikar- og rekrutteringsbureau, der 
                tilbyder flere forskellige løsninger. 
                Mandskabsleje og Try & Hire forløb. 
            </p>
        </div>
        <div class="footer-item">
            <h5>SØGER DU JOB?</h5>
            <router-link to="/job"   class="footer-link">Ledige job</router-link>
            <router-link to="/about" class="footer-link">Registrer dig</router-link>
            <router-link to="/about" class="footer-link">Log ind</router-link>
            <router-link to="/about" class="footer-link">Blog</router-link>
        </div>
        <div class="footer-item">
            <h5>SØGER DU NYE MEDARBEJDERE?</h5>
            <router-link to="/job"   class="footer-link">Virksomheder</router-link>
            <router-link to="/about" class="footer-link">Vikarserviceses</router-link>
            <router-link to="/about" class="footer-link">Log ind</router-link>
        </div>
        <div class="footer-item">
            <h5>KONTAKT OS</h5>
            <p>TLF: 70 60 59 60 <br>
                @: info@dkvikarservice.dk <br>
                Kochsgade 31C <br> 5000 Odense C <br> CVR: 41939524
            </p>
            <div class="social-icon">
                <a href="https://www.facebook.com/dkvikarservice"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/dkvikarservice/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/company/dk-vikarservice/"><i class="fa-brands fa-linkedin"></i></a>
            </div>        
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  </script>
  
<style scoped>
    footer {
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: #303030;
    }

    .footer-link {
    color: #fff;
    margin-bottom: 10px;
    text-decoration: none;
    font-size: 13px;
    }

    .footer-container {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    flex-direction: row;
    
    }

    .footer-item {
    width: calc(25% - 10px);
    margin-bottom: 10px;
    padding: 10px;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    }
    img{
        width:200px;
    }

    p.info {
    margin-right: 30px;
    font-size:13px;
    }
    p{
        font-size: 13px;
    }
    h5{
        font-size: 15px;
    }
    .social-icon i{
        margin: 8px;
        color: #FFFFFF;
    }

    @media (max-width: 768px) {
    .footer-container {
        flex-direction: column;
    }

    .footer-item {
        width: 100%;
    }
    }
</style>
<template>
    <footer>
      <div class="footer-container">
        <div class="footer-item">
            <img src="../assets/img/logo/logo.png" alt="Logo af DKV">
            <h5 class="footer">OM DK VIKARSERVICE</h5>
            <p class="hvid info">DK Vikarservice er et dansk 
                vikar- og rekrutteringsbureau, der 
                tilbyder flere forskellige løsninger. 
                Mandskabsleje og Try & Hire forløb. 
            </p>
        </div>
        <div class="footer-item">
            <h5 class="footer">SØGER DU JOB?</h5>
            <router-link to="/JobTest"   class="footer-link">Ledige job</router-link>
            <router-link to="" class="footer-link">Registrer dig</router-link>
            <router-link to="" class="footer-link">Log ind</router-link>
            <router-link to="" class="footer-link">Blog</router-link>
        </div>
        <div class="footer-item">
            <h5 class="footer">SØGER DU NYE MEDARBEJDERE?</h5>
            <router-link to=""   class="footer-link">Virksomheder</router-link>
            <router-link to="/VikarService" class="footer-link">Vikarservice</router-link>
            <router-link to="" class="footer-link">Log ind</router-link>
        </div>
        <div class="footer-item">
            <h5 class="footer">KONTAKT OS</h5>
            <p class="hvid">TLF: 70 60 59 60 <br>
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
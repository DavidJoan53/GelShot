<template>
<div>
  <header role="banner">
    
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
        <div class="container-fluid">
          <a class="navbar-brand " href="/"><img src="../static/Logo.png" alt="" style="margin-left:-1rem;"></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbars">
            <ul class="navbar-nav pl-md-5 ml-auto">

              <li class="nav-item">
                 
                <a class="nav-link"><nuxt-link to="/gomas" style="text-decoration: none; color: inherit;padding-left: 0.5rem;">Gomitas </nuxt-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><nuxt-link to="/gelatinas" style="text-decoration: none; color: inherit;padding-left: 0.5rem;" > Gelatinas </nuxt-link></a>
              </li>
            </ul>

            <div class="navbar-nav ml-auto">
             <a class="iconos_header" target="_blank"   href="https://www.instagram.com/gel.shot/"> <i class="ion-social-instagram-outline ion-2x"></i> </a>
             <a class="iconos_header" target="_blank"  href="https://www.facebook.com/Gelshot-585313455478794"> <i class="ion-social-facebook-outline ion-2x"></i> </a>
<!--
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="classes.html" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redes sociales</a>
                <div class="dropdown-menu" aria-labelledby="dropdown04">
                  <a class="dropdown-item" href="classes.html">Facebook <i class="fab fa-instagram"></i></a>
                  <a class="dropdown-item" href="classes.html">Instagram</a>
                </div>
              </li>
              
              <form method="post" class="search-form">
                <span class="icon ion ion-search"></span>
                <input type="text" class="form-control" placeholder="Search...">
              </form> esto quiza a futuro, un buscador en base a la bebida del alchohol(??¿¿ jeje)
              -->
            </div>
            
          </div>
        </div>
        </div>
      </nav>

      
      
    </header>

    
    </div>



</template>



<!--      <nuxt-link to="/gomas">hola</nuxt-link>   -->
<style >

.ion-2x:before {
  
  font-size: 2.3rem; /* esto es para los iconos xD*/
}

.iconos_header{
    padding-left: 1.4rem ;
    color:#999;
}
@media (max-width: 991.98px) {
  .iconos_header{
    padding-left: 0.5rem ;
    color:#999;
  }
   }

.iconos_header:hover{
    color:#fff;
}


header {
  content: "";
  top: 0;
  height: 500px;
  width: 100%;
  background: black;
  background: linear-gradient(to bottom, black 0%, rgba(145, 232, 66, 0) 50%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#91e842', GradientType=0 );
  position: absolute;

  left: 0;
  width: 100%;
  z-index: 5;
}

@media (max-width: 1199.98px) {
  header {
    top: 0;
  }
}

header .navbar-brand {
  text-transform: uppercase;
  letter-spacing: .2em;
  font-weight: 400;
}

header .navbar-brand.absolute {
  position: absolute;
}

@media (max-width: 991.98px) {
  header .navbar-brand.absolute {
    position: relative;
  }
}


header .navbar {
  padding-top: 0;
  padding-bottom: 0;
  background: none !important;
  position: relative;
  font-family: "Montserrat", sans-serif;

}

@media (max-width: 1199.98px) {
  header .navbar {
    background: black !important;
    padding-top: .5rem;
    padding-bottom: .5rem;
  }
}

header .navbar .nav-link {
  padding: 1.7rem 1rem;
  outline: none !important;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: .2em;
}



header .navbar .nav-link.active {
  color: #fff;
}




@media (max-width: 991.98px) {
  .navbar-nav {
    display: inline;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
header .navbar .nav-link {
    padding: .5rem 0rem;
}


}


</style>
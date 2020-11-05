<template>
<div>
  <header role="banner">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand " href="/"><img src="../static/Logo.png" alt=""></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbars" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbars">
            <ul class="navbar-nav pl-md-5 ml-auto">

              <li class="nav-item">
                 
                <a class="nav-link"><nuxt-link to="/gomas" style="text-decoration: none; color: inherit;">Gomitas</nuxt-link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link"><nuxt-link to="/gelatinas" style="text-decoration: none; color: inherit;" >Gelatinas</nuxt-link></a>
              </li>
            </ul>

            <div class="navbar-nav ml-auto enlinea">
             <a class="iconos_header" href=""> <i class="ion-social-instagram-outline ion-2x"></i> </a>
             <a class="iconos_header" href=""> <i class="ion-social-facebook-outline ion-2x"></i> </a>
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
      </nav>
    </header>

    
    </div>



</template>



<!--      <nuxt-link to="/gomas">hola</nuxt-link>   -->
<style scoped>

.ion-2x:before {
  
  font-size: 2.3rem; /* esto es para los iconos xD*/
}

.iconos_header{
    padding-left: 1.3rem ;
    color:#999;
}

.iconos_header:hover{
    color:#fff;
}
/* Header */

header {
  content: "";
  position: absolute;
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

header .navbar-brand span {
  color: #71774b;
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
  font-size: 17px;
  text-transform: uppercase;
  letter-spacing: .2em;
}

@media (max-width: 1199.98px) {
  header .navbar .nav-link {
    padding: .5rem 0rem;
  }
}

header .navbar .nav-link.active {
  color: #fff;
}

header .navbar .dropdown-menu {
  font-size: 14px;
  border-radius: 4px;
  border: none;
  -webkit-box-shadow: 0 2px 30px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0 2px 30px 0px rgba(0, 0, 0, 0.2);
  min-width: 13em;
  margin-top: -10px;
}

header .navbar .dropdown-menu:before {
  bottom: 100%;
  left: 10%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 7px;
}

@media (max-width: 991.98px) {
  header .navbar .dropdown-menu:before {
    display: none;
  }
  .navbar-nav {
    display: inline;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
header .navbar .nav-link {
    padding: .5rem 1rem;
}


}

header .navbar .dropdown-menu .dropdown-item:hover {
  background: #71774b;
  color: #fff;
}

header .navbar .dropdown-menu .dropdown-item.active {
  background: #71774b;
  color: #fff;
}

header .navbar .dropdown-menu a {
  padding-top: 7px;
  padding-bottom: 7px;
}

header .navbar .cta-btn a {
  background: #71774b;
  color: #000 !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
  text-transform: uppercase;
  padding-top: 26px !important;
  padding-bottom: 26px !important;
  line-height: 1;
  -webkit-transition: .3s all ease;
  -o-transition: .3s all ease;
  transition: .3s all ease;
}

header .navbar .cta-btn a:hover {
  color: #fff !important;
  -webkit-box-shadow: 2px 0 30px -5px rgba(113, 119, 75, 0.9);
  box-shadow: 2px 0 30px -5px rgba(113, 119, 75, 0.9);
}

header .search-form {
  position: relative;
}

header .search-form .icon {
  position: absolute;
  top: 50%;
  font-size: 1.2rem;
  left: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

header .search-form .form-control {
  padding-left: 30px;
  border: none;
  height: 44px;
  border-radius: 0;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
}




 

</style>
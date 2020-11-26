<template>
  <div class="principal">
    
    <Navigation/>
    <div class="informacion">
        <h1 class="informacion_h1">Bienvenido a Gelshot</h1>
        <div>
        <p class="informacion_p">Gelshot es una tienda virtual de shots para fiesta, disfruta con tus amigos de una forma fuera de lo convencional con nuestras gomitas y gelatinas de shot.</p>
        </div>
    </div>

  </div>
</template>

<script>

import Navigation from '../components/Navigation'
export default {
  components:{
    Navigation,Header
  }
}
</script>

<script>
export default {
  head(){
  return{
     title:'GelShot',
     meta:[

       {
        hid: "description",
        name:"description",
        content:"Aqui, posteriormente colocaremos informacion sobre la pagina, que vende, y esas cosas, algo breve"
       }
     ],
     htmlAttrs: {
       lang: 'es'
     }
  }
  }
}
</script>

<style scoped>
body{
  overflow: hidden;
}
</style>

<style>

*{
  font-family: 'Quicksand', sans-serif;
}



@media (min-width: 1000px){
.principal{
  position: absolute;
  background-image: url('../static/gomasTres.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 100%;
  width: 100%;
}
}
.principal{
  position: absolute;
  background-image: url('../static/gomasTres.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

}
.informacion{
  position: relative;
  margin: 15% 0 0 5%;
  padding: 3% 0 1% 3%;
  width: 36.5%;
}

.informacion_h1{
  font-size: 400%;
  font-weight: 500;
  color: #090721
}

.informacion_p{
  font-size: 140%;
  width: 75%;
  padding-left: 5px;
  text-align: justify;
  color: #fff;
}

@media (max-width: 1200px) {
  .informacion{
    margin-top: 30%;
  }

  .informacion_h1{
    font-size: 300%;
  }

  .informacion_p{
    font-size: 150%;
  }
}

@media (max-width: 900px) {
  .informacion{
    margin-top: 30%;
  }

  .informacion_h1{
    font-size: 300%;
  }

  .informacion_p{
    font-size: 120%;
  }
}

@media (max-width: 450px) {
  .principal{
    background-position-x: 78%;
  }

  .informacion{
    background: rgba(240, 252, 253, 0.5);
    margin: 35% auto 0 auto;
    width: 80%;
    text-align: center;
  }

  .informacion_h1{
    font-size: 300%;
  }

  .informacion_p{
    font-size: 120%;
    margin: 0 auto;
    color: rgb(100, 98, 98);
    text-align: center;
  }
}

</style>
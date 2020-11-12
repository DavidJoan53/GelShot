<template>
  <div>
    
    <Navigation/>
    <Header/>
    <div class="informacion">
        <h1 class="informacion_h1">Bienvenido a Gelshot</h1>
        <p class="informacion_p">Gelshot es una tienda virtual de shots para fiesta, disfruta con tus amigos de una forma fuera de lo convencional con nuestras gomitas y gelatinas de shot.</p>
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


<style>
*{
  font-family: 'Quicksand', sans-serif;
}

.informacion{
  position: absolute;
  bottom: 400px;
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

</style>
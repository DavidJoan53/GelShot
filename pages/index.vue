<template>
  <div>
    
    <Navigation/>
    <Header/>
  


  </div>
</template>

<script>
import Navigation from '../components/Navigation'
import Header from '../components/Header'
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


<style >

</style>
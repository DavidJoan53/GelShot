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
</script>>

<script>
export default {
    head(){
        return{
        title: "Catálogo - Gomas",
        meta: [
            {
                hid: "descripcion",
                name: "descripcion",
                content: "En esta página se muestra el menú de gomas gelshot disponibles"
            }
        ],
        htmlAttrs: {
            lang: 'es'
        }
        }
    } 
}
</script>>

<style>

</style>
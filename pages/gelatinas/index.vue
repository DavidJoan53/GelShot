<template>
    <div>
        <Navigation/>
        <h1 class="Prueba">Tu vieja es ultra trola</h1>
    </div>
</template>

<script>
import Navigation from '../components/Navigation'
export default {
    components:{
        Navigation
    }
}
</script>>

<script>
export default {
    head(){
        return{
        title: "Catálogo - Gelatinas",
        meta: [
            {
                hid: "descripcion",
                name: "descripcion",
                content: "En esta página se muestra el menú de gelatinas gelshot disponibles"
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

.Prueba{
    font-family: 'Courier New', Courier, monospace;
}

</style>
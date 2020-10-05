<template>
    <div class="Fondo">
        <Navigation/>
        <div class="cabecera">
            <h1 class="cabecera-h1">GELATINAS</h1>
            <h3 class="cabecera-h2">Una nueva forma de disfrutar</h3>
        </div>

        <div class="cuerpo">
            <div class="tarjeta">
                <img class="tarjeta-image" src="../../static/placeholder.jpg">
                <div class="tarjeta-contenido">
                    <h4>Nombre del producto</h4>
                    <p>6 x $16.000</p> 
                </div>
            </div>
            <div class="tarjeta"></div>
            <div class="tarjeta"></div>
        </div>
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

.Fondo{
    background-color: black;
    padding-top: 130px;
}

.cabecera{
    background-color: brown;
    margin: 10px;
    padding-top: 60px;
    text-align: center;
}

.cabecera-h1{
    font-size: 290%;
}

.cabecera-h2{
    font-weight: lighter;
    padding: 10px 0 50px 0;
    color: #080D24;
}

.cuerpo{
    background-color: cornsilk;
    margin: 10px;
    display: flex;
    vertical-align: -webkit-baseline-middle;
    
}

.tarjeta{
    background-color: #96381E;
    margin: 1.5% 3%;
    padding: 1%;
    padding-bottom: 0.5%;
    width: 27%;
    height: 100%;
    display: block;
    
}

.tarjeta-image{
    width: 95%;
    height: 90%px;
    margin: 2.5% auto;
    display: block;
}

.tarjeta-contenido{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: cyan;
    margin: 2.5%;
    width: 95%;
    padding: 3%;
}

</style>
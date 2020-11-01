<template>
    <div class="Fondo">
        <Navigation/>
        <div class="cabecera">
            <h1 class="neon-gelatinas" data-text="[GELATINAS_GELSHOT]">[GELATINAS_GELSHOT]</h1>
        </div>

        <div class="cuerpo">
            <div class="cuerpo-contenedor">
                <div class="cuerpo-imagen">
                    <img class="cuerpo-image" src="../../static/GelatinaVerde.jpg">
                </div>
                <div class="cuerpo-contenido">
                    <div class="contenido-titulo">
                        uwu
                        <h1 class="contenido-titulo-h1">Black Nigger</h1>
                    </div>
                </div>
            </div>
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

@import url(//db.onlinewebfonts.com/c/75e0d53f56082617fd6b32e4d1e1a3bc?family=Rama+Gothic);

.Fondo{
    background-color: black;
    padding-top: 130px;
    font-family: 'Quicksand', sans-serif;
}

.cabecera{
    background: rgb(60,60,60);
    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(0,0,0,1) 100%);
    margin: 10px 0px 15px 0px;
    padding: 60px 0px 40px 0px;
    text-align: center;
}

.neon-gelatinas{
    font-size: 500%;
    font-weight: 400;
    margin: 0px;
    z-index: 3;
    color: #fff;
    text-shadow: 0 0 20pX #8BCDFA;
}

.neon-gelatinas:after{
    position: absolute;
    content: attr(data-text);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding-top: 200px;
    margin: auto;
    z-index: 2;
    color: #5FCDFA;
    filter: blur(15px);
}

.neon-gelatinas:before{
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin-top: 200px;
    margin-left: auto;
    margin-right: auto;
    height: 100px;
    width: 840px; 
    background-color: #72CDFA;
    z-index: 1;
    opacity: 1;
    filter: blur(40px);
}

.cuerpo{
    background-image: url('../../static/gomas.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
}

.cuerpo-contenedor{
    width: 90%;
    display: flex;
    margin: 10% auto 0 auto;
    padding: 3% 0;
    background-color: cornsilk;
}

.cuerpo-imagen{
    width: 55%;
    background-color: chocolate;
    display: flex;
    margin: 0 0 0 auto;
}

.cuerpo-image{
    width: 93%;
    height: 93%;
    margin: 3% auto;
}

.cuerpo-contenido{
    width: 30%;
    background-color: chartreuse;
    margin: 0 auto 0 0;
}

.contenido-titulo{
    color: crimson;
    font-family: 'Courier New', Courier, monospace;
    background-color: crimson;
}

</style>
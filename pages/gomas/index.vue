<template>
    <div class="Fondo">
        <Navigation/>
        <div class="cabecera">
            <h1 class="neon-gomitas" data-text="[GOMITAS_GELSHOT]">[GOMITAS_GELSHOT]</h1>
        </div>

        <div class="cuerpo">
            <div class="contenedor-tarjeta">
                <!--Tajerta #1-->
            <div class="tarjeta">
                <div class="marco-imagen">
                    <img class="tarjeta-image" src="../../static/placeholder-1.jpg">
                </div>
                <div class="tarjeta-contenido">
                    <h4 data-text="BAD GUY">BAD GUY</h4>
                </div> <!--
                <div class="contenedor">
                    <span class="carrito">
                        <i class="fas fa-cart-plus"></i>
                    </span>
                </div> -->
            </div>
            <!--Tajerta #2-->
            <div class="tarjeta">
                <div class="marco-imagen">
                    <img class="tarjeta-image" src="../../static/placeholder-2.jpg">
                </div>
                <div class="tarjeta-contenido">
                    <h4>SEXY POTION</h4>
                </div>
            </div>
            <!--Tajerta #3-->
            <div class="tarjeta">
                <div class="marco-imagen">
                    <img class="tarjeta-image" src="../../static/placeholder-3.jpg">
                </div>
                <div class="tarjeta-contenido">
                    <h4>VALQUIRIA</h4>
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

@import url(//db.onlinewebfonts.com/c/75e0d53f56082617fd6b32e4d1e1a3bc?family=Rama+Gothic);

.Fondo{
    background-color: black;
    padding-top: 130px;
    font-family: 'Quicksand', sans-serif;
}

.cabecera{
    background: rgb(91,107,147);
    background: radial-gradient(circle, rgba(91,107,147,1) 0%, rgba(163,36,89,1) 100%);
    background: rgb(60,60,60);
    background: radial-gradient(circle, rgba(60,60,60,1) 0%, rgba(0,0,0,1) 100%);
    margin: 10px 0px 15px 0px;
    padding: 60px 0px 40px 0px;
    text-align: center;
}

.neon-gomitas{
    font-size: 500%;
    font-weight: 400;
    margin: 0px;
    z-index: 3;
    color: #fff;
    text-shadow: 0 0 20px#ff689f;
}

.neon-gomitas:after{
    position: absolute;
    content: attr(data-text);
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    padding-top: 200px;
    margin: auto;
    z-index: 2;
    color: #ff005b;
    filter: blur(15px);
}

.neon-gomitas:before{
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
    background-color: #fe3a80;
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

.contenedor-tarjeta{
    display: flex;
    width: 75%;
    margin: auto;
}

.tarjeta{
    background: rgb(130,129,129);
    background: linear-gradient(0deg, rgba(130,129,129,1) 0%, rgba(80,78,78,1) 50%, rgba(0,0,0,1) 100%);
    width: 33%;
    height: 100%;
    margin: 1.5% 1%;
    padding: 1%;
    padding-bottom: 0.5%;
    display: block;
    color:#999;
}

.marco-imagen{
    background: radial-gradient(circle, rgba(114,202,203,1) 55%, rgba(247,48,140,1) 100%);
    margin: 0;
    padding: 1px 2px 1px 2px;
    border-radius: 5px;
}

.tarjeta-image{
    width: 95%;
    height: 90%;
    margin: 2.5% auto;
    display: block;
}

.tarjeta-contenido{
    background-image: url('../../static/madera.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    margin: 10px 0px 15px 0px;
    padding: 2.5%;
    text-align: center;
    display: block;
}

.tarjeta-contenido h4{
    width: 95%;
    font-weight: 600;
    font-size: 250%;
    text-align: center;
    color: white;
    text-shadow: 0 0 20px#ff689f;
}

/*
.contenedor{
    position: absolute;
    width: 60px;
    left: 27%;
    bottom: 45%;
    z-index: 2;
    box-sizing: border-box;
    text-align: center;
}

.carrito{
    background-color: rgba(163,36,89,1);
    position: relative;
    display: block;
    border-radius: 50%;
    font-size: 27px;
    color: whitesmoke;
    width: 80px;
    height: 80px;
    line-height: 14px;
    margin: 0 auto;
    padding-top: 23px;
    text-align: center;
    text-transform: uppercase;
    font-size: 40px;
} 

background: rgb(238,174,202);
background: linear-gradient(45deg, rgba(238,174,202,1) 0%, rgba(255,104,159,1) 100%);*/
</style>
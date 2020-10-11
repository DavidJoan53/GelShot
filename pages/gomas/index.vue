<template>
    <div class="Fondo">
        <Navigation/>
        <div class="cabecera">
            <h1 class="neon" data-text="[GELATINAS]">[GELATINAS]</h1>
        </div>

        <div class="cuerpo">
            <!--Tajerta #1-->
            <div class="tarjeta">
                <img class="tarjeta-image" src="../../static/placeholder-1.jpg">
                <div class="tarjeta-contenido">
                    <h4>BAD GUY</h4>
                    <div class="tarjeta-texto">
                        <p>3 x $14.000</p>
                        
                    </div>
                </div>
                <div class="contenedor">
                    <span class="carrito">
                        <i class="fas fa-cart-plus"></i>
                    </span>
                </div>
            </div>
            <!--Tajerta #2-->
            <div class="tarjeta">
                <img class="tarjeta-image" src="../../static/placeholder-2.jpg">
                <div class="tarjeta-contenido">
                    <h4>SEXY POTION</h4>
                    <div class="tarjeta-texto">
                        <p>6 x $16.000</p>
                    </div>
                </div>
                <div class="contenedor">
                    <span class="carrito">
                        <i class="fas fa-cart-plus"></i>
                    </span>
                </div>
            </div>
            <!--Tajerta #3-->
            <div class="tarjeta">
                <img class="tarjeta-image" src="../../static/placeholder-3.jpg">
                <div class="tarjeta-contenido">
                    <h4>VALQUIRIA</h4>
                    <div class="tarjeta-texto">
                        <p>1 x $8.000</p>
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
    margin: 10px;
    padding: 60px 0px 40px 0px;
    text-align: center;
}

.neon{
    font-size: 500%;
    font-weight: 400;
    margin: 0px;
    z-index: 3;
    color: #fff;
    text-shadow: 0 0 20px#ff689f;
}

.neon:after{
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

.neon:before{
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
    width: 500px;
    background-color: #fe3a80;
    z-index: 1;
    opacity: .5;
    filter: blur(40px);
}

.cuerpo{
    background-image: url('../../static/gomas.jpeg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 10px;
    display: flex;
    vertical-align: -webkit-baseline-middle;
    
}

.tarjeta{
    background: rgb(112,101,125);
    background: linear-gradient(0deg, rgba(112,101,125,1) 0%, rgba(25,25,27,1) 60%, rgba(0,0,0,1) 100%);
    border-radius: 3.5%;
    margin: 1.5% 3%;
    padding: 1%;
    padding-bottom: 0.5%;
    width: 27%;
    height: 100%;
    display: block;
    color:#999;
    
}

.tarjeta-image{
    width: 95%;
    height: 90%;
    margin: 2.5% auto;
    display: block;
}

.tarjeta-contenido{
    background-color:  rgba(91,107,147,1);
    margin: 2.5%;
    width: 95%;
    padding: 3%;
    text-align: center;
}

.tarjeta-texto p{
    margin-right: 20px;
}

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
</style>
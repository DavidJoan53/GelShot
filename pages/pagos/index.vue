<template>
<div>
    <Navigation/>
    <div class="top_decoration">
            <div class="rectangulo"></div>
        </div>
    <div class="container_exterior">
        <div class="pagos_h2_div">
            <h2 class="pagos_h2">Formulario de compra</h2>
        </div>
        <div class="container_pagos">
            <div class="form_content">
                <div class="form_unidad">
                    <h3>Nombre completo:</h3>
                    <input class="input_gran" type="text">
                </div>
                <div class="form_unidad">
                    <h3>Correo electrónico:</h3>
                    <input class="input_gran" type="text">
                </div>
                <div class="form_unidad">
                    <h3>Número de celular:</h3>
                    <input class="input_med" type="text">
                </div>
                <div class="form_unidad">
                    <h3>Dirección:</h3>
                    <input class="input_gran" type="text">
                    <p>Residencia</p>
                    <input class="input_peq" type="text">
                    <p>Ciudad</p>
                </div>
                <div class="form_unidad">
                    <h3>Total a pagar:</h3>
                    <p>$20.000</p>
                </div>
                <div class="form_unidad">
                    <h3>Método de pago:</h3>
                </div>
                <div class="selector_metodo">
                    <input type="radio" id="nequi" name="metodo" value="nequi">
                    <label class="logo_metodo nequi" for="nequi"></label>
                    <input type="radio" id="davivienda" name="metodo" value="davivienda">
                    <label class="logo_metodo davivienda" for="davivienda"></label>
                    <input type="radio" id="contraentrega" name="metodo" value="contraentrega">
                    <label class="logo_metodo contraentrega" for="contraentrega"></label>
                </div>
            </div>
            <button class="form_button">Confirmar</button>
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
.container_exterior{
    background-color:#5ba8db;
    margin: 0% auto 0 auto;
    padding: 3% 2.5% 2% 2.5%;
    width: 35%;
}

.top_decoration{
    background-color: grey;
    margin: 8% auto 0 auto;
    width: 35%;
    height: 2%;
    display: flex;
}

.rectangulo{
    background-color: white;
    width: 50%;
    height: 8px;
    margin: 8px 0 8px 25%;
    border-radius: 2px;
}

.container_pagos{
    background-color: whitesmoke;
    margin: 0 auto;
    padding-top: 7%;
    width: 100%;
}

.pagos_h2_div{
    background-color:#8eccf5;
    padding: 5% 5% 0.5% 5%;
    border-radius: 20px 20px 0 0;
}

.pagos_h2{
    text-align: center;
    font-weight: 700;
    font-size: 240%;
    color: #3098dd;
}

.form_content{
    padding-left: 8%;
}

.form_unidad{
    padding-bottom: 2.5%;
}

.form_unidad h3{
    font-weight: 500;
}

.form_unidad p{
    font-size: 120%;
}

.input_gran{
    width: 60%;
}

.input_med{
    width: 45%;
}

.input_peq{
    width: 30%;
}

/*MÉTODOS DE PAGO*/
.selector_metodo{
    width: 89.48%;
    display: flex;
}

.selector_metodo input{
    margin:0;padding:0;
    -webkit-appearance:none;
       -moz-appearance:none;
            appearance:none;
}

.nequi{background-image: url('../../static/nequi.png');}
.davivienda{background-image: url('../../static/davivienda.png');}
.contraentrega{background-image: url('../../static/contraentrega.png');}

.selector_metodo input:active +.logo_metodo{opacity: .9;}

.selector_metodo input:checked +.logo_metodo{
    -webkit-filter: none;
       -moz-filter: none;
            filter: none;
}

.logo_metodo{
    cursor: pointer;
    background-size: contain;
    background-repeat: no-repeat;
    margin: 0 auto;
    width: 80px; height: 80px;
    -webkit-transition: all 100ms ease-in;
       -moz-transition: all 100ms ease-in;
            transition: all 100ms ease-in;
    -webkit-filter: brightness(1.8) grayscale(1) opacity(.7);
       -moz-filter: brightness(1.8) grayscale(1) opacity(.7);
            filter: brightness(1.8) grayscale(1) opacity(.7);
}

.logo_metodo:hover{
    -webkit-filter: brightness(1.2) grayscale(.5) opacity(.9);
       -moz-filter: brightness(1.2) grayscale(.5) opacity(.9);
            filter: brightness(1.2) grayscale(.5) opacity(.9);
}

/*BOTÓN DEL FORMULARIO*/

.form_button{
    background-color: #2E962A;
    margin: 12% 30% 8% 30%;
    font-family: 'Quicksand', sans-serif;
    font-weight: 700;
    font-size: 150%;
    width: 40%;
    height: 40px;
    text-align: center;
    color: whitesmoke;
    border-radius: 14px;
    border: none;
    transition: 0.15;
}

.form_button:focus{
    outline: none;
}

.form_button:active{
    background-color: #275C29;
    transition: 0.2s;
}
</style>
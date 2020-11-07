<template>
<div>
    <Navigation/>
	        <div class="st-content-inner">
   
    <section class="page-header-wrapper">
					<div class="container">
						<div class="row">
							<div class="col-md-12">
								<div class="page-header">
								  <h1>Catalogo</h1>
								</div>
								<ol class="breadcrumb">
								  <li><a href="#">Inicio</a></li>
                                  <li class="active">ㅤ/ㅤ</li>
								  <li><a href="#">Catalogo</a></li>
                                  <li class="active">ㅤ/ㅤ</li>
								  <li class="active">Gomitas</li>
								</ol>
							</div>
						</div>
					</div>
	</section>

              <div class="container">
					<div class="content-wrapper">
						<div class="inner-content">
					        <ul class="list-inline" id="filter">
					            <li><a class="active" >Todas las bebidas</a></li>
					            <li><a >Aguardiente</a></li>
					            <li><a >Margarita</a></li>
					            <li><a >Vodka</a></li>
					            <li><a >Ron</a></li>

					        </ul>

					        <div class="row">
					                <Pruebas/>
                                    <Pruebas/>
                                    <PruebasDos/>
                                    <PruebasDos/>
					                <Cards/>
                                    <Cards/>
					                <Cards/>
                                    <Cards/>
                                    <Cards/>

                                    <Cards/>
                                    <Cards/>
                                    <Cards/>
					            
					        </div>
						</div>
					</div>
				</div>
           </div>
        </div>
    
          
</template>

<script>
import Navigation from '../components/Navigation'
import Header from '../components/Header'
import Cards from '../components/Cards'
import Pruebas from '../components/Pruebas'
import PruebasDos from '../components/PruebasDos'

export default {
    components:{
        Navigation,Header,Cards,Pruebas,PruebasDos
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


<style scoped>

.page-header-wrapper{
    padding-top: 120px;
    background: url('../../static/edits/gomasDeg.png') no-repeat;
    background-size: cover;
}

</style>

<style>



body {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    background: #f7f7f7;
    color: #6d6d6d;
    -webkit-font-smoothing: antialiased !important;
}


h1, h2, h3, h4, h5, h6 {
    margin: 0 0 15px;
    color: #202020;
    font-family: "Roboto", sans-serif;
}

h1 {
    font-size: 42px;
    font-weight: 800;
    line-height: 46px;
}

h2 {
    font-size: 28px;
    font-weight: 700;
    line-height: 34px;
}

h3 {
    font-size: 20px;
    line-height: 22px;
    font-weight: 700;
}



a {
    color           : #fcbb3c;
    text-decoration : none;
    transition      : all 0.3s ease 0s;
}

a,
a:active,
a:focus,
a:active {
    text-decoration : none !important;
    outline         : none
}



a:hover,
a:focus {
    color           : #e89b04;
    text-decoration : none !important;
}


img {
    width: 100%;
}

hr {
    border-top: 1px solid #e3e3e3;
}

@media(min-width:100px) { 
    .page-header-wrapper{
        min-height: 350px;
    }
}

.page-header {
    padding-bottom: 0;
    margin: 0;
    border-bottom: 0;
}
.page-header h1 {
    color: #fff;
    background: url('../../static/edits/borde.png') no-repeat;
    background-position: 2px 5px;
    padding-top: 15px;
    margin: 0;
}


/* --------------------------------------------------
BREADCRUMB esto aun no me funciona
----------------------------------------------------- */
.breadcrumb {
    padding: 7px 0 0;
    background-color: transparent;
}
.breadcrumb>.active {
    color: #fff;
}

.content-wrapper {
    position: relative;
    top: -120px;
    border: 3px solid #e3e3e3;
    border-radius: 5px;
    background: #fff;
    z-index: 100;
}
.inner-content {
    padding: 60px;
}


.margin-bottom-60 {
    margin-bottom: 60px;
}




.owl-theme .owl-controls .owl-page.active span, 
.owl-theme .owl-controls.clickable .owl-page:hover span {
    background: #fcbb3c;
}



.sidebar-wrapper .sidebar-tab ul li:before,
.widget.widget_tag_cloud ul li:before  {
    display: none;
}


#filter {
    overflow: hidden;
    margin: 15px 0 30px;
}

#filter li {
    float: left;
    margin-bottom: 10px;
    padding-right: 0.5rem;
}

#filter li a {
    background: transparent;
    border: 2px solid #e3e3e3;
    border-radius: 3px;
    color: #6d6d6d;
    display: block;
    margin: 0 5px 0 0;
    padding: 3px 10px;
    cursor: pointer;
}
#filter li a:hover,
#filter li a.active {
    background: #fe7402;
    border: 2px solid transparent;
    color: #fff;
}
</style>
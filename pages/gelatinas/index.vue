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
								  <li class="active">Gelatinas</li>
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
export default {
    components:{
        Navigation,Header,Cards
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

<style >
.page-header-wrapper{
    padding-top: 120px;
    background: url('../../static/deg.png') no-repeat;
    background-size: cover;
}

</style>
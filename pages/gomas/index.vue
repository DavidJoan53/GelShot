<template>
  <div>
    <Navigation />
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
              <li>
                <a @click="getProducts()" class="active">Todas las bebidas</a>
              </li>
              <li><a @click="productsByType('vodka')">Vodka</a></li>
              <li><a @click="productsByType('brandy')">Brandy</a></li>
              <li><a @click="productsByType('whisky')">Whisky</a></li>
            </ul>
            <div style="display: block; padding-bottom: 3rem">
              <nuxt-link to="/pagos" class="btn btn-outline-secondary"
                >Finalizar compra</nuxt-link
              >
            </div>
            <div class="row">
              <div v-for="product in products" :key="product._id">
                <Pruebas
                  :id="product._id"
                  :name="product.name"
                  :description="product.description"
                  :photo="product.photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="modalPush"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-notify modal-info" role="document">
        <!--Content-->
        <div class="modal-content text-center">
          <!--Body-->
          <div class="modal-body">
            <i class="fas fa-bell fa-4x animated rotateIn mb-4"></i>

            <p>¿Quieres seguir comprando?</p>
          </div>

          <!--Footer-->
          <div class="modal-footer flex-center m-auto">
            <a href="" class="btn btn-outline-secondary" data-dismiss="modal"
              >Seguir comprando</a
            >
            <a href="/pagos" class="btn btn-outline-secondary"
              >Terminar compra</a
            >
          </div>
        </div>
      </div>
      <!--/.Content-->
    </div>
  </div>
</template>

<script>
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Cards from "@/components/Cards";
import Pruebas from "@/components/Pruebas";

export default {
  data: () => ({
    products: [],
  }),
  async created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const res = await this.$axios.$get("/products/goma");
        this.products = res;
      } catch (error) {
        console.log(error);
      }
    },
    async productsByType(type) {
      try {
        const res = await this.$axios.$get("/products/goma/" + type);
        this.products = res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    getOrder() {
      return this.$store.getters["getOrder"];
    },
  },
  components: {
    Navigation,
    Header,
    Cards,
    Pruebas,
  },
  head: {
    title: "Catálogo - Gelatinas",
    meta: [
      {
        hid: "descripcion",
        name: "descripcion",
        content:
          "En esta página se muestra el menú de gelatinas gelshot disponibles",
      },
    ],
    htmlAttrs: {
      lang: "es",
    },
  },
};
</script>
<style scoped>
.page-header-wrapper {
  padding-top: 120px;
  background: url("../../static/edits/gomasDeg.png") no-repeat;
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

.barra {
  height: 50vh;
}

.barra::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.barra::-webkit-scrollbar-thumb {
  background: #000;
  border-radius: 4px;
}

.barra::-webkit-scrollbar-thumb:hover {
  background: #000;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}

.barra::-webkit-scrollbar-thumb:active {
  background-color: #000;
}

.redic_pagos {
  margin-top: 3%;
  background-color: black;
  height: 5vh;
  display: flex;
}

.redic_boton {
  margin: auto;
  font-weight: 500;
  font-size: 200%;
}

h1,
h2,
h3,
h4,
h5,
h6 {
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
  color: #fcbb3c;
  text-decoration: none;
  transition: all 0.3s ease 0s;
}

a,
a:active,
a:focus,
a:active {
  text-decoration: none !important;
  outline: none;
}

a:hover,
a:focus {
  color: #e89b04;
  text-decoration: none !important;
}

img {
  width: 100%;
}

hr {
  border-top: 1px solid #e3e3e3;
}

@media (min-width: 100px) {
  .page-header-wrapper {
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
  background: url("../../static/edits/borde.png") no-repeat;
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
.breadcrumb > .active {
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
.widget.widget_tag_cloud ul li:before {
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
  background: #333;
  border: 2px solid transparent;
  color: #fff;
}
</style>

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
              <li @click="getProducts()">
                <a
                  :class="{ active: selected === 'todas' }"
                  @click="selected = 'todas'"
                  >Todas las bebidas</a
                >
              </li>
              <li @click="productsByType('vodka')">
                <a
                  :class="{ active: selected === 'vodka' }"
                  @click="selected = 'vodka'"
                  >Vodka</a
                >
              </li>
              <li @click="productsByType('brandy')">
                <a
                  :class="{ active: selected === 'brandy' }"
                  @click="selected = 'brandy'"
                  >Brandy</a
                >
              </li>
            </ul>
            <div style="display: block; padding-bottom: 3rem">
              <a href="/pagos" class="btn btn-outline-secondary"
                >Finalizar compra</a
              >
            </div>
            <div class="row">
              <div v-for="product in products" :key="product._id">
                <Pruebas
                  :id="product._id"
                  :name="product.name"
                  :description="product.description"
                  :photo="product.photo"
                  data-toggle="modal"
                  data-target="#modalPush"
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

            <p>¿Desea añadir al carrito?</p>
          </div>

          <!--Footer-->
          <div class="modal-footer flex-center m-auto">
            <a href="" class="btn btn-outline-secondary" data-dismiss="modal"
              >Si</a
            >
            <a class="btn btn-outline-secondary">No</a>
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
  el: "#filter",
  data: () => ({
    products: [],
    selected: "todas",
  }),
  async created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const res = await this.$axios.$get("/products/gelatina");
        this.products = res;
      } catch (error) {
        console.log(error);
      }
    },
    async productsByType(type) {
      try {
        const res = await this.$axios.$get("/products/gelatina/" + type);
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

<style >
.page-header-wrapper {
  padding-top: 120px;
  background: url("../../static/deg.png") no-repeat;
  background-size: cover;
}
</style>

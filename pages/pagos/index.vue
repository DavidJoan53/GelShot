<template>
  <div>
    <header class="pago_header">
      <div>
        <h1 class="p_bold_title">GELSHOT</h1>
        <h1 class="p_title">Finalizar compra</h1>
        <span class="p_retorno"
          ><a href="javascript: history.go(-1)">Volver a la tienda</a></span
        >
      </div>
    </header>
    <div class="pago_contenido">
      <div class="p_formulario">
        <!--DATOS A RELLENAR-->
        <h2>1 Datos de envío</h2>
        <form class="form-group, p_form">
          <div class="f_item">
            <label class="f_label" for="name">*Nombre</label>
            <input v-model="customer.name" type="text" /><br />
          </div>
          <div class="f_item">
            <label class="f_label" for="lname">*Apellido</label>
            <input v-model="customer.lastname" type="text" /><br />
          </div>
          <div class="f_item">
            <label class="f_label" for="phone">*Número de celular</label>
            <input v-model="customer.number" type="text" /><br />
          </div>
          <div class="f_item">
            <label class="f_label" for="email">*Correo electrónico</label>
            <input v-model="customer.email" type="email" /><br />
          </div>
          <div class="f_location_item">
            <div class="location_instance">
              <label class="f_label" for="city">*Ciudad</label>
              <input v-model="customer.city" type="text" />
            </div>

            <div class="f_space"></div>

            <div class="location_instance">
              <label class="f_label" for="address">*Dirección</label>
              <input v-model="customer.address" type="text" /><br />
            </div>
          </div>
          <!--MÉTODO DE PAGO
          <h2>2 Método de pago</h2>
          <div class="selector_metodo">
            <input type="radio" id="nequi" name="metodo" value="nequi" />
            <label class="logo_metodo nequi" for="nequi"></label>
            <input
              type="radio"
              id="davivienda"
              name="metodo"
              value="davivienda"
            />
            <label class="logo_metodo davivienda" for="davivienda"></label>
            <input
              type="radio"
              id="contraentrega"
              name="metodo"
              value="contraentrega"
            />
            <label
              class="logo_metodo contraentrega"
              for="contraentrega"
            ></label>
          </div>-->
        </form>
        <!--BOTÓN-->
        <button
          @click="sendOrder"
          type="type"
          class="btn btn-primary, f_button"
        >
          Confirmar
        </button>
      </div>
      <!--CARRITO DE COMPRAS-->
      <div class="p_carrito">
        <div class="c_productos">
          <h3>Resumen del pedido</h3>
          <div v-for="product in products" :key="product._id">
            <TinyCards
              :id="product._id"
              :name="product.name"
              :price="product.price"
              :photo="product.photo"
            />
          </div>
          <div class="container-total">
            <div class="total-title">Total:</div>
            <div class="total-number">{{ getTotal }}</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import TinyCards from "@/components/TinyCards";

export default {

  data: () => ({
    products: [],
    customer: {},
  }),
  async created() {
    this.products = this.getOrder.products;
  },
  methods: {
    async sendOrder() {
      try {
        const client = await this.$axios.$post("/customer", this.customer);
        const email = await this.$axios.$post("/orders", {
          products: this.products,
          total: this.getTotal,
          customer: client._id,
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  computed: {
    getOrder() {
      return this.$store.getters["getOrder"];
    },
    getTotal() {
      return this.$store.getters["getTotal"];
    },
  },
  components: {
    TinyCards,
  },
  head: {
    title: "Catálogo - Gomas",
    meta: [
      {
        hid: "descripcion",
        name: "descripcion",
        content:
          "En esta página se muestra el menú de gomas gelshot disponibles",
      },
    ],
    htmlAttrs: {
      lang: "es",
    },
  },
};
</script>


<style>
.pago_header {
  background: none;
  border-bottom: 1px #999 solid;
  height: 25%;
}

.pago_header div {
  margin: 5% 24% 0 24%;
  display: flex;
}

.p_retorno {
  display: flex;
  margin-left: auto;
}

.p_retorno a {
  color: black;
}

.p_bold_title {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  padding-right: 3%;
  color: #2a4057;
}

.p_title {
  font-weight: 300;
  font-size: 200%;
  color: #999;
}

.pago_contenido {
  max-width: 955px;
  width: 100%;
  margin: 2% auto;
  display: flex;
}

/*FORMULARIO*/
.p_formulario {
  width: 50%;
  margin-right: auto;
}

.p_formulario h2 {
  font-weight: 500;
  font-size: 28px;
  color: #242424;
}

.f_item {
  width: 100%;
  margin-bottom: 20px;
}

.f_label {
  font-size: 120%;
}

.f_item input {
  width: 100%;
  height: 40px;
}

.f_location_item {
  width: 100%;
  display: flex;
  margin-bottom: 20px;
}

.f_space {
  width: 6%;
}

.location_instance {
  width: 47%;
}

.location_instance input {
  width: 100%;
  height: 40px;
}
/*BOTÓN*/
.f_button {
  position: relative;
  background-color: black;
  margin: 5% 0;
  width: 100%;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  color: whitesmoke;
  border: 3px solid #ff0044;
  border-radius: 4px;
  outline: none;
  transition: ease-out 0.3s;
  z-index: 1;
}

.f_button:hover {
  background-color: #fff;
  color: black;
  font-size: 20;
}

.f_button::before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: #ff0044;
}

.f_button:hover:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
}

.f_button:focus {
  outline: none;
}

/*MÉTODOS DE PAGO*/
.selector_metodo {
  width: 89.48%;
  display: flex;
}

.selector_metodo input {
  margin: 0;
  padding: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.nequi {
  background-image: url("../../static/nequi.png");
}
.davivienda {
  background-image: url("../../static/davivienda.png");
}
.contraentrega {
  background-image: url("../../static/contraentrega.png");
}

.selector_metodo input:active + .logo_metodo {
  opacity: 0.9;
}

.selector_metodo input:checked + .logo_metodo {
  -webkit-filter: none;
  -moz-filter: none;
  filter: none;
}

.logo_metodo {
  cursor: pointer;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
  width: 80px;
  height: 80px;
  -webkit-transition: all 100ms ease-in;
  -moz-transition: all 100ms ease-in;
  transition: all 100ms ease-in;
  -webkit-filter: brightness(1.8) grayscale(1) opacity(0.7);
  -moz-filter: brightness(1.8) grayscale(1) opacity(0.7);
  filter: brightness(1.8) grayscale(1) opacity(0.7);
}

.logo_metodo:hover {
  -webkit-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
  -moz-filter: brightness(1.2) grayscale(0.5) opacity(0.9);
  filter: brightness(1.2) grayscale(0.5) opacity(0.9);
}

/*CARRITO DE COMPRAS*/
.p_carrito {
  width: 42%;
  max-height: 800px;
  background-color: rgb(238, 238, 238);
  margin: 0 auto;
}

.c_productos {
  width: 84%;
  margin: 12px auto;
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

.c_productos h3 {
  font-weight: 300;
  font-size: 20px;
}

.container-total {
  margin-top: 20%;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #999;
}

.total-title {
  width: 50%;
  font-size: 24px;
  font-weight: 500;
}
.total-number {
  width: 50%;
  text-align: right;
  font-size: 20px;
  font-weight: 500;
}
</style>

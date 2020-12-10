<template>
  <div class="container_adm">
    <div class="header_adm">
      <h1 class="title_adm">Productos enseñados</h1>
      <span class="logout"><a href="/">Cerrar sesión</a></span>
    </div>
    <div class="content_adm row">
      <Product />
      <div v-for="product in products" :key="product._id" class="content_adm row">
        <Product
          :id="product._id"
          :name="product.name"
          :description="product.description"
          :price="product.price"
          :type="product.type"
          :drink="product.drink"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "@/components/Product";

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
        const res = await this.$axios.$get("/products/");
        this.products = res;
      } catch (error) {
        console.log(error);
      }
    },
  },
  components: {
    Product,
  },
  head: {
    title: "Administración",
    meta: [
      {
        hid: "description",
        name: "admin",
        content:
          "Página que la administradora utilizará para modificar los productos en la tienda",
      },
    ],
    htmlAttrs: {
      lang: "es",
    },
  },
};
</script>

<style>
.header_adm {
  margin: 3% auto 0 auto;
  border-bottom: 1px #999 solid;
  display: flex;
  width: 100%;
}

.title_adm {
  margin-left: 15%;
}

.logout {
  margin: auto 0 0 auto;
  padding-right: 15%;
  font-size: 110%;
}

.logout a {
  color: #2a4057;
}

.content_adm {
  max-width: 1000px;
  width: 100%;
  margin: 2% auto;
  display: flex;
}

@media (max-width: 800px) {
  .title_adm {
    font-size: 180%;
    margin-left: 5%;
  }

  .logout {
    font-size: 90%;
    padding-right: 5%;
  }
}

@media (max-width: 500px) {
  .title_adm {
    font-size: 130%;
  }

  .logout {
    padding: 0;
    font-size: 70%;
    padding-right: 5%;
  }
}
</style>

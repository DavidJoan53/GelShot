<template>
  <div class="tc-container">
    <div class="div-elimination">
      <button class="close" @click="removeProduct(id)">X</button>
    </div>
  <div class="div-product">
    <img class="tc-img" :src="photo" />
    <div class="tc-content">
      <h1 class="cont">{{ name }}:</h1>
      <h1 class="cont3">Cantidad:</h1>
    </div>
    <div class="tc-content">
      <h1 class="cont2">${{ price }}</h1>
      <h1 class="cont3">x6</h1>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: ["id", "name", "price", "photo"],
  methods: {
    removeProduct(id) {
      sessionStorage.setItem("product", JSON.stringify(id));
      this.$store.dispatch("removeProduct");
      location.reload()
    }
  }
};
</script>

<style>
.tc-container {
  width: 100%;
  margin-top: 10%;
  position: relative;
  background-color: rgba(190, 187, 187, 0.5);
  padding: 2px;
  border-radius: 4px;
}
.tc-img {
  width: 30%;
  height: 80px;
  margin: auto;
  padding: 2px;
}

.tc-content {
  width: 32%;
  margin-left: auto;
}

.cont {
  width: 100%;
  height: 30px;
  font-size: 18px;
  font-weight: 300;
}

.cont2 {
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: 300;
}
.cont3 {
  width: 20%;
  font-size: 16px;
  font-weight: 300;
  padding-right: 5px;
}

.div-product{
  width: 100%;
  padding-top: 12px;
  display: flex;
}
.close{
  line-height: 18px;
  width: 18px;
  font-size: 8pt;
  font-family: tahoma;
  margin: 4px 2px 4px 0;
  position:absolute;
  top:0;
  right:0;  
  font-weight: 600;
  font-size: 14px;
}
</style>

<template>
  <div class="tc-container">
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
</template>

<script>
export default {
  props: ["id", "name", "price", "photo"],
};
</script>>

<style>
.tc-container {
  width: 100%;
  margin-top: 10%;
  display: flex;
}
.tc-img {
  width: 30%;
  height: 80px;
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
  margin-left: auto;
  text-align: right;
}
.cont3 {
  width: 20%;
  font-size: 16px;
  font-weight: 300;
}

.eliminar {
  color: whitesmoke;
  background-color: #c90a00;
  border-radius: 50%;
  width: 30%;
}
</style>

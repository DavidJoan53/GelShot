<template>
  <div id="containerCard">
    <!-- Start	Product details -->
    <div class="product-details">
      <!-- 	Product Name -->
      <h1 class="titulo">GuataUva</h1>
      <!-- 		<span class="hint new">New</span> -->
      <!-- 		<span class="hint free-shipping">Free Shipping</span> -->
      <!-- 		the Product rating -->

      <!-- The most important information about the product -->
      <p class="information">
        Traido de donde traen las mejores uvas de la legion uvera deliciosisimo 
      </p>

      <!-- 		Control -->
      <div class="control">
        <!-- Start Button buying -->
        <button class="btn">
          <!-- 		the Price -->
          <span class="price">15.000$ x6</span>
          <!-- 		shopping cart icon-->
          <span class="shopping-cart"
            ><i class="fa fa-shopping-cart" aria-hidden="true"></i
          ></span>
          <!-- 		Buy Now / ADD to Cart-->
          <span class="buy">Comprar</span>
        </button>
        <!-- End Button buying -->
      </div>
    </div>

    <!-- 	End	Product details   -->

    <!-- 	Start product image & Information -->

    <div class="product-image">
      <img class="imagen" src="../static/pruebas/recortado.png" alt="" />

      <!-- 	product Information-->
      <div class="info">

        <ul>
          <li>Vodka</li>
          <li>Gelatina de uva</li>
        </ul>
      </div>
    </div>
    <!--  End product image  -->
  </div>
</template>

<script>
export default {};
</script>

<style>
*{
  font-family: 'Quicksand', sans-serif;
}

.titulo{
	font-size: 2.3rem;
}
/* fonts  */


#containerCard {
  box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
  background: rgba(255, 255, 255, 0.9);
  text-align: center;
  border-radius: 5px;

  margin-left: 1rem;
  height: 16rem;
  width: 30rem;
  margin-bottom: 2rem;
}

/* 	Product details  */
.product-details {
  position: relative;

  text-align: left;
  padding: 30px;
  height: 100%;
  float: left;
  width: 53%;
}

/* 	Product Name */
#container .product-details h1 {
  font-family: "Old Standard TT", serif;
  display: inline-block;
  position: relative;
  font-size: 34px;
  color: #344055;
  margin: 0;
}

#container .product-details h1:before {
  position: absolute;
  content: "";
  right: 0%;
  top: 0%;
  transform: translate(25px, -15px);
  /*font-family: "Farsan", cursive;*/
  display: inline-block;
  background: #ffa69e;
  border-radius: 5px;
  font-size: 14px;
  padding: 5px;
  color: #fff;
  margin: 0;
  animation: chan-sh 6s ease infinite;
}

@keyframes chan-sh {
  from {
    content: "free shipping";
  }
  to {
    content: "New";
  }
}


/* the Button */
.btn {
  transform: translateY(0px);
  transition: 0.3s linear;

  border-radius: 5px;
  position: relative;
  overflow: hidden;
 
}

.btn:hover {
  transform: translateY(-2px);
}

.btn span {
  /*font-family: "Farsan", cursive;*/
  transition: transform 0.3s;
  display: inline-block;
  padding: 10px 20px;
  font-size: 0.8rem;
  margin: 0;
}
/* shopping cart icon */
.btn .price,
.shopping-cart {
  background: #333;
  color: whitesmoke;
  border: 0;
  margin: 0;
}

.btn .price {
  transform: translateX(-10%);
  padding-right: 15px;
  font-weight: 500;
}

/* the Icon */
.btn .shopping-cart {
  transform: translateX(-120%);
  position: absolute;
  background: #333;
  z-index: 1;
  left: 0;
  top: 0;
}

/* buy */
.btn .buy {
  z-index: 3;
  font-weight: bolder;
}

.btn:hover .price {
  transform: translateX(-110%);
}

.btn:hover .shopping-cart {
  transform: translateX(0%);
}

/* product image  */
.product-image {
  transition: all 0.3s ease-out;
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 47%;
  display: inline-block;
}

#container img {
  width: 100%;
  height: 100%;
}

.info {
  background: rgba(27, 26, 26, 0.9);
  /*font-family: "Farsan", cursive;*/
  transition: all 0.3s ease-out;
  transform: translateX(-130%);
  position: absolute;
  line-height: 1.9;
  text-align: left;
  font-size: 120%;
  cursor: no-drop;
  color: #fff;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.info h2 {
  text-align: center;
}
.product-image:hover .info {
  transform: translateX(0);
}

.info ul li {
  transition: 0.3s ease;
  font-size: 1.3rem;
  margin-top: 2rem;
}
.info ul li:hover {
  transform: translateX(50px) scale(1.3);
}

.product-image:hover img {
  transition: all 0.3s ease-out;
}
.product-image:hover img {
  transform: scale(1.1, 1.1);
}

.imagen{
    width: 15rem;

}
@media (max-width: 800.98px) {
.imagen{
    width: 12rem;
	margin-top: 3rem;
	margin-left: 1rem;


}
.titulo{
	font-size: 1.8rem;
}

.btn span {
    /*font-family: "Farsan", cursive;*/
    transition: transform 0.3s;
    display: inline-block;
    padding: 10px 20px;
    font-size: 0.6rem;
    margin: 0;
}
}

@media (max-width: 550px) {
.imagen{
    width: 8rem;
	margin-top: 3rem;



}
.titulo{
	font-size: 1.3rem;
}

.btn span {
    /*font-family: "Farsan", cursive;*/
    transition: transform 0.3s;
    display: inline-block;
    padding: 7px 10px;
    font-size: 0.6rem;
    margin: 0;
}
.information{
  font-size: 0.6rem;
  width: 8.5rem;
}

.info{
  transform: translateX(-200%);
}

#containerCard {
  height : 15rem;
  margin-left: 0;
}

.product-image{
  width: 40%;
}

.product-details {
  width: 60%;
}

.info ul li {
  font-size: 1rem;
  margin-top: 1.3rem;
}


}	


@media (max-width: 400px) {
  .imagen{
    width: 5rem;
	margin-top: 6rem;
	margin-left: 1rem;


}
.btn span {
    /*font-family: "Farsan", cursive;*/
    transition: transform 0.3s;
    display: inline-block;
    padding: 7px 10px;
    font-size: 0.6rem;
    margin: 0;
}
.info{
  background: rgba(255, 255, 255, 0.9);
  height: 0%;
  width: 0%;

  font-size: 1px;

}

.info ul li{
  font-size: 0rem;
}
}
</style>
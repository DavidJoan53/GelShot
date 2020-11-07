<template>
     <div class="slider-item"></div>
</template>

<script>
export default {

}
</script>

<style >

.slider-item {
  background-image: url('../static/gomasTres.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: calc(100vh);
  min-height: 700px;
  position: relative;
}


.slider-item .slider-text {
  color: #fff;
  height: calc(100vh);
  min-height: 700px;
}

.slider-item .slider-text .child-name {
  font-size: 40px;
  color: #fff;
}

.slider-item .slider-text h1 {
  font-size: 50px;
  color: #fff;
  line-height: 1.2;
  font-weight: 300 !important;
  text-transform: uppercase;
  margin-bottom: 30px;
  margin-left: 0.5em;
}

.slider-item .slider-text h1 span {
  color: white;
  background-color: #71774b;
  -webkit-box-shadow: 0.5em 0 0 #71774b, -0.5em 0 0 #71774b;
  box-shadow: 0.5em 0 0 #71774b, -0.5em 0 0 #71774b;
}

@media (max-width: 991.98px) {
  .slider-item .slider-text h1 {
    font-size: 40px;
  }
}

.slider-item .slider-text p {
  font-size: 20px;
  line-height: 1.5;
  font-weight: 300;
  color: white;
  margin: 0 auto;
}

.slider-item .slider-text p a {
  color: #71774b;
  text-decoration: underline;
}

.slider-item .slider-text p a:hover {
  color: #fff;
  text-decoration: underline;
}

.slider-item .slider-text p.sub-text {
  line-height: 2;
}

</style>
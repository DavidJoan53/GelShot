<template>
  <div class="container_prod">
    <form>
      <div class="form_img"></div>

      <div class="form_content">
        <div class="form_title">
          <input class="title_prod input_p" type="text" placeholder="Nombre" />
          <input class="form_check" type="checkbox"/>
        </div>
        <div class="form_inputs">
          <div class="div_input">
            <label for="">Precio</label>
            <input type="text" class="input_cont input_p" placeholder="$10.000" />
          </div>
          <div class="div_input">
            <label for="">Pack</label>
            <input type="text" class="input_cont input_p" placeholder="x6" />
          </div>
          <div class="div_input">
            <label for="">Sabor</label>
            <input type="text" class="input_cont input_p" placeholder="Púrpura" />
          </div>
        </div>
      </div>

      <div class="form_buttons">
        <button class="form_button">Eliminar</button>
        <button class="form_button">Guardar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container_prod {
  font-family: 'Quicksand';
  width: 29%;
  margin: 0 auto 3% auto;
  border: 1px #999 solid;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, .9);
  transition: 0.5s ease;
}

.container_prod:hover {
  transform: scale(1.1);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, .6);
}

/*IMAGEN DEL FORMULARIO*/

.form_img{
  width: 100%;
  height: 15vh;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-image: url("../static/placeholder5.jpg");
  background-size: cover;
}

.form_img img{
  width: 100%;
  height: 14vh;
}

.input_p {
  border-radius: 5px;
  vertical-align: bottom;
}

/*TÍTULO DEL FORMULARIO*/ 
.form_title {
  background-color: aliceblue;
  padding: 5px;
  width: 100%;
}

.title_prod{
  width: 85%;
  margin: 0 auto;
}

.form_check{
  width: 10%;
}

.title_prod{
  font-size: 160%;
  font-weight: 500;
  line-height: initial;
  vertical-align: middle;
}

/*RESTO DEL CONTENIDO*/
.form_inputs{
  padding: 5px;
  width: 100%;
}

.input_cont{
  width: 75%;
  margin: 5px auto;
}

.div_input label{
  width: 40%;
}

/*BOTONES DEL FORMULARIO*/
.form_buttons{
  background: rgb(255, 7, 110);
  width: 100%;
  padding: 10px 5px;
  display: flex;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.form_button{
  width: 35%;
  margin: auto;
  font-family: 'Quicksand';
  font-weight: 600;
  border: 1px solid black;
  border-radius: 5px;
  background-color: whitesmoke;
}

@media (max-width: 1024px) {
  .container_prod {
    width: 45%;
  }
}

@media (max-width: 600px) {
  .container_prod {
    width: 85%;
  }
}
</style>

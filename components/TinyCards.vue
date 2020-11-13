<template>
    <div class="tc-container">
        <img class="tc-img" src="../static/gomas.jpeg">
        <div class="tc-content">
            <h1 class="cont">GuataUva:</h1>
            <h1 class="cont3">Cantidad:</h1>
        </div>
        <div class="tc-content">
            <h1 class="cont2">$15.000</h1>
            <h1 class="cont3">x6</h1>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>>

<style>
.tc-container{
    width: 100%;
    margin-top: 10%;
    display: flex;
}
.tc-img{
    width: 30%;
    height: 80px;
}

.tc-content{
    width: 32%;
    margin-left: auto;
}

.cont{
    width: 100%;
    height: 30px;
    font-size: 18px;
    font-weight: 300;
}

.cont2{
    width: 100%;
    height: 30px;
    font-size: 16px;
    font-weight: 300;
    margin-left: auto;
    text-align: right;
}
.cont3{
    width: 20%;
    font-size: 16px;
    font-weight: 300;
}

.eliminar{
    color: whitesmoke;
    background-color: #C90A00;
    border-radius: 50%;
    width: 30%;
}
</style>
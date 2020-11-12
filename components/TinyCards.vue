<template>
    <div class="tc-container">
        <img class="tc-img" src="../static/gomas.jpeg">
        <div class="tc-content">
            <h1 class="cont">GuataUva:</h1>
            <h1 class="cont">Cantidad</h1>
        </div>
        <div class="tc-content">
            <h1 class="cont2">$15.000</h1>
            <h1 class="cont2">x6</h1>
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
    display: flex;
}
.tc-img{
    width: 30%;
    height: 80px;
}

.tc-content{
    width: 32%;
    margin-left: auto;
    background-color: cornflowerblue;
}

.cont{
    width: 100%;
    height: 30px;
    background-color: darkgreen;
    font-size: 18px;
}

.cont2{
    width: 100%;
    height: 30px;
    background-color: darkgreen;
    font-size: 18px;
    margin-left: auto;
}

</style>
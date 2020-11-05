<template>
		<div class="portfolio-item col-sm-6 col-md-4" >
			<div class="single-portfolio">
					<img src="../static/GelatinaNaranja.jpg" alt="">
							<div class="portfolio-links">
						        
						     <a ><i class="fa fa-link"></i></a>
					        </div>
				        </div>
		</div>
</template>

<script>
export default {

}
</script>

<style >

.portfolio-item {
 
    min-height: 150px;
    margin-bottom: -2.7rem;
    display:inline-block;
}

.single-portfolio {
    position: relative;
    overflow: hidden;
    height:75%;

    padding-bottom: 0;
}
.single-portfolio::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0,0,0,0.6);
}

.portfolio-links {
    width: 84px;
    height: 40px;
    position: absolute;
    top: -100%;
    left: 50%;
    margin-top: -20px;
    margin-left: -44px;
}
.single-portfolio:hover .portfolio-links{
    top: 50%;
}
.single-portfolio::before,
.portfolio-links {
    opacity: 0;
    filter: alpha(opacity=0);
    display:inline-block;
    -webkit-transition: all 300ms;
    -moz-transition: all 300ms;
    -o-transition: all 300ms;
    transition: all 300ms;
}
.single-portfolio:hover::before,
.single-portfolio:hover .portfolio-links{
    opacity: 1;
    filter: alpha(opacity=100);
}


.portfolio-links>a {
    width: 40px;
    height: 40px;
    line-height: 36px;
    display: inline-block;
    text-align: center;
    font-size: 18px;
    border: 2px solid rgba(255,255,255,.3);
    color: #fff;
    border-radius: 10px;
}
.portfolio-links>a:hover {
    background: rgba(255,255,255,.3);
    color: #fcbb3c;
    border: 2px solid transparent;
}


.portfolio-content img{
    margin-bottom: 30px;
}
.portfolio-info p {
    margin-bottom: 15px;
}
.portfolio-info .title,
.portfolio-info .block-title {
    font-size: 18px;
    line-height: 22px;
    font-weight: 500;
    color: #202020;
    display: block;
}

.portfolio-info .block-title {
    margin: 30px 0;
}

</style>
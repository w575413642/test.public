$(document).ready(function(){$(".lamp-box img").click(function(){$(".layer").fadeIn(),$(".layer .layer-model .model-img").attr("src",$(this).attr("src")),e.swipeTo($(this).index(),0,!1)}),$(".layer .layer-model .close").click(function(){$(".layer").fadeOut()});var e=new Swiper(".model-img",{slidesPerView:1,paginationClickable:!0});$(".click-swiper .left").on("click",function(i){i.preventDefault(),e.swipePrev()}),$(".click-swiper .right").on("click",function(i){i.preventDefault(),e.swipeNext()})});
$(document).ready(function(){$(".content").fadeTo(0,0);$(".content").delay(1000).fadeTo(1000,1);$("header #logo-content").hide();$("header img#logo-close").css({position:"absolute",left:"195px"});$location=window.location.hash;$("#nav-tabs li a").click(function(event){if(!($(this).hasClass("active"))){$("#nav-tabs li.active").removeClass("active");$(this).parent().addClass("active")}});$(".content-block").css({height:"480px"});$(".content-block:not(:first-child)").delay(1000).hide().fadeTo(0,1);$(".curly").not(".selected .curly").hide();$("#slider").PikaChoose({autoPlay:true,transition:[5,1,2,5,3,1,5,2,3],speed:5000});$(".pika-image").hover(function(){$(".pika-imgnav a").fadeIn(250)},function(){$(".pika-imgnav a").delay(250).fadeOut(250)});$("a[rel^='prettyPhoto']").prettyPhoto({theme:"light_square",default_width:540,default_height:540});$("#type-list li a").click(function(event){event.preventDefault();if($(this).hasClass("selected")==false){$(".selected").removeClass("selected");$(this).addClass("selected")}var ref=$(this).attr("href");$("li.content-block").not(ref).fadeOut(500);$(ref).delay(500).fadeIn(500)});$("#type-list li a").hover(function(){if($(this).hasClass("selected")==false){$(this).find(".curly").fadeTo(500,1);$(".selected .curly").fadeTo(500,0.4)}},function(){$(".curly").not(".selected .curly").fadeTo(250,0);$(".selected .curly").fadeTo(250,1)})});$(window).load(function(){$header=$("header #logo-content");$slider=$("header img#logo-close");var currentHeader=$header.html();var homeHeader="Web Design &amp; Photography";var oldWidth=0;var newWidth=0;var change=0;openSlider();$("header a").click(function(event){event.preventDefault();closeSlider();var url=$(this).attr("href");var go=function(){goToUrl(url)};setTimeout(go,1000)});$("a.nav").click(function(event){event.preventDefault();$href=$(this).attr("href");$currentLocation=window.location.href.split("/").pop();if($href!=$currentLocation){$content=$href.replace("#","");var url=$(this).attr("href");var go=function(){goToUrl(url)};closeSlider();setTimeout(go,1000)}});$("header").hover(function(){if($header.html()!=homeHeader){oldWidth=$header.width();$header.append("<span class='home'>- go home</span>");newWidth=$header.width();change=Math.abs(oldWidth-newWidth);$slider.animate({left:"+="+change+"px"},250)}},function(){if($header.html()!=homeHeader){$slider.animate({left:"-="+change+"px"},250);$(".home").remove()}});function changeHeader(string){$header.html(string)}function openSlider(){$slider.animate({left:"+="+$header.width()+"px"},750);$header.fadeIn(1000)}function closeSlider(){$slider.animate({left:"-="+$header.width()+"px"},1000);$header.fadeOut(750)}function goToUrl(url){window.location=url}$("ul.gallery").jcarousel({scroll:4,visible:6,animation:1000})});
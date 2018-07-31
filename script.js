$(document).ready(function(){
	var movementStrength = 25;
	var height = movementStrength / $(window).height();
	var width = movementStrength / $(window).width();

	$(".contenedor-img-fondo").mousemove(function(e){
		var pageX = e.pageX - ($(window).width() / 2);
		var pageY = e.pageY - ($(window).height() / 2);
		var newvalueX = width * pageX -2 - 25;
		var newvalueY = height * pageY -2 - 50;
		$(".contenedor-img-fondo").css("background-position", newvalueX+"px "+newvalueY+"px");
	});
});
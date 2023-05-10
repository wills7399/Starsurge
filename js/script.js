$(document).ready(function(){
	$(".button-1").click(function(){
		$(".screen-1").show(300)
		$("section").not(".screen-1").hide(300, "linear")
	})
	
	$(".button-2").click(function(){
		$("#screen-2").show(300)
		$("section").not("#screen-2").hide(300, "linear")
	})
	
	$(".button-3").click(function(){
		$("#screen-3").show(300)
		$("section").not("#screen-3").hide(300, "linear")
	})
})
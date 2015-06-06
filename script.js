$(document).ready(function() {
	$("button.one").click(function() {
		$("h1.one").addClass("onestyle");
	});
	$("button.two").click(function() {
		$("p.two").after("Hello World");
	});
	$("button.three").click(function() {
		$("p.three").append("Hello World");
	});
	$("button.four").click(function() {
		$("img.four").attr("width","100px");
	});



});
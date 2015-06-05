$(document).ready(function() {
	$("button.one").click(function() {
		$("h1.one").addClass("onestyle");
	});
	$("button.two").click(function() {
		$("p.two").after("Hello Kitty");
	});
	$("button.three").click(function() {
		$("p.three").append("Hello Kitty");
	});



});
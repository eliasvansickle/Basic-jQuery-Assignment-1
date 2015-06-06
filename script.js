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
	$("button.five").click(function() {
		$("h1.five").before("Hello World");
	});
	$("button.six").click(function() {
		$("p.six").html("<img src = http://fc05.deviantart.net/fs71/i/2013/151/f/7/fat_rabbit_by_footballlover-d678z21.png>");
	});
	$("button.seven").click(function() {
		$("p.seven").text("Hey you");
	});
	$("button.eight").click(function() {
		$("input:text").val("Yo Yo!");
	});
	$("button.nine").click(function() {
		$("p.nine").toggle();
	});
	$("button.ten").click(function() {
		$("button.ten").hide();
	});
	$("button.elevenh").click(function() {
		$("p.eleven").hide();
	});
	$("button.elevens").click(function() {
		$("p.eleven").show();
	});
	$("button.twelvedown").click(function() {
		$("p.twelve").slideDown();
	});
	$("button.twelveup").click(function() {
		$("p.twelve").slideUp();
	});
	$("button.thirteen").click(function() {
		$("p.thirteen").toggle();
	});
	$("button.fourteenIn").click(function() {
		$("p.fourteen").fadeIn();
	});
	$("button.fourteenOut").click(function() {
		$("p.fourteen").fadeOut();
	});

});
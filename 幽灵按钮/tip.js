$(document).ready(function() {
	$(".button").click(function() {
		var title = $(this).attr("data");
		//document.title = title;
		$(".tip em").text(title);
		var posa = $(this).position().left;
		var posb = ($(".tip").outerWidth() - $(this).outerWidth()) / 2;
		var pos = posa - posb + 25;
		$(".tip").css("left",pos + "px").animate({"top":165,"opacity":1},500);
	});
    $(".button").mouseleave(function() {
		$(".tip").animate({"top":140,"opacity":0},300);
	});
});


// JavaScript Document
$(document).ready(function(e) {
    $("#baidu").click(function(e) {
		$("#qzonei").hide();
		$("#youkui").hide();
		$("#taobaoi").hide();
        $("#baidui").slideDown("slow");
    });
	$("#qzone").click(function(e) {
		$("#baidui").hide();
		$("#youkui").hide();
		$("#taobaoi").hide();
		$("#qzonei").fadeIn("slow");
	});
	$("#youku").click(function(e) {
		$("#qzonei").hide();
		$("#baidui").hide();
		$("#taobaoi").hide();
        $("#youkui").slideDown("slow");
    });
	$("#taobao").click(function(e) {
		$("#qzonei").hide();
		$("#youkui").hide();
		$("#baidui").hide();
        $("#taobaoi").fadeIn("slow");
    });
});
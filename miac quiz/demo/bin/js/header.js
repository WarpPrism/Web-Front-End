$(document).ready(function() {
	var menuItems = $("#header-nav").find("a");
	console.log(menuItems[0].offsetWidth);
	var offs = [];
	offs[0] = 159;
	for (var i = 1; i < menuItems.size(); i++) {
		offs[i] = offs[i - 1] + menuItems[i].offsetWidth;
		console.log(offs[i]);
	}
	var tri = $("#header-pointer");
	$(menuItems[0]).mouseover(function(e) {
		tri.css({"left": offs[0], "opacity": "1"});
		moveAnimation();
	});
	$(menuItems[1]).mouseover(function(e) {
		tri.css({"left": offs[1], "opacity": "1"});
		moveAnimation();
	});
	$(menuItems[2]).mouseover(function(e) {
		tri.css({"left": offs[2], "opacity": "1"});
		moveAnimation();
	});
	$(menuItems[3]).mouseover(function(e) {
		tri.css({"left": offs[3], "opacity": "1"});
		moveAnimation();
	});
	$(menuItems[4]).mouseover(function(e) {
		tri.css({"left": offs[4], "opacity": "1"});
		moveAnimation();
	});
	$(menuItems[5]).mouseover(function(e) {
		tri.css({"left": offs[5], "opacity": "1"});
		moveAnimation();
	});

	function moveAnimation() {
		var tri = $("#header-pointer");
		setTimeout(function() {
			tri.css({
				"border-bottom": "3px solid #00A1EA",
				"border-left": "9.46px solid transparent",
				"border-right": "12px solid transparent"
			});
		}, 600);
		setTimeout(function() {
			tri.css({
				"border-bottom": "11px solid #00A1EA",
				"border-left": "9.46px solid transparent",
				"border-right": "9.46px solid transparent"
			});
		}, 1200);
	}
});

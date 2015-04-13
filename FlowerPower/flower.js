$(function() {
	$canvass = $("#canvas");
	canvas = $canvass[0];
	context = canvas.getContext("2d");
	context.globalCompositeOperation = "lighter";
	garden = new Garden(context, canvas);
	setInterval(function() {
		garden.render();
	}, Garden.options.growSpeed);
	startAnimation();
});

// The Curve of heart
function getCurveCoordinate(s) {
	var t = s / Math.PI;
	var x = 15 * (16 * Math.pow(Math.sin(t), 3));
	var y = -16 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
	return new Array(300 + x, 280 + y);
}

// y = x^3
/*function getCurveCoordinate(s) {
	var x = s;
	var y = -0.0001 * Math.pow(x, 3);
	return new Array(300 + x, 300 + y);
}*/

function startAnimation() {
	var s = -300;
	var b = new Array();
	var a = setInterval(function() {
		var h = getCurveCoordinate(s);
		var e = true;
		for (var f = 0; f < b.length; f++) {
			var g = b[f];
			var j = Math.sqrt(Math.pow(g[0] - h[0], 2) + Math.pow(g[1] - h[1], 2));
			if (j < Garden.options.bloomRadius.max * 1.3) {
				e = false;
				break
			}
		}
		if (e) {
			b.push(h);
			garden.createRandomBloom(h[0], h[1])
		}
		if (s >= 300) {
			clearInterval(a);
		} else {
			s += 0.2
		}
	}, 50)
}
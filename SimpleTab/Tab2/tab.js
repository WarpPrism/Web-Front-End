// JavaScript Document
window.onload = function() {
	var mul = document.getElementById("headul");
	var mli = mul.getElementsByTagName("li");
	var mcontent = document.getElementById("content");
	var mdiv = mcontent.getElementsByTagName("div");
	for (var i = 0; i < mli.length; i++) {
		mli[i].index = i;
		mli[i].onclick = function () {
			for (var j = 0; j < mli.length; j++) {
				mli[j].setAttribute("class", "");
			}
			this.setAttribute("class", "active");
			for (var k = 0; k < mdiv.length; k++) {
				mdiv[k].setAttribute("class", "hide");
			}
			mdiv[this.index].setAttribute("class", "show");
		}
	}
}
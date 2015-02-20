$(document).ready(function() {
    $(window).scroll(function() {
        var scrolltop = $(document).scrollTop();
		var menu = $("#menu");
		var items = $("#content").find(".item");
		var currentid = "";
		items.each(function() {
            var t = $(this);
			var itemtop = t.offset().top;
			if (scrolltop > itemtop - 300) {
				currentid = "#" + t.attr("id");
			} else {
				return false;
			}
        });
		var currentLink = menu.find(".current");
		if (currentid && currentLink.attr("href") != currentid) {
			currentLink.removeClass("current");
			menu.find("[href=" + currentid + "]").addClass("current");
		}
    });
});
//针对不同浏览器的通用事件处理程序 以及 事件对象
//珍爱生命，远离IE。希望斯巴达能早日取代IE
//代码来源于《JavaScript高级程序设计》

var eventUtil = {
	// 添加事件监听器or事件处理程序handler
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + type, handler);
		} else {
			element['on' + type] = handler;
		}
	},
	// 删除事件监听器or事件处理程序handler
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent('on' + type, handler);
		} else {
			element['on' + type] = null;
		}
	},
	//获取事件对象
	getEvent: function(event) {
		return event ? event : window.event;
	},
	//获取事件类型
	getType: function(event) {
		return event.type;
	},
	//获取事件目标
	getElement: function(event) {
		return event.target || event.srcElement;
	},
	//阻止事件的默认行为
	preventDefault: function(event) {
		if (event.preventDefault) {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	},
	//由于IE只支持事件冒泡，不支持事件捕获，所以通常此函数只能阻止事件冒泡。
	stopPropagation: function(event) {
		if (event.stopPropagation) {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
	}
}

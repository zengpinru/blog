function timeAuto() {
	var date = new Date();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	var hourdeg = (hour / 12) * 360 + (second / 216000) * 360 + (minute / 3600) * 360;
	var minutedeg = (minute / 60) * 360 + (second / 3600) * 360;
	var seconddeg = (second / 60) * 360;
	$(".shizhen").css("transform", "rotate(" + hourdeg + "deg)")
	$(".fenzhen").css("transform", "rotate(" + minutedeg + "deg)")
	$(".miaozhen").css("transform", "rotate(" + seconddeg + "deg)")
}
setInterval("timeAuto()", 1000);
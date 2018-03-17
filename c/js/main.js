var s = Snap('#love');

var bigCircle1 = s.circle(150, 150, 50);
var bigCircle2 = s.circle(150, 150, 50);
var bigCircle3 = s.circle(150, 150, 50);
var bigCircle4 = s.circle(150, 150, 50);
var bigCircle5 = s.circle(150, 150, 50);
var bigCircle6 = s.circle(150, 150, 50);

bigCircle1.drag();
bigCircle2.drag();
bigCircle4.drag();
bigCircle3.drag();
bigCircle5.drag();
bigCircle6.drag();

bigCircle1.node.onclick = function () {
	bigCircle1.attr("fill", "#171ef5");
	console.log(bigCircle1)
}



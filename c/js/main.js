var s = Snap('#love');

var bigCircle = s.circle(150, 150, 100);

bigCircle.attr({
	fill: "#fff"
});
bigCircle.drag();

paper.path(Snap.format("M{x},{y}h{dim.width}v{dim.height}h{dim['negative width']}z", {
    x: 10,
    y: 20,
    dim: {
        width: 40,
        height: 50,
        "negative width": -40
    }
}));
var H, W, canvas, context, n = 0, c = 4, theta = 137.5;

function start() {
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	H = canvas.height = document.body.clientHeight;
	W = canvas.width = document.body.clientWidth;
}

function draw() {
	var phi = Math.PI * (n * theta) / 180;
	var r = c * c * Math.sqrt(n);
	var x = r * Math.cos(phi) + W/2;
	var y = r * Math.sin(phi) + H/2;
	context.beginPath();
	context.arc(x, y, c, 0, 2*Math.PI);
	var hue = (360 - n) % 360;
	context.fillStyle = 'hsl(' +  hue + ', 100%, 50%)';
	context.fill();
	n++;
	if (r*r > W*W + H*H) clearInterval(drawInterval);
}

start();
var drawInterval = setInterval(draw, 10);
let ball;
let floor;

function setup() {
	new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;

	ball = new Sprite();
	ball.diameter = 50;
	ball.y = 30;

	floor = new Sprite();
	floor.y = 190;
	floor.x = 100;
	floor.w = 200;
	floor.h = 5;
	floor.collider = 'static';
}

function draw() {
	background(0);

	ball.draw();
	floor.draw();
}


let ball, floor;

function setup() {
	createCanvas(1960, 1080);
	world.gravity.y = 10;

	ball = new Sprite();
	ball.diameter = 50;
	ball.y = 30;
  ball.x = 100;

	floor = new Sprite();
	floor.y = 190;
	floor.w = 1960;
	floor.h = 5;
	floor.collider = 'static';
  floor.rotation = 2;
}

function draw() {
	clear();
}

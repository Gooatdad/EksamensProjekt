let ball, floor;

function setup() {
	createCanvas(400, 400);
	world.gravity.y = 10;

	ball = new Sprite();
	ball.diameter = 50;
	ball.y = 30;

	floor = new Sprite();
	floor.y = 190;
	floor.w = 400;
	floor.h = 5;
	floor.collider = 'static';
  //Test test
}

function draw() {
	clear();
}
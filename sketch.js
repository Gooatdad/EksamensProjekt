let player;
let floor;

function setup() {
	new Canvas(windowWidth, windowHeight);
	world.gravity.y = 10;

	player = new Sprite();
	player.y = 30;
	player.x = 100;
	player.w = 30;
	player.h = 50;


	floor = new Sprite();
	floor.y = 500;
	floor.x = 500;
	floor.w = 1000;
	floor.h = 5;
	floor.collider = 'static';
}

function draw() {
	background(0);

	player.draw();
	floor.draw();
}


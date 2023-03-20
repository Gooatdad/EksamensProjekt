let Player, floor; 

function setup() {
	createCanvas(980, 540);
	world.gravity.y = 10;

	floor = new Sprite();
	floor.y = 512;
	floor.x = 100;
	floor.width = floor.y;
	floor.height = 5;
	floor.collider = 'static';

	Player = new Sprite();
	Player.width = 50;
	Player.height = 50;
	Player.y = 256;
	Player.x = 100;
}

function draw() {
	if (keyCode === LEFT_ARROW) {
		Player.x -= 10;
	}
	if (keyCode === RIGHT_ARROW) {
		Player.x += 10;
	}

	clear();
}

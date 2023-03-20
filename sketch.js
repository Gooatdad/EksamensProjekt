let Player, floor; 
let PY = 256;
let PX = 100;

function setup() {
	createCanvas(980, 540);
	world.gravity.y = 10;

	floor = new Sprite();
	floor.y = 512;
	floor.x = 100;
	floor.w = floor.y;
	floor.h = 5;
	floor.collider = 'static';

	Player = new Sprite();
	Player.width = 50;
	Player.height = 50;
	Player.y = PY;
	Player.x = PX;

}


function draw() {
clear();
}

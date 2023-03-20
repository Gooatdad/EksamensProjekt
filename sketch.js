let = PlayerX = 30;
let = PlayerY = 30;	
let = TAcc = 0.5;
let = TAccM = 0.2;
let = RGBJ = (0, 255, 0);

function setup(){
createCanvas(innerWidth, innerHeight);


	
}

function draw(){
	background(100);

	fill(51);
	rect(0, 700, innerWidth, 200);
	
	rect(PlayerX, PlayerY, 50, 80);
	
	if (keyIsDown(LEFT_ARROW)){
		PlayerX -= 2;
	}
	if (keyIsDown(RIGHT_ARROW)){
		PlayerX += 2;
	}
	//Tyngekraft
	PlayerY += TAcc;
	TAcc += TAccM;

	if (PlayerY > 700){
		PlayerY == 700;
		TAcc == 0;
	}

}
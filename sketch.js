let playerX = 30;
let playerY = 30;
let tAcc = 0.5;
let tAccM = 0.1;
let dx = 4;
let platforms = [];

function setup() {
  createCanvas(innerWidth, innerHeight);
  generatePlatforms();
}

function draw() {
  background(100);

  // Draw ground
  fill(51);
  rect(0 , 700, canvas.width, 200);
	
  // Draw player
  fill(0, 255, 0);
  rect(playerX, playerY, 50, 80);
	
  if (keyIsDown(LEFT_ARROW)){
    playerX -= dx;
  }
  
  if (keyIsDown(RIGHT_ARROW)){
    playerX += dx;
  }

  if(keyIsDown(UP_ARROW)){
	tAcc = -5;
	}

  // Check for platform collisions
  for (let i = 0; i < platforms.length; i++) {
    if (playerX + 50 > platforms[i].x && playerX < platforms[i].x + platforms[i].width &&
        playerY + 80 > platforms[i].y && playerY < platforms[i].y + platforms[i].height) {
      // Player is colliding with a platform, stop falling
      playerY = platforms[i].y - 80;
      tAcc = 0;
      break;
    } else {
      // Player is not colliding with any platforms, keep falling
      tAcc += tAccM;
    }
  }
  
  // Apply gravity
  if (playerY + 80 > 700){
    playerY = 700 - 80;
    tAcc = 0;
  } else {
    playerY += tAcc;
  }
  
  // Draw platforms
  fill(255, 0, 0);
  for (let i = 0; i < platforms.length; i++) {
    rect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
  }
}

function generatePlatforms() {
  // Generate 10 random platforms
  let x = 0;
  while (platforms.length < 10) {
    const platform = {
      x: x,
      y: Math.floor(Math.random() * 250) + 200, // Ensure platforms are within 250px of each other on y-axis
      width: Math.floor(Math.random() * 200) + 50,
      height: 20
    };
    x += platform.width + 100; // Ensure platforms are at least 100px apart on x-axis
    platforms.push(platform);
  }
}

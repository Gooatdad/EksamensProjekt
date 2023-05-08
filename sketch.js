let playerX = 30;
let playerY = 30;
let tAcc = 0.5;
let tAccM = 0.1;
let dx = 4;
let platforms = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  generatePlatforms();
}

function draw() {
  background(100);

  // Draw ground
  fill(255, 0, 0);
  rect(0, windowHeight - 200, windowWidth, 200);

  // Draw player
  fill(150, 150, 0);
  rect(playerX, playerY, 50, 80);

  // Allow player to move left or right
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= dx;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += dx;
  }

  // Allow player to jump only when in contact with a platform
  let canJump = false;
  for (let i = 0; i < platforms.length; i++) {
    if (playerX + 50 > platforms[i].x && playerX < platforms[i].x + platforms[i].width &&
      playerY + 80 >= platforms[i].y && playerY + 80 <= platforms[i].y + tAcc) {
      canJump = true;
      break;
    }
  }
  if (canJump && keyIsDown(UP_ARROW)) {
    tAcc = -6;
  } else {
    tAcc += tAccM;
  }

  // Check for platform collisions
  let onPlatform = false;
  for (let i = 0; i < platforms.length; i++) {
    if (playerX + 50 > platforms[i].x && playerX < platforms[i].x + platforms[i].width &&
      playerY + 80 > platforms[i].y && playerY < platforms[i].y + platforms[i].height) {
      // Player is colliding with a platform, stop falling
      playerY = platforms[i].y - 80;
      tAcc = 0;
      onPlatform = true;
      break;
    }
  }

  // Apply gravity if not on a platform
  if (!onPlatform) {
    tAcc += tAccM;
  }

  // Prevent player from falling through the ground
  if (playerY + 80 > windowHeight - 200) {
    playerY = windowHeight - 200 - 80;
    tAcc = 0;
  } else {
    playerY += tAcc;
  }

  // Draw platforms
  fill(200);
  for (let i = 0; i < platforms.length; i++) {
    rect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
  }

  function regeneratePlatforms() {
    platforms = []; // Remove all existing platforms
    generatePlatforms(); // Generate new platforms
  }

  // Restart game if player touches the ground
if (playerY + 80 > windowHeight - 200) {
   playerY = 30;
   playerX = 30;
   tAcc = 0.5;
  }

  if (playerX >= windowWidth - 50) {
    regeneratePlatforms();
    playerX = 30; // Reset player position
    playerY = 30;
    tAcc = 0.5;
  }
}

function generatePlatforms() {
  // Generate 10 random platforms
  let x = 0;
  while (platforms.length < 10) {
    const platform = {
      x: x,
      y: Math.floor(Math.random() * 120) + 200, // Ensure platforms are within 120px of each other on y-axis
      width: Math.floor(Math.random() * 200) + 50,
      height: 20
    };
    x += platform.width + 200; // Ensure platforms are at least 200px apart on x-axis
    platforms.push(platform);
  }
}
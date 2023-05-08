// Koden starter med at deffinere de forskellige variabler,
// som vi skal bruge til at lave spillet.
let playerX = 30;
let playerY = 30;
let tAcc = 0.5;
let tAccM = 0.1;
let dx = 4;
let platforms = [];
let score = 0;

// Koden starter med at lave et canvas, som er det område, hvor 
// spillet foregår, og kalder for funktionen generatePlatforms.
function setup() {
  createCanvas(windowWidth, windowHeight);
  generatePlatforms();
}

// Draw-funktionen er den funktion, som "køre" 60 gange i 
// sekunder, og som størstedelen af koden står i.
function draw() {
  background(100);

//  Denne kode tegner en rød firkant i bunden af skærmen.
  fill(255, 0, 0);
  rect(0, windowHeight - 200, windowWidth, 200);

// Denne kode tegner spillerena som er en gul firkant.
  fill(150, 150, 0);
  rect(playerX, playerY, 50, 80);

// Disse to if-statements lader
// spilleren bevæge sig til højre og venstre.
  if (keyIsDown(LEFT_ARROW)) {
    playerX -= dx;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    playerX += dx;
  }

// Dette for-loop tjekker om spilleren er i luften, og hvis spilleren 
// ikke er i kontakt med en platform, kan spilleren ikke hoppe.
  let canJump = false;
  for (let i = 0; i < platforms.length; i++) {
    if (playerX + 50 > platforms[i].x && playerX < platforms[i].x + platforms[i].width &&
      playerY + 80 >= platforms[i].y && playerY + 80 <= platforms[i].y + tAcc) {
      canJump = true;
      break;
    }
  }

// Denne if sætning lader spilleren hoppe, 
// hvis spilleren er i kontakt med en platform.
  if (canJump && keyIsDown(UP_ARROW)) {
    tAcc = -6;
  } else {
    tAcc += tAccM;
  }

// Dette for-loop Check for platform collisions
  let onPlatform = false;
  for (let i = 0; i < platforms.length; i++) {
    if (playerX + 50 > platforms[i].x && playerX < platforms[i].x + platforms[i].width &&
      playerY + 80 > platforms[i].y && playerY < platforms[i].y + platforms[i].height) {
      playerY = platforms[i].y - 80;
      tAcc = 0;
      onPlatform = true;
      break;
    }
  }

// Simpel tyngekraft 
// igennem en if sætning
  if (!onPlatform) {
    tAcc += tAccM;
  }

// Denne sætning sørger for at spilleren
// ikke kan falde igennem Platformerne.
  if (playerY + 80 > windowHeight - 200) {
    playerY = windowHeight - 200 - 80;
    tAcc = 0;
  } else {
    playerY += tAcc;
  }

// Denne kode tegner de tidliger generet platformene.
  fill(200);
  for (let i = 0; i < platforms.length; i++) {
    rect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
  }

// Denne kode fjerne alle platformer, og 
// kalder på koden til at generere nye platforme.
  function regeneratePlatforms() {
    platforms = [];
    generatePlatforms();
  }

// Denne if sætning genstarter spillet og spillerens 
//point, hvis spilleren falder ned fra platfomernen.
if (playerY + 80 > windowHeight - 200) {
   playerY = 30;
   playerX = 30;
   tAcc = 0.5;
   score = 0;
  }

// Denne ifsætning genstarter spillerens potition, giver et 
// point og kalder på koden til at generere nye platforme.
  if (playerX >= windowWidth - 50) {
    regeneratePlatforms();
    playerX = 30;
    playerY = 30;
    tAcc = 0.5;
    score ++;
  }

// Simpel score board.
textSize(64);
text (score, 10, 64);
}

// Denne kode generere platformene.
function generatePlatforms() {
  let x = 0;
  while (platforms.length < 10) {
    const platform = {
      x: x,
      y: Math.floor(Math.random() * 120) + 200,
//Sikre at platformene er 120px fra hindanen på y-axsen.
      width: Math.floor(Math.random() * 200) + 50,
      height: 20
    };
    x += platform.width + 200;
// Sikre at platformene er 200 px fra hindane på x-aksen.
    platforms.push(platform);
  }
}
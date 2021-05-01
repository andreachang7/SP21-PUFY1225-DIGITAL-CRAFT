function setup() {
  createCanvas(600, 600, SVG);
  noStroke();
  frameRate(2);
}

function draw() {
  background("black");
  for (let i = 10; i < width; i += 20) {
  for (let y = 10; y < height; y += 20) {
    let r = random(0, 256);
    let g = random(0, 256);
    let b = random(0, 256);
    fill(r, g, b);
    ellipse(i, y, 15, 15);  
}
  }
  save("sketch.svg");
  print("saved svg");
  noLoop();
}
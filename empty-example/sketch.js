var canvas;

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  background(51);
  fill(255);

  fill(255, 255, 255);
  textSize(60)
  text('Recursion', window.innerWidth *.3 , 80);



  fill(250, 255, 255);
  textSize(15)
  text('We will be creating a recursive function to find factorials: ', window.innerWidth *.01 , 150);


}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};

function mouseDragged(){
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function mouseDragged(){
  rect(mouseX, mouseY, 50, 50);

  return false;
}

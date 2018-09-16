var canvas;
var numbers;
var instr="Please click on the first item of the list";
rightBoxNum=1;

class Grid{
  constructor (){
    this.grid=[];
    for (var i = 0; i < 12; i++){
      fill(255, 255, 255);
      // rectMode(CENTER); center the single digit numbers later!!
      var gridChecks = new Box(i, 75+i*75, 200, 75, 75);
      this.grid.push(gridChecks);
    }
  }

  rightBox(boxIndex){
    var test=this.grid[boxIndex];
    var left=  test.get_boxCoord()[0];
    var right= test.get_boxCoord()[0]+ test.get_boxDim()[0];
    var up= test.get_boxCoord()[1];
    var down= test.get_boxCoord()[1]+ test.get_boxDim()[1];

    if (mouseX >= left && mouseX <= right && mouseY>= up && mouseY <= down){
      return true;
    }

    return false;

  }
}

class Box{
  constructor(index, x, y, width, height){
    this.index=index;
    this.x= x;
    this.y=y;
    this.width= width;
    this.height=height;
    fill(255, 255, 255);
    rect(x,y,width, height);
  }

  get_boxNum(){
    return this.index;
  }

  get_boxDim(){
    return [this.width, this.height];
  }
  get_boxCoord(){
    return [this.x,this.y];
  }

}

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  numbers=createNums();
}

function draw() {
  background(50);
  fill(255);

  fill(255, 255, 255);
  textSize(60);
  text('Insertion Sort', window.innerWidth *.3 , 80);

  fill(255, 255, 255);
  textSize(15);
  text(instr, window.innerWidth *.01 , 150);

  grid= new Grid();


  for (var i = 0; i < 12; i=i+1){
    //fill(255, 255, 255);
    // rectMode(CENTER); center the single digit numbers later!!
    //rect(75+i*75, 200, 75, 75);
    fill(0, 0, 0);
    textSize(60);
    text(numbers[i], 77.5+ 75*i , 255);
  }



}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}

function createNums(){
  var nums= [];
  for (var i=0; i<12; i=i+1){
    nums.push(int(random()*100));
  }
  return nums;
}

function mouseClicked(){
  //for (let i = 1; i < numbers.length; i++) {
    var i=0;
    if (grid.rightBox(i)){
      instr="Good. Now we look at the next element"
    }
    else{
      instr="Nope that's not correct. Try again!"
    }
  //}

  // else if ()
}

var input, button;
var canvas;
var numbers;
var instr="Please click on the first item of the list";
var wrong="Nope that's not correct. Try again!"
var first= true;
var yorno=2;

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

  yes_button = createButton('YES');
  yes_button.position(window.innerWidth *.5,135);
  yes_button.mousePressed(()=>{yorno=1});

  no_button= createButton('NO');
  no_button.position(window.innerWidth *.6, 135);
  no_button.mousePressed(()=>{yorno=0});


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

  for (var i =1; i< numbers.length; i++){
    var temp= numbers[i];
    var j;
    var condition= temp < numbers[j];
    for (j=i-1; j>=0; j--){
      if (yorno==1 && condition){
        instr= "That's correct! This means we should swap the two values."
        numbers[j+1]= numbers[j];
      }
      else if(yorno==0 && !condition || yorno==1 && condition){
        instr= "That's correct! This means the values stay the same."
      }
      else if(yorno==1 && !condition){
        instr=wrong;
      }

    }
    numbers[j+1]=temp;
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
  if (first){
    if (grid.rightBox(0)){
      instr="Good. Now we look at the next number. Is "+numbers[0]+" > "+numbers[1];
    }
    else{
      instr= wrong;
    }
    first= false;
  }
  //}

  // else if ()
}

var canvas;
var numbers;
var color=255;
var i=0;
var small;
var temp;
var first_done;

class Grid{
  constructor (iandj=[0,1]){
    this.grid=[];
    this.curBoxIndex= iandj[0];
    this.smallestIndex= iandj[1];
    for (var i = 0; i < 12; i++){
      fill(255, 255, 255);
      // rectMode(CENTER); center the single digit numbers later!!
      if(i==this.curBoxIndex){
        var gridChecks = new Box(i, 200, 75+i*75, 200, 75, 75);
      }
      else if(i==this.smallestIndex){
        var gridChecks = new Box(i, 200, 75+i*75, 200, 75, 75);
      }
      else{
        var gridChecks = new Box(i, 0, 75+i*75, 200, 75, 75);
      }
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

  change_curBox(curBox_index){
    this.curBox= this.grid[curBox_index];
  }

  change_checkBox(checkBox_index){
    this.checkBox= this.grid[checkBox_index];
  }
}

class Box{
  constructor(index, color, x, y, width, height){
    this.index=index;
    this.x= x;
    this.y=y;
    this.width= width;
    this.height=height;
    this.color=color;

    fill(255);
    stroke(color);
    strokeWeight(4);
    rect(x,y,width, height);
    stroke(255);
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

  //yes_button = createButton('Next');
  //yes_button.position(window.innerWidth *.5,135);
  //yes_button.mousePressed(()=>{stop=false});


}

function draw() {
  background(255);
  fill(255);

  fill(0);

  textSize(60);
  text('Selection Sort', window.innerWidth *.3 , 80);

  fill(0);
  textSize(15);
  text("Click to see the next step in the selection sort", window.innerWidth *.01 , 150);

  fill(0);
  textSize(15);
  text("The gray boxes highlight the current index and the smallest value which are switched at each step of selection sort. ", window.innerWidth *.01 , 350);

  grid= new Grid();

  for (var n = 0; n < 12; n=n+1){
    fill(0, 0, 0);
    textSize(60);
    text(numbers[n], 77.5+ 75*n , 255);
  }

  steps= firststep();
  grid= new Grid(steps);

  for (var n = 0; n < 12; n=n+1){
    fill(0, 0, 0);
    textSize(60);
    text(numbers[n], 77.5+ 75*n , 255);
  }

}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
}

function firststep(){
  if (i<numbers.length-1){
    small=i;
    //display the current box on i
    for(j=i+1; j<numbers.length; j++){
      if(numbers[j]< numbers[small]){
        small=j;
        //display the smallest box on small
      }
    }
    }
  first_done=true;
  return [i,small]
}

function swap_values(){
    temp=numbers[small];
    numbers[small]=numbers[i];
    numbers[i]= temp;
    first_done=false;
}

function createNums(){
  var nums= [];
  for (var i=0; i<12; i=i+1){
    nums.push(int(random()*100));
  }
  return nums;
}

// function actualSelectionSort(actualList){
//   var index;
//   var smallestIndex;
//   var minIndex;
//   var temp;
//
//   for(index=0; index< actualList.length; index++){
//     smallestIndex=index;
//     for(minIndex= index+1; minIndex< actualList.length; minIndex++){
//       if (actualList[minIndex] < actualList[smallestIndex]){
//         smallestIndex= minIndex;
//       }
//     }
//     temp=actualList[smallestIndex];
//     actualList[smallestIndex]=actualList[index];
//     actualList[index]= temp;
//   }
// }

// function ifSameList(l1,l2){
//   for(var i=0; i< l1.length; i++){
//     if (l1[i]!=l2[i]){
//       return false;
//     }
//   }
//   return true;
// }


function mouseClicked(){

  // numbers=createNums();
  // correct= actualSelectionSort(numbers);
  // if(ifSameList(numbers,correct)==true){
  //   fill(255, 0, 0);
  //   textSize(30);
  //   text("The sort is done!", window.innerWidth *.01 , 450);
  // }
  if (first_done==true){
    swap_values();
    i++;
  }


}

//Declaration
var resolution = c.width/30; //viewable spcaes on screen
var blockSize = c.width/resolution;
ctx.font = "100 "+blockSize+ "px Courier New"; //font | Lucida Console | Courier New
var emptyChar = ""; //character to define open space
var onScreen = []; //list of objects on screen

//creates screenMap
var screenMap = [];

//populates screenMap depending on resolution size
for (var x = 0; x < resolution; x++) {
  screenMap.push(new Array());
  for (var y = 0; y < resolution; y++) {
    screenMap[x][y] = new pixel(emptyChar, x*blockSize+(1/resolution*100), y*blockSize+blockSize-(1/resolution*100));
  }
}

function pixel(char, x, y) {
  this.x = x;
  this.y = y;
  this.char = char;
}

function update(){
  ctx.beginPath();
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,c.width,c.height);
  ctx.beginPath();
  ctx.fillStyle = 'white';

  physics();

  onScreen = [];
  for (var i = 0; i < objects.length; i++) {
    if (objects[i].x<screenMap.length && objects[i].x>=0 && objects[i].y<screenMap[0].length && objects[i].y>=0) {
          screenMap[objects[i].x][objects[i].y].char = objects[i].char; //change corresponding char on screen
          onScreen.push(i);
    } else {
      onScreen.splice(onScreen.indexOf(i),1);
    }
  }

  for (var x = 0; x < screenMap.length; x++) {
    for (var y = 0; y < screenMap[0].length; y++) {
      //draw everything
      ctx.fillText(screenMap[x][y].char, screenMap[x][y].x, screenMap[x][y].y);

      //reset all background chars
      screenMap[x][y].char =  emptyChar;
    }
  }
}

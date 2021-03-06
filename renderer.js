//Declaration
c.width = 1920;
c.height =1080;
var resolution = 70; //viewable spcaes on screen
var yresolution = resolution*9/16;
var blockSize = c.width/resolution;
var emptyChar = ""; //character to define open space
var emptyColor = '#060606';//color to define open space
var scrollThreshold = 15; //threshold for screen to start scrolling;
var onScreen = []; //list of objects on screen

//creates screenMap
var screenMap = [];

//populates screenMap depending on resolution size
for (var x = 0; x < resolution; x++) {
  screenMap.push(new Array());
  for (var y = 0; y < yresolution; y++) {
    screenMap[x][y] = new pixel(emptyChar, x*blockSize+(1/resolution*100), y*blockSize+blockSize-(1/resolution*100),emptyColor);
  }
}

var screen = {
  x: objects[0].x-screenMap.length/2,
  y: objects[0].y-screenMap[0].length/2,
}

function pixel(char, x, y, color) {
  this.x = x;
  this.y = y;
  this.char = char;
  this.color = color;
}

function render() {
  //scrolls with player
  if (objects[0].x-screen.x<scrollThreshold) {
    screen.x = objects[0].x-scrollThreshold;
  }
  if ((screen.x+screenMap.length)-objects[0].x<scrollThreshold+1) {
    screen.x = objects[0].x+scrollThreshold+1-screenMap.length;
  }
  if (objects[0].y-screen.y<scrollThreshold) {
    screen.y = objects[0].y-scrollThreshold;
  }
  if ((screen.y+screenMap[0].length)-objects[0].y<scrollThreshold+1) {
    screen.y = objects[0].y+scrollThreshold+1-screenMap[0].length;
  }
  //screen.x = objects[0].x-screenMap.length/2; //NOTE for locked character
  //screen.y = objects[0].y-screenMap[0].length/2;

  onScreen = [];
  for (var i = objects.length-1; i >= 0 ; i--) {
    if (objects[i].x<screenMap.length+screen.x && objects[i].x>=0+screen.x && objects[i].y<screenMap[0].length+screen.y && objects[i].y>=0+screen.y) {
          screenMap[objects[i].x-screen.x][objects[i].y-screen.y].color = objects[i].color;
          screenMap[objects[i].x-screen.x][objects[i].y-screen.y].char = objects[i].char; //change corresponding char on screen
          onScreen.push(i);
    } else {
      onScreen.splice(onScreen.indexOf(i),1);
    }
  }

  //add mouse in
  try {
    screenMap[Math.floor(mouse.xcoord-screen.x)][Math.floor(mouse.ycoord-screen.y)].char = mouse.char;
    screenMap[Math.floor(mouse.xcoord-screen.x)][Math.floor(mouse.ycoord-screen.y)].color = mouse.color;
  } catch (e) {}


  for (var x = 0; x < screenMap.length; x++) {
    for (var y = 0; y < screenMap[0].length; y++) {
      //draw everything
      ctx.fillStyle = screenMap[x][y].color;
      ctx.fillText(screenMap[x][y].char, screenMap[x][y].x, screenMap[x][y].y);

      //reset all background chars
      screenMap[x][y].color = emptyColor;
      screenMap[x][y].char =  emptyChar;
    }
  }

}

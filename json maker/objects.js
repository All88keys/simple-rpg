function player(x,y){
  this.type = "player";
  this.x = x;//Math.floor(screenMap.length/2);
  this.y = y;//Math.floor(screenMap[0].length/2);
  this.expectedX = x;
  this.expectedY = y;
  this.char = "☻";
  this.color = 'lime';
}

function wall(x,y){
  this.type = "wall";
  this.x = x;
  this.y = y;
  this.char = '#';
  this.color = 'white';
}

function decoration(x,y,char){
  this.type = 'decoration';
  this.x = x;
  this.y = y;
  this.char = char;
  this.color = 'gray';
}

//var objects = [];

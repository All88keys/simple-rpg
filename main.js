

//creates map
var map = [];

//populates map depending on resolution size
for (var x = 0; x < resolution; x++) {
  map.push(new Array());
  for (var y = 0; y < resolution; y++) {
    map[x][y] = new pixel(emptyChar, x*blockSize+(1/resolution*100), y*blockSize+blockSize-(1/resolution*100));
  }
}


function pixel(char, x, y) {
  this.x = x;
  this.y = y;
  this.char = char;
}

function player(){
  this.x = Math.floor(map.length/2);
  this.y = Math.floor(map[0].length/2);
  this.char = "0";
}

function wall(x,y){
  this.x = x;
  this.y = y;
  this.char = '#';
}

var objects = [];
objects.push(new player());
objects.push(new wall(5,5));

update();

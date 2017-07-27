var c = document.getElementById('canvas');
var ctx = c.getContext('2d');


document.addEventListener('keydown',function (e) {
  switch (e.keyCode) {
    case 37: //left
      player.x--;
      break;
    case 39: //right
      player.x++;
      break;
    case 38: //up
      player.y--;
      break;
    case 40: //down
      player.y++;
      break;
    default:
      break;
  }
  update();
},false);


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
  this.update = function () {
    ctx.fillText(this.char,this.x,this.y);
  }
}

var player = {
  x : Math.floor(map.length/2),
  y : Math.floor(map[0].length/2),
  char : "0",
}

update();

var resolution = 25;
var blockSize = c.width/resolution;

ctx.font = blockSize+ "px sans-serif";

var emptyChar = "/";

function update(){
  ctx.clearRect(0,0,c.width,c.height);
  for (var x = 0; x < map.length; x++) {
    for (var y = 0; y < map[0].length; y++) {
      if (player.x == x && player.y == y) {
        map[x][y].char = player.char;
      } else {
        map[x][y].char = emptyChar;
      }
      map[x][y].update();
    }
  }
}

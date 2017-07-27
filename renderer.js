var resolution = 25;
var blockSize = c.width/resolution;

ctx.font = blockSize+ "px sans-serif";

var emptyChar = "/";

function update(){
  ctx.clearRect(0,0,c.width,c.height);

  for (var i = 0; i < objects.length; i++) {
    map[objects[i].x][objects[i].y].char = objects[i].char;
  }

  for (var x = 0; x < map.length; x++) {
    for (var y = 0; y < map[0].length; y++) {
      //draw everything
      ctx.fillText(map[x][y].char, map[x][y].x, map[x][y].y);

      //reset all background chars
      map[x][y].char =  emptyChar;
    }
  }
}

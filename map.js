var map1 = 'data:image/png;base64,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';

var mapsrc = new Image();
mapsrc.src = map1;


function mapToArray(){
  c.width = mapsrc.width;
  c.height = mapsrc.height;
  ctx.drawImage(mapsrc,0,0);
  var imgData = ctx.getImageData(0, 0, mapsrc.width, mapsrc.height);
  var scale = 25;

  var map =[];

  for (var y = 0; y < mapsrc.height; y++) {
    map.push([]);
    for (var x = 0; x < mapsrc.width; x++) {
      map[y].push(toHex(imgData.data[(y * mapsrc.width + x) * 4 + 0])+
                  toHex(imgData.data[(y * mapsrc.width + x) * 4 + 1])+
                  toHex(imgData.data[(y * mapsrc.width + x) * 4 + 2]));
    }
  }
  for(var y = 0; y<map.length; y++){
  	for(var x = 0; x<map[y].length; x++){
      switch (map[y][x]) {
        case '00ff00': //player
          objects.unshift(new player(x,y));
          break;
        case '000000': //wall
          objects.push(new wall(x,y));
          break;
        case '888888': //decoration
          objects.push(new decoration(x,y,'`'));
          break;
        default:break;
      }
    }
  }
}

function toHex(n){
  if(n.toString(16).length<2)
    return '0'+ n.toString(16);
  return n.toString(16);
}

mapToArray();

document.addEventListener('keydown',function (e) {
  switch (e.keyCode) {
    case 37: //left
      //objects[0].x--;
      objects[0].expectedX = objects[0].x-1;
      console.log('left');
      break;
    case 39: //right
      //objects[0].x++;
      objects[0].expectedX = objects[0].x+1;
      console.log('right');
      break;
    case 38: //up
      objects[0].expectedY = objects[0].y-1;
      console.log('up');
      break;
    case 40: //down
      objects[0].expectedY = objects[0].y+1;
      console.log('down');
      break;
    default:
      break;
  }
  update();
},false);

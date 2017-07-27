document.addEventListener('keydown',function (e) {
  switch (e.keyCode) {
    case 37: //left
      objects[0].x--;
      console.log('left');
      break;
    case 39: //right
      objects[0].x++;
      console.log('right');
      break;
    case 38: //up
      objects[0].y--;
      console.log('up');
      break;
    case 40: //down
      objects[0].y++;
      console.log('down');
      break;
    default:
      break;
  }
  update();
},false);

function physics() {
  for (var i = 0; i < onScreen.length; i++) {
    if (objects[onScreen[i]].type == 'wall' && objects[0].expectedX == objects[onScreen[i]].x && objects[0].expectedY == objects[onScreen[i]].y) {
      objects[0].expectedX = objects[0].x;
      objects[0].expectedY = objects[0].y;
    }
  }

  objects[0].x = objects[0].expectedX;
  objects[0].y = objects[0].expectedY;
}

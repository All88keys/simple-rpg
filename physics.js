var placeNoise = new Audio("wall.wav");

function physics() {
  /*for (var i = 0; i < onScreen.length; i++) {
    switch (objects[onScreen[i]].type) {
      case 'wall':
      if (objects[0].expectedX == objects[onScreen[i]].x && objects[0].expectedY == objects[onScreen[i]].y) {
        objects[0].expectedX = objects[0].x;
        objects[0].expectedY = objects[0].y;
      }
        break;
      default:break;
    }
  }*/ // NOTE: this^^ is for onscreen objects. that\/ is for every object.

  //run this if the mouse is clicked

    var free = true;
    mouse.color = "red";
    for (var i = 0; i < objects.length; i++) {
      if (objects[i].x == mouse.xcoord && objects[i].y == mouse.ycoord && objects[i].type != 'decoration') {
        free = false;
      }
    }
    if (free && objects[0].inventory.wall>0) {
      mouse.color = "lime";
      if(mouse.clicked){
        objects.splice(1, 0, new wall(mouse.xcoord, mouse.ycoord));
        placeNoise.play();
        objects[0].inventory.wall--;
      }
    }




  //run this if the player moves
  if (objects[0].x != objects[0].expectedX || objects[0].y != objects[0].expectedY) {
    for (var i = 1; i < objects.length; i++) {
      switch (objects[i].type) {
        case 'wall':
        var xcol = (objects[0].expectedX == objects[i].x);
        var ycol =(objects[0].expectedY == objects[i].y);
        if (xcol && objects[0].y == objects[i].y) {
          objects[0].expectedX = objects[0].x;
        }
        if (ycol && objects[0].x == objects[i].x) {
          objects[0].expectedY = objects[0].y;
        }
        //if (xcol && ycol) {
        //    objects[0].expectedX = objects[0].x;
        //    objects[0].expectedY = objects[0].y;
        //}
          break;
        default:break;
      }
    }
  }

  //apply player physics
  objects[0].x = objects[0].expectedX;
  objects[0].y = objects[0].expectedY;
}

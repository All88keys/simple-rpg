function ui(){
  ctx.beginPath();
  ctx.fillStyle = "black";
  ctx.strokeStyle = 'white';

  var width = 350;
  var height = 150;
  var margin_bottom = 50;
  var margin_right = margin_bottom;

  ctx.fillRect(c.width-width-margin_right,c.height-height-margin_bottom,width,height);
  ctx.strokeRect(c.width-width-margin_right,c.height-height-margin_bottom,width,height);
}

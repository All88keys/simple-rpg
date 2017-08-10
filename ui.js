function uibox(width,height,bmar, rmar){
  this.width = width;
  this.height = height;
  this.margin_bottom = bmar;
  this.margin_right = rmar;
  this.show = true;
  this.update= function(){
    if (this.show) {
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.strokeStyle = 'white';
      ctx.fillRect(c.width-this.width-this.margin_right,c.height-this.height-this.margin_bottom,this.width,this.height);
      ctx.strokeRect(c.width-this.width-this.margin_right,c.height-this.height-this.margin_bottom,this.width,this.height);
      ctx.beginPath();
      ctx.fillStyle = "white";
      ctx.fillText("Walls: "+objects[0].inventory.wall,c.width-this.width-this.margin_right+ 20,c.height-this.height-this.margin_bottom+ 40);
    }
  }
}

var menu = new uibox(350,150,50,50);




function ui(){

  menu.update();
}

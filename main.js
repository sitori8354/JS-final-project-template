var canvas=document.getElementByld("game-canvas");
var ctx=canvas.getContext("2d");
var FPS=60;

var bglmg=document.createElement("img");
bglmg.src="images/map.png";




function draw(){
  ctx.drawImage(bglmg,0,0);
}
setinterval(draw,16);
  

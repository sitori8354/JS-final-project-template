
var bglmg=document.createElement("img");
bglmg.src="images/map.pmg";
var canvas=document.getElementByld("game-canvas");
var ctx=canvas.getContext("2d");


function draw(){
  ctx.drawImage(bglmg,0,0);
}
setTimeout(draw,1000);
  

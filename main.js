var canvas=document.getElementById("game-canvas");
var ctx=canvas.getContext("2d");
var FPS=60;

var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var enemyImg=document.createElement("img");
enemyImg.src="images/slime.gif";
var person1=document.createElement("img");
person1.src="images/daigh.gif";


function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(enemyImg,0,0);
  ctx.drawImage(person1,100,100);
}
setInterval(draw,16);
  

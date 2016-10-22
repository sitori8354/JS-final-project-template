var canvas=document.getElementById("game-canvas");
var ctx=canvas.getContext("2d");
var FPS=60;

///畫上基本圖像
var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var enemyImg=document.createElement("img");
enemyImg.src="images/slime.gif";
var person1=document.createElement("img");
person1.src="images/daigh.gif";
var person2=document.createElement("img");
person2.src="images/jason.gif";
var tower=document.createElement("img");
tower.src="images/tower.png";
var towerbtn=document.createElement("img");
towerbtn.src="images/tower-btn.png";
var shoot=document.createElement("img");
shoot.src="images/cannon-ball.png";
var crosshair=document.createElement("img");
crosshair.src="images/crosshair.png";
var person3=document.createElement("img");
person3.src="images/rukia.gif";

///設定圖像位置
var enemy={
  x:96,
  y:480-32
};
var bin={
  x:540,
  y:380
};


function draw(){
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(enemyImg,enemy.x,enemy.y);
  ctx.drawImage(person1,100,100);
  ctx.drawImage(person2,100,440);
  ctx.drawImage(tower,cursor.x,cursor.y);
  ctx.drawImage(towerbtn,bin.x,bin.y,100,100);
  ctx.drawImage(shoot,300,200);
  ctx.drawImage(crosshair,200,200);
  ctx.drawImage(person3,100,200);
}
setInterval(draw,10);
  


///tower-bin設定
var cursor={x:0,y:0};

$("#game-canvas").on("mousemove",function(event){
  cursor={x:event.offsetX,y:event.offsetY};
});

var isBuild=false;
var towerimg={};
var cursor={};
$("#game-canvas").on("click",function(){
  if (iscoll(cursor.x,cursor.y,bin.x,bin.y,100,100)){
    if(isBuild){
      isBuild=false;
  }else{
    isBuild=true;
  })
     
cursor.click();
function iscoll(pointX,pointY,targetX,targetY,targetWidth,targetHeight){
  if( pointX>=targetX
    && pointX<=targetX+targetWidth
    && pointY>=targetY
    && pointY<=targetY+targetHeight){
    return true;}else{
      return false;}
}

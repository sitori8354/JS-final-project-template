//基本設定
var canvas=document.getElementById("game-canvas");
var ctx=canvas.getContext("2d");
var FPS=60;
   
///畫上基本圖像
var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var slimeImg=document.createElement("img");
slimeImg.src="images/slime.gif";
var person1=document.createElement("img");
person1.src="images/daigh.gif";
//var person2=document.createElement("img");
//person2.src="images/jason.gif";
var tower=document.createElement("img");
tower.src="images/tower.png";
var towerbtn=document.createElement("img");
towerbtn.src="images/tower-btn.png";
//var shoot=document.createElement("img");
//shoot.src="images/cannon-ball.png";
//var crosshair=document.createElement("img");
//crosshair.src="images/crosshair.png";
//var person3=document.createElement("img");
//person3.src="images/rukia.gif";

///設定圖像位置
var bin={
  x:540,
  y:380
};

//畫上物件
function draw(){
  enemy.move(); 
  ctx.drawImage(bglmg,0,0);
  ctx.drawImage(slimeImg,enemy.x,enemy.y);
  ctx.drawImage(person1,100,100);
  //ctx.drawImage(person2,100,440);
  ctx.drawImage(towerbtn,bin.x,bin.y,100,100);
  //ctx.drawImage(shoot,300,200);
  //ctx.drawImage(crosshair,200,200);
  //ctx.drawImage(person3,100,200);
  if(isBuild){
  ctx.drawImage(tower,cursor.x,cursor.y);
  //ctx.drawImage(tower,towerimg.x,towerimg.y);
  }
  ctx.drawImage(tower,(towerShow.x)-(towerShow.x%32),(towerShow.y)-(towerShow.y%32));
}
setInterval(draw,1000/FPS);
  


///tower-bin設定
var cursor={x:0,y:0};

$("#game-canvas").on("mousemove",function(event){
  cursor={x:event.offsetX,y:event.offsetY};
});

///出現塔
var isBuild=false;
var towerimg={};
var cursor={};
var towerShow={};
$("#game-canvas").on("click",function(){
  if (iscoll(cursor.x,cursor.y,bin.x,bin.y,100,100)){
    if(isBuild){isBuild=false;}else{isBuild=true;}}//else{isBuild=false;}{
  else  if(isBuild){towerShow.x=cursor.x; towerShow.y=cursor.y; isBuild=false;}
  });
     
function iscoll(pointX,pointY,targetX,targetY,targetWidth,targetHeight){
  if( pointX>=targetX
    && pointX<=targetX+targetWidth
    && pointY>=targetY
    && pointY<=targetY+targetHeight){
    return true;}else{
      return false;}
}
//設定敵人
var enemy={
  x:96,
  y:480-32,
  speedx:0,
  speedy:64,
  pathDes:0, 
  speed:64, 
  move:function(){  
   this.x=this.x+this.speedx/FPS;
   this.y=this.y-this.speedy/FPS;
   if(iscoll(enemyPath[this.pathDes].x,enemyPath[this.pathDes].y,this.x,this.y,this.speed/FPS,this.speed/FPS)){
      //設定下個路徑點     
this.x=enemyPath[this.pathDes].x;
this.y=enemyPath[this.pathDes].y;     
this.pathDes++;
if(this.x>enemyPath[this.pathDes].x){
   speedx=-64;
   speedy=0;
}else if(this.x<enemyPath[this.pathDes].x){
   speedx=64;
   speedy=0;
};
if(this.y>enemyPath[this.pathDes].y){
   speedx=0;
   speedy=64;
}else if(this.y<enemyPath[this.pathDes].y){
   speedx=0;
   speedy=-64;
};};}};  
 
 ///製造路徑點
 
var enemyPath=[{x:96,y:64},{x:384,y:64},{x:384,y:190},{x:224,y:190},{x:224,y:320},{x:544,y:320},{x:544,y:96}];
 
 

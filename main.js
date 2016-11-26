//基本設定
var canvas=document.getElementById("game-canvas");
var ctx=canvas.getContext("2d");
var FPS=60;
var enemies=[];
var clock=0;
   
///畫上基本圖像
var bglmg=document.createElement("img");
bglmg.src="images/map.png";
var slimeImg=document.createElement("img");
slimeImg.src="images/daigh.gif";
//var person1=document.createElement("img");
//person1.src="images/daigh.gif";
//var person2=document.createElement("img");
//person2.src="images/jason.gif";
var tower=document.createElement("img");
tower.src="images/tower.png";
var towerbtn=document.createElement("img");
towerbtn.src="images/tower-btn.png";
//var shoot=document.createElement("img");
//shoot.src="images/cannon-ball.png";
var crosshair=document.createElement("img");
crosshair.src="images/crosshair.png";
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
  //ctx.drawImage(person1,100,100);
  //ctx.drawImage(person2,100,440);
  ctx.drawImage(towerbtn,bin.x,bin.y,100,100);
  //ctx.drawImage(shoot,300,200);
  tower.searchEnemy();
   if(tower.aimingEnemyId!=null){
      var id=tower.aimingEnemyId;
      ctx.drawImage(crosshair,enemies[id].x,enemies[id].y);
   }
  //ctx.drawImage(person3,100,200);
  if(isBuild){
  ctx.drawImage(tower,cursor.x,cursor.y);
  //ctx.drawImage(tower,towerimg.x,towerimg.y);
  }
  ctx.drawImage(tower,(towerShow.x)-(towerShow.x%32),(towerShow.y)-(towerShow.y%32));
//敵人工廠
   if(clock%80==0){  
   var newEnemy=new Enemy();
  enemies.push(newEnemy);}
for(var i=0;i<enemies.length;i++){
   if(enemies[i].hp<=0){
   enemies.splice(i,1);
   }
   enemies[i].move();
   ctx.drawImage(slimeImg,enemies[i].x,enemies[i].y);
}
//血量
   ctx.fillText("血量:1000",100,100);

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
///製造路徑點
var enemyPath=[{x:96,y:64},{x:384,y:64},{x:384,y:190},{x:224,y:190},{x:224,y:320},{x:544,y:320},{x:544,y:96}];
/*var enemy={
  x:96,
  y:480-32,
  speedx:0,
  speedy:-64,
  pathDes:0, 
  speed:64, 
  move:function(){  
  if(iscoll(enemyPath[this.pathDes].x,enemyPath[this.pathDes].y,this.x,this.y,this.speed/FPS,this.speed/FPS)){
      //設定下個路徑點     
this.x=enemyPath[this.pathDes].x;
this.y=enemyPath[this.pathDes].y;     
this.pathDes++;
console.log("go1")
if(this.x>enemyPath[this.pathDes].x){
   this.speedx=-64;
   this.speedy=0;
   console.log("go")
}else if(this.x<enemyPath[this.pathDes].x){
   this.speedx=64;
   this.speedy=0;
   console.log("go3")
}else if(this.y>enemyPath[this.pathDes].y){
   this.speedx=0;
   this.speedy=-64;
   console.log("go4")
}else{
   this.speedx=0;
   this.speedy=64;
   console.log("go5")
};
   };
   this.x=this.x+this.speedx/FPS;
   this.y=this.y+this.speedy/FPS;  
  }
   

};  
*/
//敵人設定(工廠改造版)
function Enemy(){
  this.hp=10
  this.x=96;
  this.y=480-32;
  this.speedx=0,
  this.speedy=-64,
  this.direction={x:0,y:-1};
  this.pathDes=0; 
  this.speed=64; 
  this.move=function(){
     if(this.pathDes==enemyPath.length-1){
     }
     if(iscoll(enemyPath[this.pathDes].x,enemyPath[this.pathDes].y,this.x,this.y,this.speed/FPS,this.speed/FPS)){    
this.x=enemyPath[this.pathDes].x;
this.y=enemyPath[this.pathDes].y;     
this.pathDes++;
console.log("go1")
if(this.x>enemyPath[this.pathDes].x){
   this.speedx=-64;
   this.speedy=0;
   console.log("go")
}else if(this.x<enemyPath[this.pathDes].x){
   this.speedx=64;
   this.speedy=0;
   console.log("go3")
}else if(this.y>enemyPath[this.pathDes].y){ 
   this.speedx=0;
   this.speedy=-64;
   console.log("go4")
}else{
   this.speedx=0;
   this.speedy=64;
   console.log("go5")
};        
   };
   this.x=this.x+this.speedx/FPS;
   this.y=this.y+this.speedy/FPS;  
};
};
 
var enemy=new Enemy()   


//塔基本設定
var tower={
  shoot:function(){},
  fireRate:1,
  readyToShootTime:1,   
  range:96,
  aimingEnemyId:null,
  function:searchEnemy(){
  for(var i=0;i<enemies.length;i++){
  var distance=Math.sqrt(
  Math.pow(this.x-enemies[i].x,2)+Math.pow(this.y-enemies[i].y,2)
  );
  if(distance<=this.range){
     this.aimingEnemyId=i;
     //發射時間倒數設定
     if(this.readyToShootTime<=0){
     this.shoot();
     this.readyToShootTime=this.fireRate;}
     return;}
  }
  this.aimingEnemyId=null;
  };
 


}








 



//Create variables here
var dogimg,happydog;
var Dog

function preload()
{
	dogimg=loadImage("images/dogImg.png");
  happydog=loadImage("images/dogImg.png")
}

function setup() {
	createCanvas(500, 500);
 var dogimg=createSprite(280,250,20,20);
 
 foodStock=database.ref("food");
 foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87);

  if (KeyWentDown(UP_ARROW)) {
    writeStock(foods);
    Dog.addImage(happydog);
  }

  drawSprites();
  //add styles here
  function readStock(data){
    foods=data.val();

  

  function writeStock(x) {
    database.ref('/').update ({
      food:x
    })

    
  }
  
}




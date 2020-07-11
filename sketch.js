//Create variables here
var dog,dogImg,happyDog,database,foodS,foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  dog = addImage(dogImg);

  foodStock = database.ref("Food");
  foodStock.on("value", readStock);
}


function draw() {  
backgoround(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  textSize(15);
  fill("orange");
  text("Food Stock");

}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref("/").update({
    Food:x
  })
}




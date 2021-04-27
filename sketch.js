var sofia,sofiaImg;
var police,policeImg;
var diamond, diamondImg, snowflake, snowflakeImg, fireball , fireballImg;
var rock, rockImg, water, waterImg, tree, treeImg;
var background, backgroundImg;

function preload(){
 sofiaImg = loadAnimation("Images/1.png","Images/2.png","Images/3.png","Images/4.png")
 policeImg = loadAnimation("Images/police_1.png","Images/police_2.png","Images/police_3.png","Images/police_4.png")

 diamondImg = loadImage("Images/diamond.jpg")
 snowflakeImg = loadImage("Images/snowflake.png")
 fireballImg = loadImage("Images/fireball.png")
 rockImg = loadImage("Images/rock.png")
 waterImg = loadImage("Images/water.png")
 treeImg = loadImage("Images/tree.png")

 backgroundImg = loadImage("Images/bg1.jpg")
 
}
function setup(){
    createCanvas(1000,580)
 background=createSprite(500,290,1000,580)
 background.addImage(backgroundImg)
 background.scale=2

 sofia = createSprite(122,415,10,10)
 sofia.addAnimation("running",sofiaImg)
 sofia.scale=2.5

 police = createSprite(50,430,10,10)
 police.addAnimation("running",policeImg)
 police.scale = 0.5



}

function draw(){
    

drawSprites()

 text(mouseX+","+mouseY,mouseX,mouseY)

}

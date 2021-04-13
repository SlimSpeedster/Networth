
var star;
var realStar, starImg;

var backgroundImg, back;
var engine, world;
var edges
//var star_options;

//declaring variables below don't need to worry about those;(DO NOT TOUCH THEM);
var swordCount, pickCount, hoeCount, axeCount, shovelCount; 
var chestplateCount, helmetCount, leggingCount, bootCount;
var diamondStacks, rawDiamonds, netheriteIngots, usedNetherites;
var networth;

var swordValue, pickValue, hoeValue, axeValue, shovelValue; 
var chestplateValue, helmetValue, leggingValue, bootValue;
var stacksValue, netheriteValue, usedNetheriteValue;

var ball1,ball2, ball3;
var ball1Img,ball2Img, ball3Img;

var Edges;



function preload(){

    //don't worry about this (below), you can skip to function setup(more below)

    ball1Img=loadImage("images/star.png");
    ball2Img=loadImage("images/star.png");
    ball3Img=loadImage("images/star.png");

}

function setup(){
    var canvas = createCanvas(800,800);
    

    //insert amounts after the '=' sign, if there is none, YOU HAVE TO PUT a '0' OR YOU WILL GET A WHACK NETWORTH
    swordCount=0
    pickCount=0
    axeCount= 0
    shovelCount= 0
    hoeCount= 0
    chestplateCount=0
    helmetCount= 0
    leggingCount= 0
    bootCount=0
    diamondStacks=0
    rawDiamonds=0
    netheriteIngots=0
    usedNetherites=0


    
    //Don't worry about anything below this point
    swordValue= swordCount;
    pickValue=1.5*pickCount;
    hoeValue= hoeCount;
    axeValue= 1.5*axeCount;
    shovelValue= 0.5*shovelCount;
    chestplateValue=4*chestplateCount; 
    helmetValue= 2.5*helmetCount;
    leggingValue= 3.5*leggingCount;
    bootValue=2*bootCount;
    stacksValue= 64*diamondStacks;
    netheriteValue= 8*netheriteIngots;
    usedNetheriteValue= 4*usedNetherites;

    networth=swordValue+pickValue+hoeValue+axeValue+shovelValue+
    chestplateValue+helmetValue+leggingValue+bootValue+
    rawDiamonds+stacksValue+netheriteValue+usedNetheriteValue;

    
    ball1 = createSprite(600,400,50,50);
    ball1.addImage("star1", ball1Img);
    ball1.scale=0.40
    ball1.setVelocity(Math.round(random(6-(-6))),Math.round(random(6-(-6))));

    ball2 = createSprite(200,100,50,50);
    ball2.addImage("star2", ball2Img);
    ball2.scale=0.40
    ball2.setVelocity(Math.round(random(6-(-6))),Math.round(random(6-(-6))));
    
    ball3 = createSprite(300,500,50,50);
    ball3.addImage("star3", ball3Img);
    ball3.scale=0.40
    ball3.setVelocity(Math.round(random(6-(-6))),Math.round(random(6-(-6))));
    

  }

function draw(){

    background("skyblue");
    var Edges = createEdgeSprites();
      ball1.bounceOff(Edges)
      ball2.bounceOff(Edges)
      ball3.bounceOff(Edges)
        textSize(40); 
        var message = text("Your Networth is: "+networth+"!", 175, 390);
        
                


    drawSprites();
}

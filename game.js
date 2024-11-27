

//board
let graphic;
let graphicWidth = 480;
let graphicHeight = 580;
let context;

//bird
let birdWidth = 34; 
let birdHeight = 26;
let birdX = graphicWidth/8;
let birdY = graphicHeight/2;
let birdImg;

//pipes //

let treeArray=[];
let treeWidth=64;
let treeHeight=512;

let treeX= graphicWidth;
let treeY=0;

let topTreeImg;
let bottomTreeImg;

// moving pipe to left //
let velocityX =-2;

let velocityY=0;// bird jump speed
let gravity=0.4;



let bird = {
    x : birdX,
    y : birdY,
    width : birdWidth,
    height : birdHeight
}
// let birdImg =new Image();
// birdImg.src="flappyimg.png";
// birdImg.onload =function(){
// context.drawImage(birdImg,bird.x,bird.y,bird.height,bird.width)
// }
   
window.onload = function() {
    graphic = document.getElementById("playGround");
    graphic.height = graphicHeight;
    graphic.width = graphicWidth;
    context = graphic.getContext("2d"); //used for drawing on the board

    //draw flappy bird
    // context.fillStyle = "red";
    // context.fillRect(bird.x, bird.y, bird.width, bird.height);
    birdImg =new Image();
    birdImg.src="./bird.png";
    birdImg.onload =function(){
    context.drawImage(birdImg,bird.x,bird.y,bird.height,bird.width)
    }

    topTreeImg =new Image();
    topTreeImg.src="./tree1.png";

    bottomTreeImg = new Image();
    bottomTreeImg.src="./tree.png";



    requestAnimationFrame(update)

    setInterval(PipePlaces,1500);

    document.addEventListener("keydown",moveBird)
}   


function update(){
   
    requestAnimationFrame(update);

    context.clearRect(0,0,graphic.width,graphic.height);
    //bird //

    velocityY += gravity;
    bird.y =Math.max(bird.y + velocityY ,0)  // gravityapplied to current bird.y and 0 is the top most height for the bird
 
    
    context.drawImage(birdImg,bird.x,bird.y,bird.height,bird.width)

    for(let i=0;i < treeArray.length;i++){
        let tree = treeArray[i];
        tree.x += velocityX;
        context.drawImage(tree.img,tree.x,tree.y,tree.width,tree.height)
    }

}

function PipePlaces(){

    let randomTreeY=treeY-treeHeight/5-Math.random()*(treeHeight/2);
    let Space= graphic.height/5;

    let topTree={
        img : topTreeImg,
        x : treeX,
        y : randomTreeY,
        width :treeWidth,
        height : treeHeight,
        passed : false
    }
    treeArray.push(topTree);

    let bottomTree = {
        img : bottomTreeImg,
        x : treeX,
        y : randomTreeY + treeHeight + Space,
        width : treeWidth,
        height : treeHeight,
        passed : false
    }
    treeArray.push(bottomTree)
}


function moveBird(bal){
 if(bal.code == "Space"  || bal.code == "ArrowUp" || bal.code == "KeyX"){

    velocityY= -6;
 }
}



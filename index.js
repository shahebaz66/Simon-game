
var colors=["red","yellow","blue","green"];
var newColors=[];
var userClicked=[];
var leval=0;
var num;
start=false;


function clicked1(clicked){
      var sound=new Audio("sounds/"+clicked+".mp3",muted="muted",muted="muted");
      sound.play();

  }

function animation(pressed){
  var ani=document.querySelector("#"+pressed);
  ani.classList.add("pressed");
  setTimeout(function () {
    ani.classList.remove("pressed");
  },100);

}

function blinkEffect() {
  userClicked=[];
  document.querySelector('h1').innerHTML="level "+leval;
  num=Math.floor(Math.random()*4);
  var colorAi=colors[num];
  newColors.push(colorAi);
  console.log(newColors);

  $("#" + colorAi).fadeIn(100).fadeOut(100).fadeIn(100);
  clicked1(colorAi)
  leval=leval+1;

}

function check(index){
    if(newColors[index]===userClicked[index]){
      console.log("success");
      if(newColors.length===userClicked.length){
        setTimeout(function () {

        blinkEffect()},1000)
      }

  }else{
    console.log("fail");
    var sound1=new Audio("sounds/wrong.mp3");
    sound1.play();
    var ani=document.querySelector("body");
    ani.classList.add("game-over");
    setTimeout(function () {
      ani.classList.remove("game-over");
    },100);
    start=false;
    leval=0;
    newColors=[];
    document.querySelector('h1').innerHTML="Press A Key to Start";
  }
}

var new1=document.querySelectorAll(".btn");
for(var i=0;i<new1.length;i++){
  new1[i].addEventListener("click",function (){
    var clicked=this.id;
    userClicked.push(clicked);
    console.log(userClicked);
    clicked1(clicked);
    animation(clicked);
    check(userClicked.length-1);
  });

}
addEventListener("keydown",function (){
  if(start!==true){
    blinkEffect();

    start=true;
  }


});

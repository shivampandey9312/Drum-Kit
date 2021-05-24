
//button press
for(var i=0;i<document.querySelectorAll("button").length;++i)
document.querySelectorAll("button")[i].addEventListener("click",function(){
  button = this.innerHTML;
  playaudio(button);
  buttonAnimation(button);
});
//key board press
document.addEventListener("keypress",function(event){
  playaudio(event.key);
  buttonAnimation(event.key);


});


function playaudio(key){

  switch(key){
    case "w":var tom4 =new Audio("sounds/tom-4.mp3");
             tom4.play();
             break;
    case "a":var tom3 =new Audio("sounds/tom-3.mp3");
             tom3.play();
             break;
    case "s":var tom2 =new Audio("sounds/tom-2.mp3");
             tom2.play();
             break;
    case "d":var tom1 =new Audio("sounds/tom-1.mp3");
             tom1.play();
             break;
    case "j":var snare =new Audio("sounds/snare.mp3");
             snare.play();
             break;
    case "k":var kick = new Audio("sounds/kick-bass.mp3");
             kick.play();
             break;
    case "l":var crash = new Audio("sounds/crash.mp3");
             crash.play();
             break;
    default: colsole.log(this.innerHTML);

  }
}

function buttonAnimation(key){
  var activeButton = document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },300);

}

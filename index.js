//Detecting Button Press
var numberofButton = document.querySelectorAll(".drum").length;

for(i=0; i< numberofButton; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function() {

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);
    buttonAmination(buttonInnerHTML);
      });
    }

    //Detecting keyboard press
    document.addEventListener("keypress", function(event){
     makesound(event.key);
     buttonAmination(event.key);
    });

    function makesound(key){

      switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
          break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
          break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
          break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
          break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
          break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
          break;

        case "l":
            var bass = new Audio("sounds/last.wav");
            bass.play();
          break;

        case "e":
            var entry = new Audio("sounds/entry.wav");
            entry.play();
          break;
        default: console.log(buttonInnerHTML);
    }
  }

  function buttonAmination(currentKey){
    var activebutton = document.querySelector("."+ currentKey);
    activebutton.classList.add("pressed");

    setTimeout(function(){
      activebutton.classList.remove("pressed");
    }, 100);
  }

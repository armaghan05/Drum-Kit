

var numberOfButtons = document.querySelectorAll(".drum").length;
for (i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;

    makeSound(buttonInnerHtml);

  }); // Anonymous function bracket
} // For loop brackets.

// DETECTING KEYBOARD PRESS

document.addEventListener("keydown", function(blabla) {
makeSound(blabla.key);
buttonAnimation(blabla.key);
});


function makeSound(key){
      switch (key) {
        case "a":
            var kick = new Audio("sounds/kick.mp3");
            kick.play();
          break;

        case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

        case "d":
          var tom1 = new Audio("sounds/tom1.mp3");
          tom1.play();
          break;

        case "f":
          var tom2 = new Audio("sounds/tom2.mp3");
          tom2.play();
          break;

        case "g":
          var tom3 = new Audio("sounds/tom3.mp3");
          tom3.play();
          break;

        case "h":
          var tom4= new Audio("sounds/tom4.mp3");
          tom4.play();
          break;

        case "j":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
          break;

        default: console.log(buttonInnerHtml);
      }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 80);
}

// DETECTING BUTTON PRESS

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
});
}


//  DETECTING KEYBOARD PRESS

    document.addEventListener("keypress", function(event){
        makeSound(event.key);
        buttonAnimation(event.key);
    })

    function makeSound(key){
        switch (key){
            case "w":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                 var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                 break;
            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                 tom4.play();
                 break;   
            case "j":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;    
        }

    }

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}



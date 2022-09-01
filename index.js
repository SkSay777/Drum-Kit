let num = document.querySelectorAll(".drum").length;

//for when the buttons are clicked
for (let i = 0; i < num; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let selectDrum = this.innerHTML;
        MakeSound(selectDrum);
        ButtonAnimation(selectDrum);
    });
}

//for when the respective key is pressed
document.addEventListener("keypress", function (event) {
    MakeSound(event.key); //Returns the key that triggers the event
    ButtonAnimation(event.key);
});

//function that makes the sound
function MakeSound(letter) {
    switch (letter) {
        case "w":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "a":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "s":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "j":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "l":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            console.log("Wrong Input");
    }
}

function ButtonAnimation(current_key){
     let activeButton = document.querySelector("." + current_key);
     activeButton.classList.add("pressed");
     setTimeout(function (){
         activeButton.classList.remove("pressed");
     },100);
}
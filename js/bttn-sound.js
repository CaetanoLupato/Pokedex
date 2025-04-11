const buttonSound = new Audio('sounds/bttn-Sound.mp3');

function playButton() {
  buttonSound.currentTime = 0;
  buttonSound.play();
}
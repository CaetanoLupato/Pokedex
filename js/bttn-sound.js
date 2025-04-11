const buttonSound = new Audio('sounds/bttn-Sound.mp3'); // ajuste o caminho e nome conforme seu arquivo

function playButton() {
  buttonSound.currentTime = 0; // reinicia o som
  buttonSound.play();
}
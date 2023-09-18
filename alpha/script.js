const player = document.getElementById("player");
const playPause = document.getElementById("play-pause");
const stop = document.getElementById("stop");

playPause.addEventListener("click", function() {
  if (player.paused) {
    player.play();
    playPause.innerHTML = "pause.";
  } else {
    player.pause();
    playPause.innerHTML = "play.";
  }
});

stop.addEventListener("click", function() {
  player.pause();
  player.currentTime = 0;
  playPause.innerHTML = "play.";
});

const openPlayerBtn = document.getElementById("open-player");
const playerContainer = document.getElementById("player-container");

openPlayerBtn.addEventListener("click", function () {
  playerContainer.classList.toggle("hidden");
});

const container = document.getElementById("container");
let colorIndex = 0;
const colors = ["pink", "purple", "blue"];

setInterval(() => {
  container.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
}, 1000);

const button = document.getElementById('warning-button');
const warning = document.getElementById('warning');

button.addEventListener('click', function() {
  warning.style.display = "block";
});

var score;
function announce() { console.log("Game started"); }
let status = "ready";

console.log(score);
announce();

score = 50;

function startGame() {
  console.log(status);
}
startGame();

const announceArrow = () => console.log("Game started");
const startArrow = () => console.log(status);

console.log("ok");
//variable

var random;
var score = 0;
var timer = 60;
var hit;
let start = false;

// start game
function startthegame() {
  score = 0;
  timer = 60;
  document.querySelector(".score").innerHTML = score;
  document.querySelector(".timer").innerHTML = timer;
  document.querySelector(".btn").disabled = true;
  makebubble();
  runtime();
}

//creating bubble
function makebubble() {
  var clutter = "";
  for (var i = 0; i < 77; i++) {
    random = parseInt(Math.random() * 10);
    clutter += `<div class="bubble">${random}</div>`;
  }

  document.querySelector("#main").innerHTML = clutter;
  attachBubbleEvents();
}
function attachBubbleEvents() {
  var bubbles = document.querySelectorAll(".bubble");
  bubbles.forEach((bub) => {
    bub.addEventListener("click", check);
  });
}

// timer
function runtime() {
  let timeid = setInterval(decrese, 1000);
  function decrese() {
    if (timer > 0) {
      timer--;
      document.querySelector(".timer").innerHTML = timer;
    } else {
      clearInterval(timeid);
      // document.querySelector("#main").innerHTML = `game is over`;
      endgame();
    }
  }
}

//endgame
function endgame() {
  document.querySelector(".btn").disabled = false;
  document.querySelector(
    "#main"
  ).innerHTML = `game is over,your score is ${score}`;
}

//hit
function newhit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = hit;
}

//score
function check(event) {
  var clicked = Number(event.target.innerHTML);
  if (clicked === hit) {
    increaseScore();
    makebubble();
    newhit();
  }
}
// score update

function increaseScore() {
  if (document.querySelector(".btn").disabled == true) {
    score += 10;
    document.querySelector(".score").innerHTML = score;
  }
}

//initialize game
document.querySelector(".btn").addEventListener("click", startthegame);
newhit();

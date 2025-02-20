console.log("ok");
//variable

var random;
var score = 0;
var timer = 60;
var hit;
var start = false;

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
document.querySelector(".btn").addEventListener("click", runtime);
function runtime() {
  document.querySelector(".btn").disabled = true;
  let timeid = setInterval(decrese, 1000);
  function decrese() {
    if (timer > 0) {
      document.querySelector(".timer").innerHTML = timer;
      timer--;
    } else {
      clearInterval(timeid);
      document.querySelector("#main").innerHTML = `game is over`;
    }
  }
}

//hit
function newhit() {
  hit = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = hit;
}
newhit();

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
makebubble();
newhit();

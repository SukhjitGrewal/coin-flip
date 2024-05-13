// COIN FLIP SIMULATOR

// HTML variables
let outputEl = document.getElementById("output");
let headsEl = document.getElementById("heads-out");
let tailsEl = document.getElementById("tails-out");
let roll1El = document.getElementById("roll1");
let roll2El = document.getElementById("roll2");
let roll3El = document.getElementById("roll3");
let roll4El = document.getElementById("roll4");
let roll5El = document.getElementById("roll5");
let roll6El = document.getElementById("roll6");
// Count variables
let numHeads = 0;
let numTails = 0;
let roll1 = 0;
let roll2 = 0;
let roll3 = 0;
let roll4 = 0;
let roll5 = 0;
let roll6 = 0;

// Button Event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Generate a random number
  let randNum = Math.random();
  console.log(randNum);

  // Simulate the coin flip
  if (randNum < 0.5) {
    outputEl.innerHTML = `<img src="img/heads.png"/>`;
    numHeads++;
    headsEl.innerHTML = numHeads;
  } else {
    outputEl.innerHTML = `<img src="img/tails.png"/>`;
    numTails++;
    tailsEl.innerHTML = numTails;
  }
}

// Rolling dice
document.getElementById("dicebtn").addEventListener("click", rollDice);

function rollDice() {
  // Generate a random number
  let randRoll1 = Math.random();

  console.log(randRoll1);

  // simeulate the dice roll
  if (randRoll1 < 1 / 6) {
    outputEl.innerHTML = `<img src="img/1.png" width="300px"/>`;
    roll1++;
    roll1El.innerHTML = roll1;
  } else if (randRoll1 < 2 / 6) {
    outputEl.innerHTML = `<img src="img/2.png" width="300px"/>`;
    roll2++;
    roll2El.innerHTML = roll2;
  } else if (randRoll1 < 3 / 6) {
    outputEl.innerHTML = `<img src="img/3.png" width="300px"/>`;
    roll3++;
    roll3El.innerHTML = roll3;
  } else if (randRoll1 < 4 / 6) {
    outputEl.innerHTML = `<img src="img/4.png" width="300px"/>`;
    roll4++;
    roll4El.innerHTML = roll4;
  } else if (randRoll1 < 5 / 6) {
    outputEl.innerHTML = `<img src="img/5.png" width="300px"/>`;
    roll5++;
    roll5El.innerHTML = roll5;
  } else {
    outputEl.innerHTML = `<img src="img/6.png" width="300px"/>`;
    roll6++;
    roll6El.innerHTML = roll6;
  }
}

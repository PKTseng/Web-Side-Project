const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

let randomWord = 0;
let score = 0;
let time = 10;

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

function showRandomWord() {
  const showText = getRandomWord();
  word.innerHTML = getRandomWord();
}
showRandomWord();
// console.log(getRandomWord());

// 抓取裡面的值
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function showRandomWord() {
  showWord = getRandomWord();
  word.innerHTML = showWord;
}

showRandomWord();
// console.log(getRandomWord());
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

text.addEventListener("input", (e) => {
  let inputText = e.target.value;
  if (inputText === showWord) {
    showRandomWord();
    updateScore();
    e.target.value = ""; //只能用 e.target.value 來清空值
  }
});

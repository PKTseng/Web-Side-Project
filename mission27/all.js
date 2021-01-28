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

// 抓取陣列內的值
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// 把值綁定到 DOM 上
function showRandomWord() {
  showWord = getRandomWord();
  word.innerHTML = showWord;
}

showRandomWord(); // 執行

// 答對加分，同時把分數綁到 DOM 上
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// 在輸入框輸入文字同時跟顯示的文字做對比
text.addEventListener("input", (e) => {
  let inputText = e.target.value;
  if (inputText === showWord) {
    showRandomWord();
    updateScore();
    e.target.value = ""; //只能用 e.target.value 來清空值
  }
});

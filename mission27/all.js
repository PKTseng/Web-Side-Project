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

// 把選到的值賦予到 difficulty 變數裡面，用來判斷難度的時間
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// 這是選完後抓取選單的值，確保頁面刷新後不會恢復成預設值
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

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
text.focus();

const initTime = setInterval(updateTime, 1000);

function updateTime() {
  time--;
  timeEl.innerHTML = time + " s ";
  if (time === 0) {
    clearInterval(initTime); //少了這個停損點倒數的數字會變成負的
    endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    endgameEl.style.display = "flex";
  }
}

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

    time += 5;

    if (difficulty === "hard") {
      time += 2;
    } else if (difficulty === "medium") {
      time += 3;
    } else {
      time += 5;
    }
    updateTime();
  }
});

// 隱藏或是顯示難度
settingsBtn.addEventListener("click", () => {
  settings.classList.toggle("hide");
});

// 選擇難度，把資料寫進瀏覽器記憶體裡面
settingsForm.addEventListener("change", (e) => {
  difficulty = e.target.value;
  localStorage.setItem("difficulty", difficulty);
});

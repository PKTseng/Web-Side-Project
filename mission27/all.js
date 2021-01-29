const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

// 進入頁面可以直接輸入單字
text.focus();

// 設定固定時間，重複循環
const initTime = setInterval(updateTime, 1000);

let time = 30; //設定初始秒數

// 執行倒數
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

// 用 Axios 打 API 抓取 response 的值
function getRandomWord() {
  axios
    .get("https://random-word-api.herokuapp.com/word?number=1")
    .then((res) => {
      console.log(res);
      randomWord = res.data[0];
      console.log(randomWord);
      word.innerHTML = randomWord;
    })
    .catch((error) => {
      console.log("沒抓到單字資料");
    });
  // return words[Math.floor(Math.random() * words.length)];
}
getRandomWord();

// 答對加分，同時把分數綁到 DOM 上
let score = 0;
function updateScore() {
  score++;
  scoreEl.innerHTML = score;
}

// 把選到的值賦予到 difficulty 變數裡面，用來判斷難增加的時間
let difficulty =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// 這是選完後抓取選單的值，確保頁面刷新後不會恢復成預設值
difficultySelect.value =
  localStorage.getItem("difficulty") !== null
    ? localStorage.getItem("difficulty")
    : "medium";

// 在輸入框輸入文字同時跟顯示的文字做對比
text.addEventListener("input", (e) => {
  let inputText = e.target.value;
  if (inputText === randomWord) {
    getRandomWord();
    updateScore();
    e.target.value = ""; //只能用 e.target.value 來清空值

    time += 5;

    // 依照難度調整增加輸入時間
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

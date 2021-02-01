const msgEl = document.querySelector('#msg')
const randomNumber = getRandomNumber()

// 取 1~100 內隨機數字
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

// 確認有抓到
// console.log(randomNumber)

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new window.SpeechRecognition()

function checkMsg(msg) {
  // 主換數字型別
  const num = +msg

  // 判斷說的是不是數字
  if (Number.isNaN(num)) {
    msgEl.innerHTML = `<div>請說數字 !</div>`
  }

  // 判斷數字區間
  if (num > 100 || num < 1) {
    msgEl.innerHTML = `<div>數字只能介於 1~100 之間</div>`
  }

  // 開始猜測，決定數字要喊高還是喊低
  if (num === randomNumber) {
    msgEl.innerHTML = `
      <h2>恭喜猜中! <br><br>
      就是 ${num}</h2>
      <button class="play-again" id="play-again">再玩一次</button>
      `
  } else if (num > randomNumber) {
    msgEl.innerHTML = `<div>再低</div>`
  } else {
    msgEl.innerHTML = `<div>再高</div>`
  }
}

recognition.start()
recognition.addEventListener('result', (e) => {
  // 語音測試一下
  // console.log(e)

  const msg = e.results[0][0].transcript

  // 把數字寫進 DOM 裡面
  msgEl.innerHTML = `
  <div>You said:</div>
  <span class="box">${msg}</span>
  `
  checkMsg(msg)
})

recognition.addEventListener('end', () => recognition.start())

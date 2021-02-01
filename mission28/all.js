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
  const num = +msg
  if (Number.isNaN(num)) {
    msgEl.innerHTML = `<div>請說數字 !</div>`
  }

  if (num > 100 || num < 1) {
    msgEl.innerHTML = `<div>數字只能介於 1~100 之間</div>`
  }

  if (num === randomNumber) {
    msgEl.innerHTML = `
      <h2>恭喜猜中r! <br><br>
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

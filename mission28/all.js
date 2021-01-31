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
})

recognition.addEventListener('end', () => recognition.start())

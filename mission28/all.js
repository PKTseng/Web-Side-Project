const msg = document.querySelector('#msg')
const randomNumber = getRandomNumber()

// 取 1~100 內隨機數字
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1
}

// 確認有抓到
// console.log(randomNumber)

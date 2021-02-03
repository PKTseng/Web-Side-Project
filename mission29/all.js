const dayEl = document.querySelector('#days')
const hourEl = document.querySelector('#hours')
const minutesEL = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
const countdown = document.querySelector('#countdown')
const loading = document.querySelector('#loading')
// const times1 = new Date()
// console.log(times1)
// console.log(typeof times1)

const nowYear = new Date().getFullYear()
// getFullYear() 方法用來取得一個 Date 物件的年份，時區是本地時間 (local time)
// getFullYear() 會把物件型別轉成數字
// console.log(nowYear)
// console.log(typeof nowYear)

const newYear = new Date(`January 01 ${nowYear + 1} 00:00:00`)
// console.log(newYearTime)

function getTime() {
  const newTime = new Date()
  // console.log(newTime)
  const totalTime = newYear - newTime
  // console.log(totalTime)

  const day = Math.floor(totalTime / 1000 / 60 / 60 / 24)
  // console.log(day)
  const hours = Math.floor(totalTime / 1000 / 60 / 60) % 24
  // console.log(hours)
  const minutes = Math.floor(totalTime / 1000 / 60) % 60
  // console.log(minutes)
  const seconds = Math.floor(totalTime / 1000) % 60
  // console.log(seconds)

  dayEl.innerHTML = day
  hourEl.innerHTML = hours < 10 ? '0' + hours : hours
  minutesEL.innerHTML = minutes < 10 ? '0' + minutes : minutes
  secondsEl.innerHTML = seconds < 10 ? '0' + seconds : seconds
}
// getTime()
setInterval(getTime, 1000)

setTimeout(() => {
  loading.remove()
  countdown.style.display = 'flex'
}, 1000)

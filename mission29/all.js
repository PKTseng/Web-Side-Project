const dayEl = document.querySelector('#day')
const hourEl = document.querySelector('#hours')
const minutesEL = document.querySelector('#minutes')
const secondsEl = document.querySelector('#seconds')
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

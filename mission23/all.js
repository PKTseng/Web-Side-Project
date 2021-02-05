// 抓取DOM
const currencyElOne = document.querySelector('#currencyOne')
const currencyElTwo = document.querySelector('#currencyTwo')
const amountElOne = document.querySelector('#amountOne')
const amountElTwo = document.querySelector('#amountTwo')
const swapEl = document.querySelector('#swap')
const rateEl = document.querySelector('#rate')


// 操作 DOM 同時執行運算
function caclulate() {
	// 透過選取的 DOM 將該 DOM的值塞到新變數中
	const currencyOne = currencyElOne.value
	const currencyTwo = currencyElTwo.value
  
	// 發送 request ，開始打 API
	fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
  
	// 後端傳送 response 回傳結果
		.then(res => res.json())//將回傳結果轉換成 json 格式
		.then(data => {
			// console.log(data)
      
			// 用陣列的方式抓去 keyValue，再將值塞到 rate 變數中
			const rate = data.rates[currencyTwo] 
			// console.log(rate)
      
			rateEl.innerHTML = `1 ${currencyOne} = ${rate} ${currencyTwo}`

			// 幣值2的值 = 幣值1的值*匯率，將值四捨五入
			amountElTwo.value = (amountElOne.value*rate).toFixed(2)
		})
}

swapEl.addEventListener('click',function () {
	const temp = currencyElOne.value
	currencyElOne.value = currencyElTwo.value
	currencyElTwo.value = temp
	caclulate()
})

// 監聽 DOM 狀態
currencyElOne.addEventListener('change', caclulate)
currencyElTwo.addEventListener('change', caclulate)
amountElOne.addEventListener('input', caclulate)
amountElTwo.addEventListener('input', caclulate)

// 執行
caclulate()



// fetch('局屬氣象站-現在天氣觀測報告網址')
// 	.then(res => {return res.json()})
// 	.then(result => {
// 		let city = result.cwbopendata.location[14].parameter[0].parameterValue
// 		let temp = result.cwbopendata.location[14].weatherElement[3].elementValue.value
// 		console.log(`${city}的氣溫為 ${temp} 度 C`) // 得到 高雄市的氣溫為 29.30 度 C
// 	})
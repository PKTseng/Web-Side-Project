// 抓取 dom 
const balance = document.querySelector('#balance')
const moneyPlus = document.querySelector('#money-plus')
const moneyMinus = document.querySelector('#money-minus')
const list = document.querySelector('#list')
const text = document.querySelector('#text')
const form = document.querySelector('#form')
const amount = document.querySelector('#amount')

const dummyTransactions = [
	{ id: 1, text: 'Flower', amount: -20 },
	{ id: 2, text: 'Salary', amount: 300 },
	{ id: 3, text: 'Book', amount: -10 },
	{ id: 4, text: 'Camera', amount: 150 }
]

let transactions = dummyTransactions

// 監聽 addTransaction 的事件
function addTransaction(e) {
	e.preventDefault()

	if (text.value === '' || amount.value === '') {
		alert('請重新輸入')
	} else {
		// 如果不是空值，將輸入的 value 帶入 key 裡
		const transaction = {
			id: generateID(),
			text: text.value,
			amount: +amount.value
		}
    
		// 將新增的物件加入到 transactions 物陣列內
		transactions.push(transaction)
    
		// 執行 addTransactionDOM 函式，並帶入transaction
		addTransactionDOM(transaction)
    
		// 輸入完後恢復空值
		text.value = ''
		amount.value = ''
	}
}


function generateID() {
	return Math.floor(Math.random()*1000000)
}

function addTransactionDOM(transaction) {
	// 判斷正負值
	const sign = transaction.amount > 0 ? '+' : '-'
	// console.log(sign)
	// 新增 li 元素
	const item = document.createElement('li')
	// console.log(item)
  
	// 將 classname 新增到 item ，判斷顯示的顏色
	item.classList.add(transaction.amount > 0 ? 'plus' : 'minus')
  
  
	item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span><button class='delete-btn'>X</button>`
	list.appendChild(item)
}

function updateValue(){
	const amounts = transaction.map( transaction => transaction.amount)

	// 計算總結
	const total = amount
		.reduce((acc, item) => (acc+= item), 0)
		.toFixed(2)

	// 計算收入
	const income = amounts
		.filter(item => item > 0)
		.reduce((acc, item) => (acc+= item), 0)
		.toFixed(2)

	// 計算支出
	const expense = amounts
		.filter(item => item < 0)
		.reduce((acc, item) => (acc+= item), 0) * -1
    
	// 將 total、income、expense 塞到各 dom 裡面
	balance.innerHTML = `${total}`
	moneyPlus.innerHTML = `${income}`
	moneyMinus.innerHTML = `${expense}`
}


// 初始化
function init() {
	list.innerHTML = ''

	// 將假資料丟到 addTransactionDOM 函式裡面運算
	transactions.forEach(addTransactionDOM)
  
	updateValue()
}

init()

form.addEventListener('submit', addTransaction)

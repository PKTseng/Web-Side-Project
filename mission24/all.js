const balance = document.querySelector('#balance')
const moneyPlus = document.querySelector('#money-plus')
const moneyMinus = document.querySelector('#money-minus')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const text = document.querySelector('#text')
const amount = document.querySelector('#amount')


const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'))

let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : []

function addTransaction(e){
	e.preventDefault()
	if (text.value.trim() === '' || amount.value.trim() ==='') {
		alert('請重新輸入')
	} else {
		const transaction = {
			id: generateID(),
			text: text.value,
			amount: +amount.value
		}
    
		transactions.push(transaction)
		addTransactionDOM(transaction)
		updateValue()
		updateLocalStorage()
    
		text.value = ''
		amount.value = ''
	}
}

function generateID(){
	return Math.floor(Math.random()*1000)
}

function removeTransaction(id) {
	transactions = transactions.filter(transaction => transaction.id !== id)
	updateLocalStorage()
	init()
}



function addTransactionDOM(transaction) {
	const sign = transaction.amount <0 ? '-' : '+'
	// console.log(sign)
	const item = document.createElement('li')
	// console.log(item)
	item.classList.add(transaction.amount>0 ? 'plus' : 'minus')
	item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}<button class='delete-btn' onclick='removeTransaction(${transaction.id})'>X</button></span>`
  
	list.appendChild(item)
}


function updateValue() {
	const amounts = transactions.map(transaction => transaction.amount)
	const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2)
	const income = amounts.filter(item => item> 0 ).reduce((acc, item) => (acc+=item),0).toFixed(2)
	const expense = amounts.filter(item => item< 0 ).reduce((acc, item) => (acc+=item),0)* -1
  
	balance.innerHTML = `${total}`
	moneyPlus.innerHTML = `${income}`
	moneyMinus.innerHTML = `${expense}`
}

function updateLocalStorage() {
	localStorage.setItem('transactions', JSON.stringify('transactions'))
}

function init() {
	list.innerHTML = ''
	transactions.forEach(addTransactionDOM)
  
	updateValue()
}

init()


form.addEventListener('submit', addTransaction)
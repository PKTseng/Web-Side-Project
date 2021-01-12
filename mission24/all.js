const balance = document.querySelector('#balance')
const moneyPlus = document.querySelector('#money-plus')
const moneyMinus = document.querySelector('#money-minus')
const list = document.querySelector('#list')
const form = document.querySelector('#form')
const text = document.querySelector('#text')
const amount = document.querySelector('#amount')

const dummyTransactions = [
	{ id: 1, text: 'Flower', amount: -20 },
	{ id: 2, text: 'Salary', amount: 300 },
	{ id: 3, text: 'Book', amount: -10 },
	{ id: 4, text: 'Camera', amount: 150 }
]

let transactions = dummyTransactions

function addTransactionDom(transaction) {
	const sign = transaction.amount <0 ? '-' : '+'
	// console.log(sign)
	const item = document.createElement('li')
	// console.log(item)
	item.classList.add(transaction.amount>0 ? 'plus' : 'minus')
	item.innerHTML = `${transaction.text}<span>${sign}${Math.abs(transaction.amount)}<button class='delete-btn'>X</button></span>`
  
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

function init() {
	list.innerHTML = ''
	transactions.forEach(addTransactionDom)
	updateValue()
}
init()

function addTransaction(e){
	e.preventDefault()
	if (text.value.trim() === '' || amount.value.trim() ==='') {
		alert('請重新輸入')
	}else{
		const transaction = {
			id: generateID(),
			text: text.value,
			amount: +amount.value
		}
	}
}

function generateID(){
	return Math.floor(Math.random()*1000)
}

form.addEventListener('submit', addTransaction)
// 抓取 dom 元素
const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')

// 失敗顯示
function showFail(input, message){
	const formControl = input.parentElement
	formControl.className = 'formControl fail'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// 成功顯示
function showSuccess(input){
	const formControl = input.parentElement
	formControl.className = 'formControl success'
}

// 輸入框輸入確認
function checkInput(inputId){
	inputId.forEach(inputArr)
}

// 輸入框 callback function
function inputArr(input){
	if(input.value.trim() === ''){
		showFail(input, `${getFiledName(input)} is require`)
	}else{
		showSuccess(input)
	}
}

// 第一字體變大寫
function getFiledName(input){
	return input.id.slice(0,1).toUpperCase() +input.id.slice(1).toLowerCase()
}

// 輸入使用者名稱跟密碼長度限制
function checkLength(input, min, max) {
	if(input.value.length < min){
		showFail(input, `${getFiledName(input)} must be at least ${min} characters`)
	}else if (input.value.length > max){
		showFail(input, `${getFiledName(input)} must be  less than ${max} characters`)
	}else{
		showSuccess(input)
	}
}

// 信箱正規表達驗證
function checkMail (input){
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	// return re.test(String(email).toLowerCase())
	if(re.test(input.value)){
		showSuccess(input)
	}else{
		showFail(input, 'email is not valid')
	}
}

// 密碼雙重驗證
function checkPasswordMatch(password, confirmPassword){
	if(password.value !== confirmPassword.value){
		showFail(confirmPassword, 'password is not match')
	}
}

// 執行
form.addEventListener('submit', function(e){
	e.preventDefault()
	checkInput([username, email, password, confirmPassword])
	checkLength(username, 3, 8)
	checkLength(password, 3, 12)
	checkMail(email)
	checkPasswordMatch(password, confirmPassword)
})
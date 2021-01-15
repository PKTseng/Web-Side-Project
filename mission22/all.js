const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')



// 監聽容器內座位數值的變化
container.addEventListener('click', e=>{
	// contains 會返回一個 boolean 值
	if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
		e.target.classList.toggle('selected')
	}
})
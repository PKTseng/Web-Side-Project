const container = document.querySelector('.container')
const seats = document.querySelectorAll('.row .seat:not(.occupied)')
const count = document.querySelector('#count')
const total = document.querySelector('#total')
const movieSelect = document.querySelector('#movie')

// 計算選擇的座位數量價格
function updateSelectCount(){
	// 將所選取到的座位塞入 selectedSeats 這個變數中
	const selectedSeats = document.querySelectorAll('.row .seat.selected')

	const selectedSeatCount = selectedSeats.length
	count.innerText = selectedSeatCount// 將選到的座位數量塞到 count 裡面
	total.innerText = selectedSeatCount * ticketPrice	// 計算座位數量跟票價

	// 將[...selectedSeats]解構的值塞到函式裡面運算，再把結果 return 出來
	const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat))
	localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
}

// 監聽容器內座位數值的變化
container.addEventListener('click', e=>{
	// contains 會返回一個 boolean 值
	if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
		e.target.classList.toggle('selected')
		updateSelectCount()
	}
})

updateSelectCount()
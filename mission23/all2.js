// 變動容器內的 dom，同時計算匯率
function 	caclulate(){
	// 用 jquery 的方式命名變數
	let currencyOne = $('#currencyOne').val()
	let currencyTwo = $('#currencyTwo').val()

	// 用 ajax 打 api
	$.ajax({
		methods: 'GET',
		url: `https://api.exchangerate-api.com/v4/latest/${currencyOne}`,
	})
	// 後端 respose 資料，將資料用 res 命名
		.done(function(res){
			//  console.log(res) //查看 response api  
			// 將後端的資料塞到 rate 裡面，[currencyTwo] 是抓取物件 keyValue
			let rate = res.rates[currencyTwo]
			// 用 console.log(rate) 查看是否有抓到 keyValue

			// 將匯率轉換後的值塞到 amountTwo dom 裡面，並4捨5入取到第2位
			$('#amountTwo').val(($('#amountOne').val() * rate).toFixed(2))

			// 將轉換的匯率顯示在各匯率之間
			$('#rate').text(`1 ${currencyOne} = ${currencyTwo} * ${rate}`)
		})
}


// 將 dom 切割成小事件
// 監聽 currencyOne 選取值
$('#currencyOne').change(function(){
	caclulate()
})

// 監聽 amountOne 選取值
$( '#amountOne').change(function(){
	caclulate()
})

// 監聽 currencyTwo 選取值
$( '#currencyTwo').change(function(){
	caclulate()
})

// 按下 swap dom 會將匯率對調
$('#swap').click(function(){
	let temp = $('#currencyOne').val()
	$('#currencyOne').val($('#currencyTwo').val())
	$('#currencyTwo').val(temp)
	caclulate()
})

// 執行
caclulate()
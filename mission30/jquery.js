const attractions = [
  '客家大院',
  '後龍鎮半天寮休閒文化園區 - 好望角',
  '天空之城',
  '九華山 天空步道',
  '苗栗客家圓樓',
  '雅聞七里香玫瑰森林',
  '龍騰斷橋(魚藤坪斷橋)',
  '飛牛牧場',
  '銅鑼炮仗花海公園',
  '舊銅鑼隧道',
]

let listItems = []
creatListItem()
function creatListItem() {
  ;[...attractions]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((goal, index) => {
      const dragIndex = $('<li></li>').attr('data-dragIndex', index)
      dragIndex.html(`<span class='number'>${index + 1}</span>`)

      const listItem = $('<li></li>').attr('data-list', index)
      listItem.html(`
    <div class='draggable' draggable='true'>
      <p class='goal-name'>${goal}</p>
      <i class='fas fa-grip-lines'></i>
    </div>
    `)
      $('#dragIndex').append(dragIndex)
      $('#draggable-list').append(listItem)
    })
}

$('#draggable-list').sortable()
$('#draggable-list').disableSelection()

// $('#check').on('click', checkOrder)

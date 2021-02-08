const draggableList = document.querySelector('#draggable-list')
const checkBtn = document.querySelector('#check-btn')

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

let dragStartIndex
const listItems = []

creatListItem()

function creatListItem() {
  ;[...attractions]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement('li')
      listItem.setAttribute('dragIndex', index) //這不是設定className，單純的 name 跟 value

      listItem.innerHTML = `
    <span class='number'>${index + 1}</span>
    <div class='draggable' draggable='true'>
      <p class='person-name'>${person}</p>
      <i class='fas fa-grip-lines'></i>
    </div>
    `
      listItems.push(listItem)
      draggableList.appendChild(listItem)
    })

  addEventListeners()
}

function dragStart() {
  // console.log('Event: ', 'dragStart')
  //拖曳的時候抓取索引值
  dragStartIndex = +this.closest('li').getAttribute('dragIndex') //上面設定索引值，這裡抓索引值，+ 號改型別用
  // console.log(dragStartIndex)
  // console.log(typeof dragStartIndex)
}

function dragEnter() {
  // console.log('Event: ', 'dragEnter')
  this.classList.add('over')
}

function dragLeave() {
  // console.log('Event: ', 'dragLeave')
  this.classList.remove('over')
}

function dragOver(e) {
  // console.log('Event: ', 'dragOver')
  e.preventDefault()
}

function dragDrag() {
  // console.log('Event: ', 'dragDrag')
  const dragEndIndex = +this.getAttribute('dragIndex')
  swapItems(dragStartIndex, dragEndIndex)
  this.classList.remove('over')
}

// 拖曳時可以替換
function swapItems(from, to) {
  const itemOne = listItems[from].querySelector('.draggable')
  const itemTwo = listItems[to].querySelector('.draggable')

  listItems[from].appendChild(itemTwo)
  listItems[to].appendChild(itemOne)
}

function checkOrder() {
  listItems.forEach((listItem, index) => {
    const personName = listItem.querySelector('.draggable').innerText.trim()

    if (personName !== attractions[index]) {
      listItem.classList.add('wrong')
    } else {
      listItem.classList.remove('wrong')
      listItem.classList.add('right')
    }
  })
}

function addEventListeners() {
  const draggables = document.querySelectorAll('.draggable')
  const dragListItems = document.querySelectorAll('.draggable-list li') //選到 ul 底下所有 li

  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', dragStart)
  })

  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('drop', dragDrag)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
  })
}

checkBtn.addEventListener('click', checkOrder)

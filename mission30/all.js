const draggableList = document.querySelector('#draggable-list')
const checkBtn = document.querySelector('#check-btn')

const richestPeople = [
  'Jeff Bezos',
  'Bill Gates',
  'Warren Buffett',
  'Bernard Arnault',
  'Carlos Slim Helu',
  'Amancio Ortega',
  'Larry Ellison',
  'Mark Zuckerberg',
  'Michael Bloomberg',
  'Larry Page',
]

let dragStarIndex
const listItems = []

creatListItem()

function creatListItem() {
  ;[...richestPeople]
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
      draggableList.append(listItem)
    })

  addEventListener()
}

function addEventListener() {
  const draggables = document.querySelectorAll('.draggable')
  const dragListItems = document.querySelectorAll('.draggable-list li') //選到 ul 底下所有 li

  draggables.forEach((draggables) => {
    draggables.addEventListener('dragstart', dragStart)
  })

  dragListItems.forEach((item) => {
    item.addEventListener('dragover', dragOver)
    item.addEventListener('drag', dragDrag)
    item.addEventListener('dragenter', dragEnter)
    item.addEventListener('dragleave', dragLeave)
  })
}

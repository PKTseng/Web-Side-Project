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
      listItem.setAttribute('dragIndex', index)

      listItem.innerHTML = `
    <span class='number'>${index}+1</span>
    <div class='draggable' draggable='true'>
      <p class='person-name'>${person}</p>
      <i class='fas fa-grip-lines'></i>
    </div>
    `
      listItems.push(listItem)
      draggableList.append(listItem)
    })
}

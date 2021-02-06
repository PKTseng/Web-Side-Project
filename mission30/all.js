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

creatListItem()

function creatListItem() {
  ;[...richestPeople].forEach((person, index) => {
    const listItem = document.createElement('li')
    listItem.setAttribute('dragIndex', index)

    listItem.innerHTML = `
    <span class='number'>${index}+1</span>
    <div class='draggable' draggable='true'>
      <p class='person-name'>${person}</p>
      <i class='fas fa-grip-lines'></i>
    </div>
    `
  })
}

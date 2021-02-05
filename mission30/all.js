const addBtn = document.querySelectorAll('.add-btn:not(.solid)')
const saveItemBtn = document.querySelectorAll('.solid')
const addContainers = document.querySelectorAll('.add-container')
const addItems = document.querySelectorAll('.add-item')
const listColumn = document.querySelectorAll('.drag-item-list')
const backLogListEl = document.querySelector('#backlog-list')
const progressListEl = document.querySelector('#progress-list')
const completeListEl = document.querySelector('#complete-list')
const onHoldListEl = document.querySelector('#on-hold-list')

// 初始化陣列

let backLogListArray = []
let progressListArray = []
let completeListArray = []
let onHoldListArray = []
let ListArrays = []

let updateOnLoad = false

function getSaveColumns() {
  if (localStorage.getItem('backLogItems')) {
    backlogListArray = JSON.parse(localStorage.backlogItems)
    progressListArray = JSON.parse(localStorage.progressItems)
    completeListArray = JSON.parse(localStorage.completeItems)
    onHoldListArray = JSON.parse(localStorage.onHoldItems)
  } else {
    // 設定初始值，不然每個欄位都是空的
    backLogListArray = ['Release the course', 'Sit back and relax']
    progressListArray = ['Work on projects', 'Listen to music']
    completeListArray = ['Being cool', 'Getting stuff done']
    onHoldListArray = ['Being uncool']
  }
}

//  設定 localStorage 的 key 跟　value
function updateSavedColumns() {
  // localStorage.setItem('backLogItems', JSON.stringify(backLogListArray))
  // localStorage.setItem('progressListItems', JSON.stringify(progressListArray))
  // localStorage.setItem('completeListItems', JSON.stringify(completeListArray))
  // localStorage.setItem('onHoldListItems', JSON.stringify(onHoldListArray))

  // 將上面4行改寫成下面型式
  let ListArrays = [
    backLogListArray,
    progressListArray,
    completeListArray,
    onHoldListArray,
  ]

  const arrayNames = ['backLog', 'progress', 'complete', 'onHold']
  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(`${arrayName}Items`, JSON.stringify(ListArrays[index]))
  })
}
// getSaveColumns()
// updateSavedColumns()

function createdItemEl(columnEl, column, item, index) {
  console.log('columnEl', columnEl)
  console.log('column', column)
  console.log('item', item)
  console.log('index', index)
  const listEl = document.createElement('li')
  listEl.classList.add('drag-item')
}

function updateDOM() {
  if (!updateOnLoad) {
    getSaveColumns()
  }
  backLogListEl.textContent = ''
  // 把陣列中每一新增的值，用 JS 語法產生 DOM 元素，再把新增的值綁定到 DOM 上
  // Backlog Column
  backLogListArray.forEach((backLogItem, index) => {
    createdItemEl(backLogListEl, 0, backLogItem, index)
  })

  progressListEl.textContent = ''
  progressListArray.forEach((progressItem, index) => {
    createdItemEl(progressListEl, 1, progressItem, index)
  })

  completeListEl.textContent = ''
  completeListArray.forEach((completeItems, index) => {
    createdItemEl(completeListEl, 2, completeItems, index)
  })

  onHoldListEl.textContent = ''
  onHoldListArray.forEach((onHoldItem, index) => {
    createdItemEl(onHoldListEl, 3, onHoldItem, index)
  })
  // updateOnLoad = true
}
updateDOM()

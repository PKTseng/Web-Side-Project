const addBtn = document.querySelectorAll('.add-btn:not(.solid)')
const saveItemBtn = document.querySelectorAll('.solid')
const addContainerBtn = document.querySelectorAll('.add-container')
const addItemBtn = document.querySelectorAll('.add-item')
const itemList = document.querySelectorAll('.drag-item-list')
const backLogListEl = document.querySelector('#backlog-list')
const progressListEl = document.querySelector('#progress-list')
const completeListEl = document.querySelector('#complete-list')
const onHoldListEl = document.querySelector('#on-hold-list')

// 初始化陣列
let backLogListArray = []
let progressListArray = []
let completeListArray = []
let onHoldListArray = []

function getSaveColumns() {
  if (localStorage.getItem('backLogItems')) {
    backLogListArray = JSON.parse(localStorage.backLogItems)
    progressListArray = JSON.parse(localStorage.progressListItems)
    completeListArray = JSON.parse(localStorage.completeListItems)
    onHoldListArray = JSON.parse(localStorage.onHoldListItems)
  } else {
    // 設定初始值
    backLogListArray = ['Release the course', 'Sit back and relax']
    progressListArray = ['Work on projects', 'Listen to music']
    completeListArray = ['Being cool', 'Getting stuff done']
    onHoldListArray = ['Being uncool']
  }
}
getSaveColumns()

//  設定 localStorage 的 key 跟　value
function updateSavedColumns() {
  localStorage.setItem('backLogItems', JSON.stringify(backLogListArray))
  localStorage.setItem('progressListArray', JSON.stringify(progressListArray))
  localStorage.setItem('completeListArray', JSON.stringify(completeListArray))
  localStorage.setItem('onHoldListArray', JSON.stringify(onHoldListArray))
}

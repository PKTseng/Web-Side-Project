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
let ListArrays = []

function getSaveColumns() {
  if (localStorage.getItem('backLogItems')) {
    backLogListArray = JSON.parse(localStorage.backLogItems)
    progressListArray = JSON.parse(localStorage.progressListItems)
    completeListArray = JSON.parse(localStorage.completeListItems)
    onHoldListArray = JSON.parse(localStorage.onHoldListItems)
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

getSaveColumns()
updateSavedColumns()

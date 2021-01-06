let data = [
  {
    id: 1,
    isEdit: false,
    checked: false,
    fullName: 'Nguyễn Văn Nam',
    gender: 'Nữ',
    age: 12,
  },
  {
    id: 2,
    isEdit: false,
    checked: false,
    fullName: 'Nguyễn Văn Nam',
    gender: 'Nam',
    age: 12,
  },
  {
    id: 3,
    isEdit: true,
    checked: true,
    fullName: 'Nguyễn Văn Nam',
    gender: 'Nữ',
    age: 12,
  }
]



const createReadOnlyTr = item => {
  const gender = item.gender === 'male' ? 'Nam' : 'Nữ'

  const html =`
    <tr>
      <td>
        <div class="mb-3 form-check">
          <input onclick="tickRow(${item.id})" type="checkbox" ${item.checked ? 'checked' : ''} class="form-check">
        </div>
      </td>
      <td>${item.id}</td>
      <td>${item.fullName}</td>
      <td>${item.gender}</td>
      <td>${item.age}</td>
      <td>
          <button class="btn btn-info" onclick="setEdit(${item.id}, ${item.isEdit})">Edit</button>
          <button class="btn btn-danger" onclick="deleteItem(${item.id}, this)">Delete</button>
      </td>
    </tr>
  `
  return html
}

const creatIsEdit = item => {
  const gender = item.gender === 'male' ? 'Nam' : 'Nữ'

  const html =`
    <tr class="is-edit">
      <td>
        <div class="mb-3 form-check">
          <input type="checkbox" ${item.checked ? 'checked' : ''} class="form-check">
        </div>
      </td>
      <td>
        <input class="from-control" value="${item.id}" disabled>
      </td>
      <td>
        <input class="from-control" value="${item.fullName}">
      </td>
      <td>
        <select class="from-select">
          <option value="Nữ" ${gender === 'Nữ' ? 'checked' : ''}>Nữ</option>
          <option value="Nam" ${gender === 'Nam' ? 'checked' : ''}>Nam</option>
        </select>
      </td>
      <td>
        <input class="from-control" value="${item.age}">
      </td>
      <td>
          <button class="btn btn-primary" onclick="saveRow(event, ${item.id})">Save</button>
          <button class="btn btn-warning" onclick="setEdit(${item.id}, ${item.isEdit})">Cancel</button>
          <button class="btn btn-danger" onclick="deleteItem(${item.id}, this)">Delete</button>
      </td>
    </tr>
  `
  return html
}

const render = () => {
  const table = document.getElementById('table-body')
  let html = ''

  data.forEach(item => {
    html += item.isEdit ? creatIsEdit(item) : createReadOnlyTr(item)
  })

  table.innerHTML = html
}

function tickRow (id) {
  const item = data.find(row => row.id === id)
  item.checked = !item.checked
}

function setEdit (id, isedit) {
  const item = data.find(row => row.id === id)
  item.isEdit = !isedit

  render()
}

const deleteItem = (id, button) => {
  data = data.filter(item => item.id != id)
  const tr = button.closest('tr')
  tr.parentNode.removeChild(tr)
}

function saveRow (event, id) {
  const item = data.find(row => row.id === id)

  const tr = event.target.closest('tr')
  const inputFullName = tr.querySelector('td:nth-child(3) input')
  const inputGender = tr.querySelector('td:nth-child(4) select')
  const inputAge = tr.querySelector('td:nth-child(5) input')

  inputFullName.disabled = true
  inputGender.disabled = true
  inputAge.disabled = true

  item.fullName = inputFullName.value
  item.gender = inputGender.value
  item.age = inputAge.value

}

function getIdNew (array) {
  let max = 0
  array.forEach(item => {
    item.id > max ? max = item.id : max
  })
  return max + 1
}
const addNewRecord = () => {
  const table = document.getElementById('table-body')
  const id = getIdNew(data)
  const html =`
    <tr class="is-edit">
      <td>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check">
        </div>
      </td>
      <td>
        <input class="from-control" value="${id}" disabled>
      </td>
      <td>
        <input class="from-control" value="">
      </td>
      <td>
        <select class="from-select">
          <option value="Nữ">Nữ</option>
          <option value="Nam">Nam</option>
        </select>
      </td>
      <td>
        <input class="from-control" value="">
      </td>
      <td>
          <button class="btn btn-primary" onclick="saveRow(event, ${id})">Save</button>
          <button class="btn btn-warning" onclick="setEdit(${id})">Cancel</button>
      </td>
    </tr>
  `
  data.push({
    id: id,
    isEdit: true,
    checked: false,
    fullName: '',
    gender: '',
    age: '',
  })
  table.innerHTML += html
}

function deleteChecked () {
  const tbody = document.querySelector('tbody')
  const checkBox = tbody.querySelectorAll('tr td div input')

  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      const tr = checkBox[i].closest('tr')
      tr.parentNode.removeChild(tr)

      const inputId = tr.querySelector('td:nth-child(2) input')
      const id = inputId.value

      for (let j = 0; j < data.length; j++) {
        if (data[j].id === Number(id)) {
          data.splice(j, 1)
        }
      }
    }
  }
}

function checkAll () {
  const checkbox = document.getElementById('checkbox')
  const checkAll = checkbox.checked
  data.forEach(item => {
    item.checked = checkAll
  })
  render()
}

render()
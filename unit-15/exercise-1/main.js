const userList = [
  {
    id: 1,
    fullName: 'Bùi Quang Trường',
    gender: 'Nam',
    age: 22,
  },
  {
    id: 2,
    fullName: 'Nguyễn thị Anh',
    gender: 'Nữ',
    age: 13,
  },
  {
    id: 3,
    fullName: 'Nguyễn thị thư',
    gender: 'Nữ',
    age: 20,
  }
]

function renderListUser (array) {
  const tbody = document.querySelector('tbody')
  let html = ''
  array.forEach(item => {
    html += `
      <tr>
        <th scope="row"><input type="checkbox" value="${item.id}"></th>
        <td>${item.id}</td>
        <td><span class="text">${item.fullName}</span><input type="text" style="display: none" value="${item.fullName}"></td>
        <td><span class="text">${item.gender}</span>
            ${checkValueSelected(item.gender)}
        </td>
        <td><span class="text">${item.age}</span><input type="number" style="display: none" value="${item.age}"></td>
        <td class="action">
          <span class="save" onclick="onclickSaveEdit(this)" style="display: none">Save</span>
          <span class="cancel" onclick="onclickCancel(this)" style="display: none">cancel</span>
          <span class="edit" onclick="onclickEdit(this)">Edit</span>
          <span class="delete" onclick="deleteTr(this)">Delete</span>
        </td>
      </tr>
    `
  })
  tbody.innerHTML = html
}

function checkValueSelected (value) {
  if (value === 'Nam') {
    return `
      <select name="" style="display: none" id="gender">
        <option value="Nam" selected>Nam</option>
        <option value="Nữ">Nữ</option>
      </select>
    `
  } else {
    return `
      <select name="" style="display: none" id="gender">
          <option value="Nam" selected>Nam</option>
          <option value="Nữ">Nữ</option>
      </select>
    `
  }
}

renderListUser(userList)

function addUserList () {
  const tbody = document.querySelector('tbody')
  let id

  if (userList.length > 0) {
    let i = userList.length - 1
    id = Number(userList[i].id) + 1
  } else {
    id = 1
  }

  let html = `
      <tr>
        <th scope="row"><input type="checkbox" value=""></th>
        <td>${id}</td>
        <td><input type="text"></td>
        <td>
          <select id="gender">
            <option value="Nam" selected>Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </td>
        <td><input type="number"></td>
        <td class="action">
          <span class="save" onclick="onclickSaveAdd(this)">Save</span>
          <span class="cancel" onclick="onclickCancel(this)">cancel</span>
          <span class="edit" style="display: none">Edit</span>
          <span class="delete" onclick="deleteTr(this)">Delete</span>
        </td>
      </tr>
  `
  tbody.innerHTML += html
}

function onclickEdit (span) {
  const td = span.parentNode
  const tr = td.parentNode

  const calcel = tr.querySelector('tr td .cancel')
  calcel.style.display = 'inline-block'

  const save = tr.querySelector('tr td .save')
  save.style.display = 'inline-block'

  const edit = tr.querySelector('tr td .edit')
  edit.style.display = 'none'


  const input = tr.querySelectorAll('tr td input, select')
  for (let j = 0; j < input.length; j++) {
    input[j].style.display = 'block'
  }


  const text = tr.querySelectorAll('tr td .text')
  for (let i = 0; i < text.length; i++) {
    text[i].style.display = 'none'
  }
}


function onclickSaveAdd(span) {
  const td = span.parentNode
  const tr = td.parentNode

  const id = tr.querySelector('td').innerText
  const fullName = tr.querySelector('td input[type="text"]').value
  const gender = tr.querySelector('td select').value
  const age = tr.querySelector('td input[type="number"]').value

  userList.push({
    id: id,
    fullName: fullName,
    gender: gender,
    age: age,
  })
}

function onclickSaveEdit(span) {
  const td = span.parentNode
  const tr = td.parentNode

  const id = tr.querySelector('td').innerText
  const fullName = tr.querySelector('td input[type="text"]').value
  const gender = tr.querySelector('td select').value
  const age = tr.querySelector('td input[type="number"]').value

  for (let a = 0; a < userList.length; a++) {
    if (userList[a].id == id) {
      userList[a].id = id
      userList[a].fullName = fullName
      userList[a].gender = gender
      userList[a].age = age
    }
  }
}

function deleteTr (span) {
  const td = span.parentNode
  const tr = td.parentNode

  tr.parentNode.removeChild(tr)

  const id = tr.querySelector('td').innerText
  for (let i = 0; i < userList.length; i++) {
    if (userList[i].id == id) {
      userList.splice(i, 1)
    }
  }
}

function onclickCancel (span) {
  renderListUser(userList)
}

function deleteCheckbox () {
  const tbody = document.querySelector('tbody')
  const checkBox = tbody.querySelectorAll('tr th input')

  for (let i = 0; i < checkBox.length; i++) {
    if (checkBox[i].checked) {
      const id = checkBox[i].value
      const th = checkBox[i].parentNode
      const tr = th.parentNode
      tr.parentNode.removeChild(tr)

      for (let j = 0; j < userList.length; j++) {
        if (userList[j].id == id) {
          userList.splice(j, 1)
        }
      }
    }
  }
}

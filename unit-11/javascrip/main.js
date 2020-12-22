// Lesson 1
function getArray (array, n) {
  const newArray = []
  for (let i = 0; i < n; i++) {
    newArray.push(array)
  }
  return newArray
}
// lesson 2
function getArrayReverse (...array) {
  const arrayReverse = []
  for (let i = 0; i < array.length; i++) {
    arrayReverse.unshift(array[i])
  }
  return arrayReverse
}
// lesson 3
const array = [0, 1, false, 2, undefined, '', 3, null]

const deleteValueFalse = array.filter( function(array) {
  return array
})

// lesson 4
const data = [['a', 1], ['b', 2], ['c', 33]]
function getObjectFromArray (array) {
  const objectFromArray = {}
  for (let  i = 0;  i < array.length;  i++) {
    let value = `${array[i].slice(0, 2)}`
    let standardValue = value.replace(',', ': ')
    let key = standardValue.slice(0, 1)
    let valueObj = standardValue.slice(3)
    objectFromArray[key] = Number(valueObj)
  }
  return objectFromArray
}
// lesson 5
function getArraysAscending (...array) {
  array.sort()
  return array
}
// lesson 6
const dataObject = { a: 1 }
const dataArray = [1, 2, 3]
function getObject(object) {
  const a = {}
  if (object.__proto__ === Object.getPrototypeOf(a)) {
    return true
  } else {
    return false
  }
}
// lesson 7
const obj = { a: 1, b: 2, c: 3, d: 4 }
const {a, b, c, d} = obj
function getObjectNotPram (a, b) {
  const objNew = {}
	for (key in obj) {
		if (obj[key] != a && obj[key] != b) {
			objNew[key]= obj[key]
		}
	}
	return objNew
}
// lesson 8
function getArrayDelete (...array) {
  array.length >= 4 ? array.splice(1, 2) : 'The array must have more than 5 elements'
  return array
}
// leesson 9
const students = [
  { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
  { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
  { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
  { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
  { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
  { id: 6, name: 'Phí Duy Quân', score: 9.6 },
  { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
function getPassOrFail (student) {
  const arrayNew = []
  for (let i = 0; i < student.length; i++) {
    if (student[i].score > 5.0 && student[i].name.slice(student[i].name.indexOf(' ') + 1, student[i].name.lastIndexOf(' ')) != 'Duy') {
      arrayNew.push('Pass')
    } else {
      arrayNew.push('Fail')
    }
  }
  return arrayNew
}
// lesson 10
function getStudentsSelected (student) {
  const studentsSelected = []
  for (let i = 0; i < student.length; i++) {
    let stringScore = `${student[i].score}`
    let beforeDecimalPoint = stringScore.slice(0, stringScore.indexOf('.'))
    let alterDecimalPoint = stringScore.slice(stringScore.indexOf('.') + 1)
    if (Number(beforeDecimalPoint) + Number(alterDecimalPoint) > 5) {
      studentsSelected.push(student[i])
    }
  }
  return studentsSelected
}

// lesson 1
function printMultiplicationTable(number) {
  if (typeof(number) !== 'number') {
    return 'Data nhập vào phải là số'
  }
  for (let i = 1; i <= 10; i++) {
    console.log(number + ' x ' + i + ' = '+ number * i )
  }
}

// lesson 2
function getEvenNumber(n) {
  if (typeof(n) !== 'number' || n < 0 || n > 30) {
    return 'Data nhập vào phải là số nguyên dương lớn hơn 0 và nhỏ hơn 30'
  }
  for (let i = 2; i <= n; i += 2) {
    console.log(i);
  }
}

// lesson 3
function getNumberSum(n) {
  let sum = 0
  if (typeof(n) !== 'number' || n < 0 || n > 30) {
    return 'Data nhập vào phải là số nguyên dương lớn hơn 0 và nhỏ hơn 30'
  }
  for (let i = 1; i <= n; i++) {
    sum += i
  }
  console.log('Tổng = ' + sum)
}

// lesson 4
function getFactorial(n) {
  let factorial = 1
  if (typeof(n) !== 'number' || n < 0 || n > 30) {
    return 'Data nhập vào phải là số nguyên dương lớn hơn 0 và nhỏ hơn 30'
  }
  for (let i = 1; i <= n; i++) {
    factorial *= i
  }
  console.log(factorial)
}

// lesson 5
function getEvenNumberArray() {
  let evennumber = 0
  for (let i = 1; i < arguments.length; i++) {
    if (!(arguments[i] % 2)) {
      evennumber = evennumber + 1
    }
  }
  console.log(evennumber)
}

// lesson 6
function getLettersNotMatch() {
  const params = ['A', 'C', 'A', 'B', 'D', 'B', 'A', 'C', 'G', 'G']
  console.log(params)
  for (let i = 0; i < params.length; i++) {
    for (let j = i + 1; j < params.length; j++) {
      if (params[i] == params[j]) {
        params.splice(j, 1)
      }
    }
  }
  console.log(params)
}

// lesson 7
// const studentNames = [
//   { id: 1, name: 'Nguyễn Thị Tèo' },
//   { id: 2, name: 'Phạm Văn Bưởi' },
//   { id: 3, name: 'Hoàng Văn Nam' },
//   { id: 4, name: 'Vũ Ngọc Duy' },
//   { id: 5, name: 'Nguyễn Minh Nhật' },
//   { id: 6, name: 'Phí Duy Quân' },
//   { id: 7, name: 'Trần Minh Minh' }
// ]
// const studentScores = [
//   { id: 1, score: 9.2 },
//   { id: 2, score: 2.3 },
//   { id: 3, score: 3.7 },
//   { id: 4, score: 6.9 },
//   { id: 5, score: 5.2 },
//   { id: 6, score: 9.6 },
//   { id: 7, score: 6.1 }
// ]

// let students = studentNames.slice()

// lesson 8
// const students = [
//   { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
//   { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
//   { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
//   { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
//   { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
//   { id: 6, name: 'Phí Duy Quân', score: 9.6 },
//   { id: 7, name: 'Trần Minh Minh', score: 6.1 }
// ]

// function getCoreMaxMin() {
// }

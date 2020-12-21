// lesson 1
const arr1 = [1, 2, 3, 4]
const arr2 = [1, 2, 3, 4]
const arr3 = [1, 2, 3, 5]
const arr4 = [1, 2, 3, 4, 5]

function isEqual (array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array2.length; i++) {
      if (array1[i] !== array2[i]) {
        return false
      }
    }
  } else {
    return false
  }
  return true
}

// lesson 2
const array = [1, 2, [3, 4, [5]]]

function flatten (array) {
  const stringArray = `${array}`
  const arrayNew = []
  for (let i = 0; i < stringArray.length; i += 2) {
    arrayNew.push(Number(stringArray[i]))
  }
  return arrayNew
}

// lesson 3
const data = [1, 2, 3, 4, 5, 6, 7]

function chunk (datas, n) {
  const dataNew = []
  for (let i = 0; i < datas.length; i += n) {
    dataNew.push([datas.slice(i, i + n)])
  }
  return dataNew
}

// lesson 4
const intersection = (...arrays) => {
  if (!arrays.length) {
    return []
  }
  if (arrays.length === 1) {
    return arrays[0]
  }
  const [arr1, arr2] = arrays
  let result = []
  arr1.forEach(item1 => {
    arr2.forEach(item2 => {
      if (item2 === item1) {
        result.push(item1)
        arrays.splice(0, 2)
        const items = intersection(result, ...arrays)
        result = [...result, ...items]
      }
    })
  })
  return result
}
// lesson 5
dates = new Date(2019, 12, 10, 23, 18, 20)
function comperDate (date) {
  const dateOriginal = new Date(2020, 10, 30, 12, 30, 32)
  if (Date.parse(date) > dateOriginal) {
    return 'after'
  } else if (Date.parse(date) < dateOriginal) {
    return 'before'
  } else {
    return 'equals'
  }
}
// lesson 6
function regexEmail (email) {
  const regex = /^[a-zA-Z][a-zA-Z0-9._]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9]+)*$/
  return regex.test(email)
}
// lesson 7
function userName (name) {
  const regex = /^[a-z]([a-z0-9]_(?!_)|[a-z0-9]){1,9}[a-z]$/
  return regex.test(name)
}

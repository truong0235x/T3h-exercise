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
function deleteValueFalse (...array) {
	const arrayValueNew = []
	for (let i = 0;i < array.length; i++) {
		typeof(array[i]) !== 'number' || array[i] === 0 || typeof(array[i]) === 'string'  ?
		array.splice(i, 1) : arrayValueNew.push(array)
	}
	return arrayValueNew
}
// lesson 4

// lesson 5
function getArraysAscending (...array) {
	array.sort()
	return array
}
// lesson 6
function getObject(object) {
	const a = {}
	object.__proto__ === Object.getPrototypeOf(a) ? console.log(true) : console.log(false)
}
// lesson 7
// lesson 8
function getArrayDelete (...array) {
	array.length >= 4 ? array.splice(1,2) : 'The array must have more than 5 elements'
	return array
}
// leesson 9
// lesson 10
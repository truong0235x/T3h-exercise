// lesson 1
const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const currentTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`

document.getElementById('onmouse').onmouseover = function () {
	console.log(`Hover lúc: ${currentTime}`)
}
document.getElementById('onmouse').onmouseout = function () {
	console.log(`Out hover lúc: ${currentTime}`)
}
// lesson 2
document.getElementById('input').oninput = function () {
	const inputValue = document.getElementById('input').value
	const regex = /^[a-z0-9_]{0,}[^A-Z\.,!@#$%^&*()~+-][a-z0-9_]{0,}$/
	if (!(regex.test(inputValue))) {
		alert('Date a-z (lowercase), and the numbers 0-9, and an underscore')
	}
}
// lesson 3
document.getElementById('inputnumber').oninput = function () {
	const inputNumber = document.getElementById('inputnumber').value
	console.log(inputNumber)
	const regexNumber = /^1[^1-9]{0,3}$|^[0][0-9]{0,3}$/
	if (!(regexNumber.test(inputNumber))) {
		alert('Date numbers 0-9, and The maximum input amount is 1000')
	}
}
// lesson 4
document.getElementById('doubleclick').ondblclick = function () {
	alert('Double click')
}
// lesson 5
document.getElementById('onselect').onselect = function () {
	const values = document.getElementById('onselect').value
	alert(`${values}`)
}
// leeson 6
document.getElementById('select').onchange = function () {
	const value = document.getElementById('select').value
	console.log(value)
}

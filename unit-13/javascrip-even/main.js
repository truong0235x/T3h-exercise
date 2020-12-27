// exercise 1
function getCurrent () {
const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const hours = date.getHours()
const minutes = date.getMinutes()
const seconds = date.getSeconds()
const currentTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`

return currentTime
}

const onHoverDiv = event => {
  const currentTime = getCurrent()
  console.log(`Hover lúc: ${currentTime}`)
}

const onNotHoverDiv = event => {
  const currentTime = getCurrent()
  console.log(`Out hover lúc: ${currentTime}`)
}

// exercise 2
const checkAccount = event => {
  const value = event.target.value
  const regex = /^[a-z0-9_]+$/g
  const match = regex.test(value)

  if(!match) {
    alert('Account chỉ được phép chứa các ký tự sau...')
  }
}
// exercise 3
function checkAmount(event) {
    const value = event.target.value
    const regex = /^[0-9\.-]+$/g
    const match = regex.test(value)

    if (!regex.test(value)) {
        event.target.value = value.replace(/[^0-9\.]/g, '')
    }

    value = event.target.value
    if (Number(value) > 1000) {
        console.log('Max Amount 1000')
    }
}
// Example 4
const checkDoubleClick = () => alert('Double click')

// Example 5
const getText = () => {
  let text = "";
  text = window.getSelection()
  console.log(text.toString())
}

// Example 6
const getFluits = event => {
  console.log(event.target.options[event.target.selectedIndex].text)
}

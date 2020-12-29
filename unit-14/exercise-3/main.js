const timeLine = [
  {
    year: 1934,
    title: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis At vero eos et accusamus et iusto dignissimos ducimus qui blanditiis praesentium',
  },
  {
    year: 1937,
    title: 'Proin quam velit, efficitur vel neque vitae, rhoncus commodo mi. finibus mauris et bibendum molestie. Aenean ex augue, varius et pulvinar in, pretium non nisi.',
  },
  {
    year: 1940,
    title:'Proin iaculis, nibh eget efficitur varius, libero tellus porta dolor, at pulvinar tortor ex eget ligula. Integer eu dapibus arcu, sit amet sollicitudin eros.',
  },
]

const renderHtml = array => {
  const container = document.getElementById('container')
  let html = '<div id="timeline">'

  array.forEach(item => {
    if (!(item.year%2)){
      html += `
      <div id="message-right">
        <p>${item.year}</p>
        <span>${item.title}</span>
        <div class="circle"></div>
      </div>
      `
    } else {
      html += `
      <div id="message-left">
        <p>${item.year}</p>
        <span>${item.title}</span>
        <div class="circle-left"></div>
      </div>
      `
    }
  })
  html += '</div>'
  container.innerHTML = html
}

renderHtml(timeLine)
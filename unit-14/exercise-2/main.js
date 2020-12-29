const deepMenu = [
  {
    title: 'Home',
    subTitle: 'sweet home',
    link: '/home',
    icon: 'fa fa-home',
  },
  {
    title: 'About us',
    subTitle: 'sweet home',
    link: '/about-us',
    icon: 'fa fa-edit',
    isActive: true
  },
  {
    title: 'Features',
    subTitle: 'sweet home',
    link: '/features',
    icon: 'fa fa-gift',
  },
  {
    title: 'News',
    subTitle: 'sweet home',
    link: '/news',
    icon: 'fa fa-globe',
  },
  {
    title: 'Blog',
    subTitle: 'what they say',
    link: '/blog',
    icon: 'fad fa-comments',
    children: [
      {
        title: 'Mission',
        link: '/blog/mission',
        icon: 'fa fa-globe',
      },
      {
        title: 'Our Team',
        link: '/blog/our-team',
        icon: 'fas fa-users',
        children: [
          {
            title: 'Leyla Sparks',
            link: '/blog/our-team/leyla-sparks',
            icon: 'fa fa-female',
          },
          {
            title: 'Gleb Ismailov',
            link: '/blog/our-team/gleb-ismailov',
            icon: 'fa fa-male',
            children: [
              {
                title: 'About',
                link: '/blog/our-team/gleb-ismailov/about',
                icon: 'fa fa-leaf',
              },
              {
                title: 'Skills',
                link: '/blog/our-team/gleb-ismailov/skills',
                icon: 'fa fa-tasks',
              }
            ]
          },
          {
            title: 'Viktoria Gibbers',
            link: '/blog/our-team/viktoria-gibbers',
            icon: 'fa fa-female',
          },
        ]
      },
    ]
  },
  {
    title: 'Portfolio',
    subTitle: 'sweet home',
    link: '/portfolio',
    icon: 'fas fa-image',
  },
  {
    title: 'Contacts',
    subTitle: 'drop a line',
    link: '/contacts',
    icon: 'fas fa-envelope',
  },
]

const renderShallowMenuByNote = (parent, array) => {
  const menu = document.getElementById('deep-menu')
  const ulPerent = document.createElement('ul')
  ulPerent.className = 'list'

  array.forEach(item => {
    const li = document.createElement('li')
    li.className = 'list__item'

    const i = document.createElement('i')
    i.className = item.icon

    const a = document.createElement('a')
    a.href = item.link
    a.innerText = item.title

    if (item.subTitle) {
      const p = document.createElement('p')
      p.innerText = item.subTitle

      const div = document.createElement('div')
      div.className = 'isactive'

      li.appendChild(div)
      li.appendChild(i)
      li.appendChild(a)
      li.appendChild(p)
      li.addEventListener('click', function (event) {
        event.preventDefault()
        const isActives = li.querySelector('.isactive')
        if (isActives) {
          const display = isActives.style.display === 'block'
          if (display) {
            isActives.style.display = 'none'
          } else {
            isActives.style.display = 'block'
          }
        }
      })
    } else {
      li.appendChild(i)
      li.appendChild(a)
    }

    if (Array.isArray(item.children)) {
      renderShallowMenuByNote(li, item.children)
    }

    ulPerent.appendChild(li)
  })

  parent.appendChild(ulPerent)
}

const render = () => {
  const menu = document.getElementById('deep-menu')
  const ul = renderShallowMenuByNote(menu, deepMenu)

  const ulPerent = menu.querySelector('ul')
  const li = document.createElement('li')
  li.className = 'list__item'

  const divs = document.createElement('div')
  divs.className = 'list__item__search'

  const input = document.createElement('input')
  input.type = 'search'
  input.placeholder = 'search...'

  const icon = document.createElement('i')
  icon.className = 'fas fa-search'

  li.appendChild(divs)
  divs.appendChild(input)
  divs.appendChild(icon)

  ulPerent.appendChild(li)

}

render()

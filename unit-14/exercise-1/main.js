const shallowMenu = [
  {
    title: 'Dashboard',
    link: '/dashboard',
    children: [
      {
        title: 'Tool',
        link: '/dashboard/tool'
      },
      {
        title: 'Reports',
        link: '/dashboard/reports'
      },
      {
        title: 'Analytics',
        link: '/dashboard/analytics'
      },
      {
        title: 'Code Blocks',
        link: '/dashboard/code-blocks'
      },
    ]
  },
  {
    title: 'Sales',
    link: '/sales',
    children: [
      {
        title: 'New Sales',
        link: '/sales/new-sales'
      },
      {
        title: 'Expired Sales',
        link: '/sales/expired-sales'
      },
      {
        title: 'Sales Reports',
        link: '/sales/sales-reports'
      },
      {
        title: 'Deliveries',
        link: '/sales/deliveries'
      },
    ]
  },
  {
    title: 'Messages',
    link: '/messages',
    children: [
      {
        title: 'Inbox',
        link: '/messages/inbox'
      },
      {
        title: 'Outbox',
        link: '/messages/outbox'
      },
      {
        title: 'Sent',
        link: '/messages/sent'
      },
      {
        title: 'Archived',
        link: '/messages/archived'
      },
    ]
  },
  {
    title: 'Users',
    link: '/users',
    children: [
      {
        title: 'New User',
        link: '/users/new-user'
      },
      {
        title: 'User Groups',
        link: '/users/user-groups'
      },
      {
        title: 'Permissions',
        link: '/users/permissions'
      },
      {
        title: 'passwords',
        link: '/users/passwords'
      },
    ]
  },
  {
    title: 'Settings',
    link: '/settings',
    children: [
      {
        title: 'Databases',
        link: '/settings/databases'
      },
      {
        title: 'Design',
        link: '/settings/design'
      },
      {
        title: 'Change User',
        link: '/settings/change-user'
      },
      {
        title: 'Log Out',
        link: '/settings/log-out'
      },
    ]
  },
]

const divContainer = document.createElement('div')
divContainer.className = 'container'

document.querySelector('body').appendChild(divContainer)

const divContainerWrapper = document.createElement('div')
divContainerWrapper.className = 'container__wrapper'

divContainer.appendChild(divContainerWrapper)

const ulContainerWrapperList = document.createElement('ul')
ulContainerWrapperList.className = 'container__wrapper__list'

divContainerWrapper.appendChild(ulContainerWrapperList)

function renderHtml (data) {
  let liContainerWrapperListItem = document.createElement('li')
  liContainerWrapperListItem.className = 'container__wrapper__list__item'

  ulContainerWrapperList.appendChild(liContainerWrapperListItem)

  let aContainerWrapperListItem = document.createElement('a')

  liContainerWrapperListItem.appendChild(aContainerWrapperListItem)

  let ulListChild = document.createElement('ul')
  ulListChild.className = 'list__child'

  ulContainerWrapperList.appendChild(ulListChild)

  let li1 = document.createElement('li')
  let li2 = document.createElement('li')
  let li3 = document.createElement('li')
  let li4 = document.createElement('li')

  li1.className = 'list__child__item'
  li2.className = 'list__child__item'
  li3.className = 'list__child__item'
  li4.className = 'list__child__item'

  ulListChild.appendChild(li1)
  ulListChild.appendChild(li2)
  ulListChild.appendChild(li3)
  ulListChild.appendChild(li4)

  let a1 = document.createElement('a')
  let a2 = document.createElement('a')
  let a3 = document.createElement('a')
  let a4 = document.createElement('a')

  li1.appendChild(a1)
  li2.appendChild(a2)
  li3.appendChild(a3)
  li4.appendChild(a4)

  aContainerWrapperListItem.innerText = data.title
  aContainerWrapperListItem.href = `${data.link}`

  a1.innerText = `${data.children[0].title}`
  a2.innerText = `${data.children[1].title}`
  a3.innerText = `${data.children[2].title}`
  a4.innerText = `${data.children[3].title}`

  a1.href = `${data.children[0].link}`
  a2.href = `${data.children[1].link}`
  a3.href = `${data.children[2].link}`
  a4.href = `${data.children[3].link}`
  return {
    liContainerWrapperListItem,
    aContainerWrapperListItem,
    li1,
    a1,
    li2,
    a2,
    li3,
    a3,
    li4,
    a4
  }
}
const arrayMenu = shallowMenu.map(renderHtml)

for (let i = 0; i <= 4; i++) {
  const child = document.getElementsByClassName('list__child')[i].style.display = 'none'
}

const listItem = document.getElementsByClassName('container__wrapper__list__item')

listItem[4].id = 'settings'

let itemChild = document.getElementsByClassName('list__child')

for (let j = 0; j < listItem.length; j++) {
  listItem[j].onclick = function (event) {
    event.preventDefault()
    const angle = document.getElementsByClassName('angle')[j]
    angle.setAttribute('style', 'transform: rotate(90deg)')
    const child = document.getElementsByClassName('list__child')[j].style.display
    if (child === 'none') {
      document.getElementsByClassName('list__child')[j].style.display = 'block'
    } else {
      angle.setAttribute('style', 'transform: rotate(0deg)')
      document.getElementsByClassName('list__child')[j].style.display = 'none'
    }
  }
}


let listA = document.querySelectorAll('.container__wrapper__list__item a')

const tachometer = document.createElement('i')
tachometer.className = 'fal fa-tachometer-alt-fast icon'

const truck = document.createElement('i')
truck.className = 'fas fa-truck icon'

const envelope = document.createElement('i')
envelope.className = 'fas fa-envelope icon'

const user = document.createElement('i')
user.className = 'fas fa-user-friends icon'

const cogs = document.createElement('i')
cogs.className = 'fas fa-cogs icon'

listItem[0].insertBefore(tachometer, listA[0])
listItem[1].insertBefore(truck, listA[1])
listItem[2].insertBefore(envelope, listA[2])
listItem[3].insertBefore(user, listA[3])
listItem[4].insertBefore(cogs, listA[4])

for (let index = 0; index < listItem.length; index++) {
  const angleRight = document.createElement('i')
  angleRight.className = 'fas fa-angle-right angle'
  listA[index].appendChild(angleRight)
}

const shallowMenu = [
  {
    icon:'fal fa-tachometer-alt-fast icon',
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
    icon:'fas fa-truck icon',
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
    icon:'fas fa-envelope icon',
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
    icon:'fas fa-user-friends icon',
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
    icon:'fas fa-cogs icon',
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

const render = (array) => {
  const menu = document.getElementById('shallow-menu')

  let html ='<ul class="list">'

  array.forEach(item => {
    html += `
    <li class="list__item">
      <i class="${item.icon}"></i>
      <a href="${item.link}">${item.title}</a>
      <i class="fas fa-angle-right angle" onclick="toggleMenu(this)"></i>
    `
    if (Array.isArray(item.children)) {
      html += '<ul id="ul" class="list__child">'
      item.children.forEach(child => {
        html += `
        <li class="list__child__item">
          <a href="${child.link}">${child.title}</a>
        </li>
        `
      })
      html += '</ul>'
    }
    html += '</li>'
  });
  html += '</ul>'
  menu.innerHTML = html
}

render(shallowMenu)

const toggleMenu = span => {
  const li = span.parentNode
  const ul = li.querySelector('ul')
  const angle = li.querySelector('.angle')
  angle.setAttribute('style', 'transform: rotate(90deg)')
    if(ul) {
      const isDisplayed = ul.style.display === 'block'
      if(isDisplayed) {
        ul.style.display = 'none'
        angle.setAttribute('style', 'transform: rotate(0deg)')
      }else{
        ul.style.display = 'block'
      }
    }
}

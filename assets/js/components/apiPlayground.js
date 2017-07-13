import { initialize as initRestPlayground } from './restPlayground'
import { initialize as initGraphqlPlayground } from './graphqlPlayground'

export function initialize () {
  if (!document.querySelector('.api')) {
    return false
  }

  initRestPlayground()
  initGraphqlPlayground()

  // Handle REST/GraphQL tabs
  const tabLinks = document.querySelectorAll('.api .tab')
  Array.from(tabLinks).forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const contents = event.currentTarget.dataset.contents

      Array.from(document.querySelectorAll('.api .contents, .api .tab')).forEach(item => {
        if (item.classList.contains(contents)) {
          item.classList.add('active')
        } else {
          item.classList.remove('active')
        }
      })
    })
  })
}

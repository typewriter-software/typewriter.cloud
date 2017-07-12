import 'whatwg-fetch'
import highlight from 'highlight.js'
import json from 'highlight.js/lib/languages/json'
import escaper from 'html-escaper'

highlight.registerLanguage('json', json)

export function initialize () {
  const loadData = (url) => {
    window.fetch(url).then((response) => {
      return response.json()
    }).then((data) => {
      const dataString = escaper.escape(JSON.stringify(data, null, 2))
      document.querySelector('.api .rest .data-container').innerHTML = dataString
      highlight.highlightBlock(document.querySelector('.api .rest .data-container'))
    })
  }

  // Make initial request for user's projects
  loadData('https://api.typewriter.cloud/typewriter')

  // Handle clicks
  const restLinks = document.querySelectorAll('.api .rest a')
  Array.from(restLinks).forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault()
      const link = parseInt(event.currentTarget.dataset.link)
      for (let i = 1; i < 5; i++) {
        if (i <= link) {
          document.querySelector('.api .rest .link a[data-link="' + i + '"]').classList.add('active')
        } else {
          document.querySelector('.api .rest .link a[data-link="' + i + '"]').classList.remove('active')
        }
      }
      loadData(event.currentTarget.attributes.href.value)
    })
  })
}

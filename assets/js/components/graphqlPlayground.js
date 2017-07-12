import 'whatwg-fetch'
import highlight from 'highlight.js'
import json from 'highlight.js/lib/languages/json'
import escaper from 'html-escaper'

highlight.registerLanguage('json', json)

const QUERY_1 = `query {
  projects(username: "typewriter")
}`

const QUERY_2 = `query {
  projects(username: "typewriter"),
  project(username: "typewriter", slug: "typewriter-cloud") {
    pages {
      title,
      slug
    }
  }
}`

const QUERY_3 = `query {
  projects(username: "typewriter"),
  project(username: "typewriter", slug: "typewriter-cloud") {
    pages(slug: "home") {
      title,
      slug,
      fields {
        slug,
        value
      }
    }
  }
}`

const allQueries = {
  '1': QUERY_1,
  '2': QUERY_2,
  '3': QUERY_3
}

// const queryStrings = {
//   q1:
// }

export function initialize () {
  const dataContainer = document.querySelector('.api .graphql .data-container')
  const loadData = (query) => {
    window.fetch('https://api.typewriter.cloud/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: query })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      const dataString = escaper.escape(JSON.stringify(data, null, 2))
      dataContainer.innerHTML = dataString
      highlight.highlightBlock(dataContainer)
    })
  }

  // Make initial request for user's projects
  loadData(QUERY_1)

  // Handle clicks
  const queries = document.querySelectorAll('.api .graphql .q')
  Array.from(queries).forEach(query => {
    query.addEventListener('click', (event) => {
      event.preventDefault()
      const query = parseInt(event.currentTarget.dataset.query)
      for (let i = 1; i < 4; i++) {
        Array.from(document.querySelectorAll('.api .graphql .q[data-query="' + i + '"]')).forEach(item => {
          if (i <= query) {
            item.classList.add('active')
          } else {
            item.classList.remove('active')
          }
        })
      }
      loadData(allQueries[query])
    })
  })
}

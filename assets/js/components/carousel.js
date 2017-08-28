
export function initialize () {
  if (!document.querySelector('.carousel-container')) {
    return false
  }

  // Handle clicks
  const items = document.querySelectorAll('.carousel-container .item')
  Array.from(items).forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault()
      const video = event.currentTarget.dataset.video
      document.querySelector('.carousel-container .carousel .item').innerHTML = '<iframe src=" ' + video + '", frameborder="0", webkitallowfullscreen, mozallowfullscreen, allowfullscreen></iframe>'

      if (item.classList.contains('thumbnail-item')) {
        Array.from(items).forEach(item => {
          item.classList.remove('active')
        })
        event.currentTarget.classList.add('active')
      }
    })
  })
}

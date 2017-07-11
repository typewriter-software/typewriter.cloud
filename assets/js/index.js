const particles = require('./components/particles')

var _init = function () {
  particles.initialize()
}

document.addEventListener('DOMContentLoaded', _init, false)

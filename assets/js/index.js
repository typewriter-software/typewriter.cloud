import { initialize as initParticles } from './components/particles'
import { initialize as initApiPlayground } from './components/apiPlayground'
import { initialize as initCarousel } from './components/carousel'

var _init = function () {
  initParticles()
  initApiPlayground()
  initCarousel()
}

document.addEventListener('DOMContentLoaded', _init, false)

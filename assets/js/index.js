import { initialize as initParticles } from './components/particles'
import { initialize as initApiPlayground } from './components/apiPlayground'

var _init = function () {
  initParticles()
  initApiPlayground()
}

document.addEventListener('DOMContentLoaded', _init, false)

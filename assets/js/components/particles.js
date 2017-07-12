require('particles.js')

export function initialize () {
  window.particlesJS('particles', {
    'particles': {
      'number': {
        'value': 33,
        'density': {
          'enable': true,
          'value_area': 868.0624057955
        }
      },
      'color': {
        'value': '#2e3192'
      },
      'shape': {
        'type': 'circle',
        'stroke': {
          'width': 0,
          'color': '#ffffff'
        },
        'polygon': {
          'nb_sides': 8
        },
        'image': {
          'src': 'img/github.svg',
          'width': 100,
          'height': 100
        }
      },
      'opacity': {
        'value': 0.5,
        'random': false,
        'anim': {
          'enable': true,
          'speed': 0.48724632738080703,
          'opacity_min': 0.1,
          'sync': false
        }
      },
      'size': {
        'value': 4.008530152163807,
        'random': true,
        'anim': {
          'enable': false,
          'speed': 40,
          'size_min': 0.1,
          'sync': false
        }
      },
      'line_linked': {
        'enable': false,
        'distance': 240.5118091298284,
        'color': '#dec2c2',
        'opacity': 0.4,
        'width': 1
      },
      'move': {
        'enable': true,
        'speed': 6,
        'direction': 'none',
        'random': true,
        'straight': false,
        'out_mode': 'out',
        'bounce': false,
        'attract': {
          'enable': false,
          'rotateX': 600,
          'rotateY': 1200
        }
      }
    },
    'interactivity': {
      'detect_on': 'canvas',
      'events': {
        'onhover': {
          'enable': true,
          'mode': 'repulse'
        },
        'onclick': {
          'enable': true,
          'mode': 'push'
        },
        'resize': true
      },
      'modes': {
        'grab': {
          'distance': 400,
          'line_linked': {
            'opacity': 1
          }
        },
        'bubble': {
          'distance': 400,
          'size': 40,
          'duration': 2,
          'opacity': 8,
          'speed': 3
        },
        'repulse': {
          'distance': 200,
          'duration': 0.4
        },
        'push': {
          'particles_nb': 4
        },
        'remove': {
          'particles_nb': 2
        }
      }
    },
    'retina_detect': true
  })
}

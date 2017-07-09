const Records = require('spike-records')
const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const jsStandards = require('spike-js-standards')
const pageId = require('spike-page-id')

const env = process.env.NODE_ENV
const locals = {}

module.exports = {
  devtool: 'source-map',
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    root: './views',
    locals: (ctx) => Object.assign(locals, { pageId: pageId(ctx) }),
    minify: env === 'production'
  }),
  postcss: cssStandards({
    minify: env === 'production',
    warnForDuplicates: env !== 'production'
  }),
  plugins: [
    new Records({
      addDataTo: locals,
      pages: {
        url: 'https://api.typewriter.cloud/typewriter/typewriter-cloud/pages',
        transform: (data) => {
          // For easier template access, create lookup objects for pages and page fields
          var pagesObject = {}
          data.forEach(function(page) {
            fieldsObject = {}
            page.fields.forEach(function (field) {
              fieldsObject[field.slug] = field
            });
            page.fields = fieldsObject
            pagesObject[page.slug] = page
          })

          return pagesObject
        }
      },
      blog: {
        url: 'https://api.typewriter.cloud/typewriter/typewriter-cloud/types/posts',
        template: {
          path: 'views/post.sgr',
          output: (post) => { return `blog/${post.slug}.html` },
          transform: (data) => { return data }
        }
      }
    })
  ],
  babel: jsStandards(),
  server: {
    open: false
  }
}

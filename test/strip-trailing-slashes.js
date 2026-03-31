const t = require('tap')
const stripTrailingSlashes = require('../lib/strip-trailing-slashes.js')

const cases = {
  '/': '',
  '////': '',
  'c:///a/b/c': 'c:///a/b/c',
  '\\\\foo\\bar\\baz': '\\\\foo\\bar\\baz',
  '//foo//bar//baz': '//foo//bar//baz',
  'c:\\c:\\c:\\c:\\\\d:\\e/f/g': 'c:\\c:\\c:\\c:\\\\d:\\e/f/g',
}

for (const [input, stripped] of Object.entries(cases))
  t.strictSame(stripTrailingSlashes(input), stripped, input)

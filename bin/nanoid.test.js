let { test } = require('uvu')
let { is, match } = require('uvu/assert')
let { promisify } = require('util')
let { join } = require('path')
let child = require('child_process')

let exec = promisify(child.exec)

test('prints unique ID', async () => {
  let { stdout, stderr } = await exec('node ' + join(__dirname, 'nanoid.cjs'))
  is(stderr, '')
  match(stdout, /^[\w-]{21}\n$/)
})

test.run()

const expect = require('chai').expect

const exec = require('child_process').exec
const bcc = 'node.exe ./src/main.js'

describe('Main CLI', () => {
  it('should return version of bcc', done => {
    exec(`${bcc} --version`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.replace('\n', '')).to.be.equal('1.0.0')
      done()
    })
  })
})

const expect = require('chai').expect

const exec = require('child_process').exec
const pkg = require('../package.json')

const bcc = 'node.exe ./src/main.js'

describe('Main CLI', () => {
  it('should return version of bcc', done => {
    exec(`${bcc} --version`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.replace('\n', '')).to.be.equal(pkg.version)
      done()
    })
  })

  it('should return the description when bcc --help', done => {
    exec(`${bcc} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('Convert Bitcoin to any currency defined')).to.be
        .true
      done()
    })
  })

  it('should return the currency option when bcc --help', done => {
    exec(`${bcc} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('--currency')).to.be.true
      done()
    })
  })

  it('should return the amount option when bcc --help', done => {
    exec(`${bcc} --help`, (err, stdout, stderr) => {
      if (err) throw err
      expect(stdout.includes('--amount')).to.be.true
      done()
    })
  })
})

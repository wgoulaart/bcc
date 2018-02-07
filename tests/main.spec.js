const expect = require('chai').expect;
const exec   = require('child_process').exec;
const bcc    = './src/main.js';

describe('Main CLI', () => {
  it('should return Hello', (done) => {
    exec(bcc, (err, stdout, stderr) => {
      if (err) throw err;

      expect(stdout).to.be.equal('Hello');

      done();
    });
  });
});

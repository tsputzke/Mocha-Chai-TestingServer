const sort = require('../sort');

const expect = require('chai').expect;

describe('Sort function', () => {
  it('Sorts an array', () => {
    const list = [3, 2, 1]

    expect(sort(list)).to.deep.equal([1, 2, 3])
  })
})
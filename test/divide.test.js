const divide = require('../index');

const expect = require('chai').expect;

describe('A SUITE DESCRIPTION', () => {
  it('should divide positive integers correctly', () => {
    // define inputs
    const a = 8,
          b = 4,
          expectedAnswer = 2;
    // invoke the function
    const actualAnswer = divide(a, b);
  
    // assert that expected === actual
    expect(actualAnswer).to.equal(expectedAnswer);
  });
  it('should throw an error when divide by zero', () => {
    // define inputs
    const a = 8,
          b = 0;
  
    // set up the function call
    //We want to be able to have the exception thrown but avoid the normal handling for the test. So we wrap the invocation of our function in another function 
    const fn = () => {divide(a, b)};
  
    // assert that exception is thrown
    // The .throw() assertion returns true as an exception is thrown, and false otherwise. Note that we did not invoke the function fn (as in: expect(fn()).to.throw();)
    expect(fn).to.throw();
  });
});
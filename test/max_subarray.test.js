const { maxSubArray } = require('../lib/max_subarray');
const { expect } = require('chai');

describe("maxSubArray", function () {
  it("will work for [-2,1,-3,4,-1,2,1,-5,4]", function () {
    
    // Arrange
    const input = [-2,1,-3,4,-1,2,1,-5,4]
    
    // Act
    const answer = maxSubArray(input)

    // Assert
    expect(answer).equal(6)

  })

  it("will work with a totally negative array", function () {
    
    // Arrange
    const input = [-3, -4, -5, -6, -7]

    // Act
    const answer = maxSubArray(input)

    // Assert
    expect(answer).equal(-3)

  })

  it("will work with a totally negative array with the largest element at the rear", function () {

    // Arrange
    const input = [ -4, -5, -6, -7, -3]

    // Act
    const answer = maxSubArray(input)

    // Assert
    expect(answer).equal(-3)
    
  })

  it("will work with a 1-element array", function () {

    // Arrange
    const input = [3]

    // Act
    const answer = maxSubArray(input)

    // Assert
    expect(answer).equal(3)
    
  })

  it("will return nil for an empty array", function () {
  
    // Arrange
    const input = []

    // Act
    const answer = maxSubArray(input)

    // Assert
    expect(answer).to.be.null

  })

  it("will work for [50, -50, 50]", function () {

    // Arrange
    const input = [50, -50, 50]

    // Act
    const answer = maxSubArray(input)

    // Assert
    expect(answer).equal(50)

  })

});

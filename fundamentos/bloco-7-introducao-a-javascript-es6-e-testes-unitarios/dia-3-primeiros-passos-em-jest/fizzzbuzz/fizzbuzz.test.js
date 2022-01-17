const myFizzBuzz = require("./fizzbuzz");

describe("fizzbuzz function tests", () => {
  it("test if it returns fizzbuzz", () => {
    expect(myFizzBuzz(15)).toMatch("fizzbuzz");
    expect(myFizzBuzz(9)).toMatch("fizz");
    expect(myFizzBuzz(25)).toMatch("buzz");
    expect(myFizzBuzz(22)).toBe(22);
    expect(myFizzBuzz("22")).toBeFalsy();
  });
});

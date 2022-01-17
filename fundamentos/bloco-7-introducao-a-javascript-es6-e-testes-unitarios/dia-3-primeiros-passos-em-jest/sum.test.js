const sum = require("./sum");

describe("sum tests", () => {
  test("sums two values", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("sums two values", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("throws error", () => {
    expect(() => {
      sum(4, "5");
    }).toThrow();
  });
});

// const myRemove = require("./sum");

// describe("remove funtion tests", () => {
//   it("test if its working", () => {
//     expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   });
// });

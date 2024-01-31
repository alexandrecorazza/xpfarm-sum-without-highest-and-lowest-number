const { sum } = require("../src/index");

test("should return false if an empty value is provided", () => {
    expect(sum()).toBe(false);
})

test("should return false if the provided array is an empty list", () => {
    expect(sum([])).toBe(false);
})

test("should return false if the provided array has only one element", () => {
    expect(sum([10])).toBe(false);
})

test("should return 16 as a result of summing the list {6, 2, 1, 8, 1}.", () => {
    expect(sum([6, 2, 1, 8, 10])).toBe(16);
})

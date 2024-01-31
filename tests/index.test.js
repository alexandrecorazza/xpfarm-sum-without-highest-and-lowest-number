const { sum } = require("../src/index");

test("should return false if an empty value is provided", () => {
    expect(sum()).toBe(false);
})

test("should return false if the provided array is an empty list", () => {
    expect(sum()).toBe(false);
})

test("should return false if the provided array has only one element", () => {
    expect(sum()).toBe(false);
})
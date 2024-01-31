const { sum } = require("../src/index");

test("should return false if an empty value is provided", () => {
    expect(sum()).toBe(false);
})
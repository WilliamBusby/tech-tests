
import {missingNumber} from "./01-missing-number.js";

describe("01-missing-number", () => {
  it("should return blank array when no missing numbers", () => {
    expect(missingNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toBe(0);
  });
})
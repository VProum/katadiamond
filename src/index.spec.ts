import { computeDiamond, generateLineOfDiamond } from ".";

describe("computeDiamondTest", () => {
  it("should return a symbol if n = 1", function () {
    expect(computeDiamond(1)).toEqual([["*"]]);
  });

  it("should return a symbol if n = 3", function () {
    expect(computeDiamond(3)).toEqual([
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ]);
  });

  it("should return a symbol if n = 5", function () {
    expect(computeDiamond(5)).toEqual([
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ]);
  });
});

describe("generateMiddleLineOfDiamond", () => {
  it("should return a line full of * if n = 1", function () {
    expect(generateLineOfDiamond(1, 0)).toEqual(["*"]);
  });
  it("should return a line full of * if n = 3", function () {
    expect(generateLineOfDiamond(3, 1)).toEqual(["*", "*", "*"]);
  });
  it("should return the first line as - * - if n = 3", function () {
    expect(generateLineOfDiamond(3, 0)).toEqual([" ", "*", " "]);
  });
  it("should return the first line as - * - if n = 3", function () {
    expect(generateLineOfDiamond(5, 1)).toEqual([" ", "*", "*", "*", " "]);
  });
});

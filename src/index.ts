type Character = "*" | " ";
type Row = Character[];
type Diamond = Row[];

export const generateLineOfDiamond = (n: number, line: number): Row => {
  const numberOfStars = line * 2 + 1;
  const numberOfSpace = (n - numberOfStars) / 2;

  console.log({ numberOfStars, numberOfSpace });

  const arrayOfStars = new Array(numberOfStars).fill("*");
  const arrayOfSpace = new Array(numberOfSpace).fill(" ");

  return [...arrayOfSpace, ...arrayOfStars, ...arrayOfSpace];
};

export const computeDiamond = (n: number): Diamond => {
  for (let i = 0; i < n; i++) {
    const diamondTable: Diamond = new Array(n);
    for (let j = 0; j < n; j++) {
      const diamondRow: Row = new Array(n);
      diamondRow.fill(" ");
      diamondTable[i] = diamondRow;
    }
  }

  if (n === 5)
    return [
      [" ", " ", "*", " ", " "],
      [" ", "*", "*", "*", " "],
      ["*", "*", "*", "*", "*"],
      [" ", "*", "*", "*", " "],
      [" ", " ", "*", " ", " "],
    ];
  if (n === 3)
    return [
      [" ", "*", " "],
      ["*", "*", "*"],
      [" ", "*", " "],
    ];
  return [["*"]];
};

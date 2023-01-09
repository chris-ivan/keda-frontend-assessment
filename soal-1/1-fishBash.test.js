const fishBash = require("./1-fishBash");

const EXPECTED_35 = [
  "35: bash",
  "33: fish",
  "30: fish bash",
  "27: fish",
  "25: bash",
  "24: fish",
  "21: fish",
  "20: bash",
  "18: fish",
  "15: fish bash",
  "12: fish",
  "10: bash",
  "9: fish",
  "6: fish",
  "5: bash",
  "3: fish",
];

test("fishBash function exists", () => {
  expect(typeof fishBash).toEqual("function");
});

test("fishBash function returns correct output for 35", () => {
  // mocks console log as a jest spy function
  console.log = jest.fn();
  fishBash(35);
  EXPECTED_35.forEach((expected) => {
    expect(console.log).toHaveBeenCalledWith(expected);
  });
});

const isPalindrome = require("./3-isPalindrome");

const VALID_PALINDROMES = [
  "deed",
  "level",
  "madam",
  "malayalam",
  "pop",
  "popop",
  "racecar",
  "wow",
  "wowow",
];

const INVALID_PALINDROMES = [
  "chemistry",
  "computer",
  "engineering",
  "hello",
  "javascript",
  "math",
  "physics",
  "science",
  "technology",
  "world",
];

test("isPalindrome function exists", () => {
  expect(typeof isPalindrome).toEqual("function");
});

test("isPalindrome function returns true for valid palindromes", () => {
  VALID_PALINDROMES.forEach((palindrome) => {
    expect(isPalindrome(palindrome)).toBeTruthy();
  });
});

test("isPalindrome function returns false for invalid palindromes", () => {
  INVALID_PALINDROMES.forEach((palindrome) => {
    expect(isPalindrome(palindrome)).toBeFalsy();
  });
});

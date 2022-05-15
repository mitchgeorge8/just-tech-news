const { format_date, format_plural } = require("../utils/helpers");

test("fomat_date() returns a date string", () => {
  const date = new Date("2020-03-20 16:12:03");

  expect(format_date(date)).toBe("3/20/2020");
});

test("format_plural() correctly pluralizes words", () => {
  const pluralWord = "Tiger";
  const singleWord = "Lion";

  expect(format_plural(pluralWord, 2)).toBe("Tigers");
  expect(format_plural(singleWord, 1)).toBe("Lion");
});

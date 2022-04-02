const Intern = require("../lib/Intern.js");

test("creates a github property on the Intern", () => {
  const intern = new Intern(
    "University of Joel",
  );
  expect(intern.school).toEqual(expect.any(String));
  expect(intern.school.length).toBeGreaterThan(0);
});

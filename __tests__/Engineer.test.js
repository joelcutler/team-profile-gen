const Engineer = require("../lib/Engineer.js");

test("creates a github property on the engineer", () => {
  const engineer = new Engineer(
    "joelGitHubName",
  );
  expect(engineer.github).toEqual(expect.any(String));
  expect(engineer.github.length).toBeGreaterThan(0);
});

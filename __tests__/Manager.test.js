const Manager = require("../lib/Manager.js");

test("creates a github property on the Manager", () => {
  const manager = new Manager(
    "Office #3",
  );
  expect(manager.officeNumber).toEqual(expect.any(String));
  expect(manager.officeNumber.length).toBeGreaterThan(0);
});

const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee(
    "Joel",
    "123",
    "joel@joel.com",
    "Supreme Commander"
  );
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.name.length).toBeGreaterThan(0);
});
test("creates a name property", () => {
  const employee = new Employee(
    "Joel",
    "123",
    "joel@joel.com",
    "Supreme Commander"
  );
  expect(employee.getName()).toEqual(expect.any(String));
  expect(employee.getName().length).toBeGreaterThan(0);
});
test("creates an id property", () => {
  const employee = new Employee(
    "Joel",
    "123",
    "joel@joel.com",
    "Supreme Commander"
  );
  expect(employee.getId()).toEqual(expect.any(String));
  expect(employee.getId().length).toBeGreaterThan(0);
});
test("creates an email property", () => {
  const employee = new Employee(
    "Joel",
    "123",
    "joel@joel.com",
    "Supreme Commander"
  );
  expect(employee.getEmail()).toEqual(expect.any(String));
  expect(employee.getEmail().length).toBeGreaterThan(0);
});
test("creates an role property", () => {
  const employee = new Employee(
    "Joel",
    "123",
    "joel@joel.com",
    "Supreme Commander"
  );
  expect(employee.getRole()).toEqual(expect.any(String));
  expect(employee.getRole().length).toBeGreaterThan(0);
});

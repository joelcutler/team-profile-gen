const Employee = require("./Employee");
const inquirer = require("inquirer");

class Intern extends Employee {
  constructor(school, name, id, email) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  getRole() {
    return "Intern";
  }
}

module.exports = Intern;

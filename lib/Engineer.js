const Employee = require("./Employee");
const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(github, name, id, email) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}
module.exports = Engineer;

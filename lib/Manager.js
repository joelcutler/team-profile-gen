const Employee = require("./Employee");
const inquirer = require("inquirer");

class Manager extends Employee {
  constructor(officeNumber, name, id, email) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getOffice() {
    return this.officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

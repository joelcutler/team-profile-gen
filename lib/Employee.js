// name, employee id, email address and office #
// class constructor for employee

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    // this.role = role;
  }
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    // return this.role;
    return "Employee";
  }
}
module.exports = Employee;
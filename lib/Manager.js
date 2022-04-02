const Employee = require("./Employee");
const inquirer = require("inquirer");



class Manager extends Employee {
  constructor(officeNumber, name, id, email, role = "Manager") {
    super(name, id, email, role);
    this.officeNumber = officeNumber;
  }
}

// const managerQuestions = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "text",
//         name: "name",
//         message: `What is the manager's name?`,
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log(`Please enter manager's name`);
//             return false;
//           }
//         },
//       },
//       {
//         type: "text",
//         name: "id",
//         message: `What is the manager's employee id?`,
//         validate: (idInput) => {
//           if (idInput) {
//             return true;
//           } else {
//             console.log(`Please enter manager's employee id`);
//             return false;
//           }
//         },
//       },
//       {
//         type: "text",
//         name: "email",
//         message: `What is the manager's email?`,
//         validate: (emailInput) => {
//           if (emailInput) {
//             return true;
//           } else {
//             console.log(`Please enter manager's email`);
//             return false;
//           }
//         },
//       },
//       {
//         type: "text",
//         name: "officeNumber",
//         message: `What is the manager's office number?`,
//         validate: (officeInput) => {
//           if (officeInput) {
//             return true;
//           } else {
//             console.log(`Please enter manager's office number`);
//             return false;
//           }
//         },
//       },
//       {
//         type: "list",
//         message:
//           "Would you like to add an engineer, add an intern to this team or finish building the team?",
//         name: "addFinish",
//         choices: ["Add Engineer", "Add Intern", "Finished"],
//       },
//     ])
//     .then(({ addFinish, name, id, email, role, officeNumber }) => {
//       teamRoster.push(new Manager(name, id, email, role, officeNumber));
//       console.log("teamRoster = ", teamRoster);
//       if (addFinish === "Add Engineer") {
//         // create new Engineer object?
//         engineerQuestions();
//       } else if (addFinish === "Add Intern") {
//         // create new Intern object?
//         internQuestions();
//       } else {
//         // finished w team, exit app, html generated
//       }
//     });
// };

module.exports = Manager;

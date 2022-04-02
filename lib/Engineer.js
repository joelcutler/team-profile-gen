const Employee = require("./Employee");
const inquirer = require("inquirer");


class Engineer extends Employee {
  constructor(github, name, id, email, role = "Engineer") {
    super(name, id, email, role);
    this.github = github;
  }
}

// const engineerQuestions = () => {
//   return inquirer
//     .prompt([
//       {
//         type: "text",
//         name: "name",
//         message: `What is the engineer's name?`,
//         validate: (nameInput) => {
//           if (nameInput) {
//             return true;
//           } else {
//             console.log(`Please enter engineer's name`);
//             return false;
//           }
//         },
//       },
//       {
//         type: "text",
//         name: "id",
//         message: `What is the engineer's employee id?`,
//         validate: (idInput) => {
//           if (idInput) {
//             return true;
//           } else {
//             console.log(`Please enter engineer's employee id`);
//             return false;
//           }
//         },
//       },
//       {
//         type: "text",
//         name: "email",
//         message: `What is the engineer's email?`,
//         validate: (emailInput) => {
//           if (emailInput) {
//             return true;
//           } else {
//             console.log(`Please enter engineer's email`);
//             return false;
//           }
//         },
//       },
//       {
//         type: "text",
//         name: "github",
//         message: `What is the engineer's GitHub username?`,
//         validate: (gitHubInput) => {
//           if (gitHubInput) {
//             return true;
//           } else {
//             console.log(`Please enter engineer's GitHub username?`);
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
//     .then(({ addFinish }) => {
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

module.exports = Engineer;

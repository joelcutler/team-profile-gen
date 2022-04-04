const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHtml");
let teamRoster = [];

const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: `What is the manager's name?`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter manager's name`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: `What is the manager's employee id?`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter manager's employee id`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: `What is the manager's email?`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter manager's email`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "officeNumber",
        message: `What is the manager's office number?`,
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log(`Please enter manager's office number`);
            return false;
          }
        },
      },
      {
        type: "list",
        message:
          "Would you like to add an engineer, add an intern to this team or finish building the team?",
        name: "addFinish",
        choices: ["Add Engineer", "Add Intern", "Finished"],
      },
    ])
    .then(({ addFinish, name, id, email, role, officeNumber }) => {
      teamRoster.push(new Manager(officeNumber, name, id, email, role));
      console.log("teamRoster = ", teamRoster);
      if (addFinish === "Add Engineer") {
        engineerQuestions();
      } else if (addFinish === "Add Intern") {
        internQuestions();
      } else {
        createHTML(teamRoster);
      }
    });
};

const engineerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: `What is the engineer's name?`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter engineer's name`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: `What is the engineer's employee id?`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter engineer's employee id`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: `What is the engineer's email?`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter engineer's email`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "github",
        message: `What is the engineer's GitHub username?`,
        validate: (gitHubInput) => {
          if (gitHubInput) {
            return true;
          } else {
            console.log(`Please enter engineer's GitHub username?`);
            return false;
          }
        },
      },
      {
        type: "list",
        message:
          "Would you like to add an engineer, add an intern to this team or finish building the team?",
        name: "addFinish",
        choices: ["Add Engineer", "Add Intern", "Finished"],
      },
    ])
    .then(({ addFinish, name, id, email, role, github }) => {
      teamRoster.push(new Engineer(github, name, id, email, role));
      console.log("teamRoster = ", teamRoster);
      if (addFinish === "Add Engineer") {
        engineerQuestions();
      } else if (addFinish === "Add Intern") {
        internQuestions();
      } else {
        createHTML(teamRoster);
      }
    });
};

const internQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "text",
        name: "name",
        message: `What is the intern's name?`,
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log(`Please enter intern's name`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "id",
        message: `What is the intern's employee id?`,
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log(`Please enter intern's employee id`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "email",
        message: `What is the intern's email?`,
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log(`Please enter intern's email`);
            return false;
          }
        },
      },
      {
        type: "text",
        name: "school",
        message: `What is the intern's school?`,
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log(`Please enter intern's school`);
            return false;
          }
        },
      },
      {
        type: "list",
        message:
          "Would you like to add an engineer, add an intern to this team or finish building the team?",
        name: "addFinish",
        choices: ["Add Engineer", "Add Intern", "Finished"],
      },
    ])
    .then(({ addFinish, name, id, email, role, school }) => {
      teamRoster.push(new Intern(school, name, id, email, role));
      console.log("teamRoster = ", teamRoster);
      if (addFinish === "Add Engineer") {
        engineerQuestions();
      } else if (addFinish === "Add Intern") {
        internQuestions();
      } else {
        createHTML(teamRoster);
      }
    });
};

const createHTML = (teamRosterPlaceholder) => {
  const html = generateHTML(teamRosterPlaceholder);
  fs.writeFile("./dist/index.html", html, function (err) {
    if (err) throw err;
    console.log("HTML file generated");
  });
};

managerQuestions();

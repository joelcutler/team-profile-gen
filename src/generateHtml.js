
const genOffice = (member) => {
  if (member.getRole() === "Manager") {
    return`
    <span class="has-text-weight-bold">Office: </span><span>${member.getOffice()}</span>
    `
  }
  else { 
    return '';
  }
}

const genGithub = (member) => {
  if (member.getRole() === "Engineer") {
    return`
    <span class="has-text-weight-bold">Github Username: </span><span>${member.getGithub()}</span>
    `
  }
  else { 
    return '';
  }
}

const genSchool = (member) => {
  if (member.getRole() === "Intern") {
    return`
    <span class="has-text-weight-bold">School: </span><span>${member.getSchool()}</span>
    `
  }
  else { 
    return '';
  }
}

const genCard = (teamRoster) => {
  return teamRoster.map(member => {
    return `
  <div class="card column is-4-desktop m-3">
    <div class="card-header">
      <div class="card-header-title is-centered">${member.name}</div>
      <div class="card-header-icon">
        <i class="fa-solid fa-person-military-pointing"></i>
      </div>
    </div>
    <div class="card-content">
      <span class="has-text-weight-bold">Role: </span><span>${member.getRole()}</span>
      <br />
      <span class="has-text-weight-bold">ID: </span><span>${member.id}</span>
      <br />
      <span class="has-text-weight-bold">Email: </span><span>${member.email}</span>
      <br />
    ${genOffice(member)}
    ${genGithub(member)}
    ${genSchool(member)}
      <br />
    </div>
  </div>
  `
})
}

function generateTeam(teamRoster) {
  return `
  <!DOCTYPE html>

<head>
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1.0"
    charset="UTF-8"
  />
  <title>Team Profile Generator</title>

  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
  />
  <link rel="stylesheet" href="./dist/style.css" />
</head>

<body>
  <header class="has-background-success-dark p-3">
    <div class="has-text-centered">
      <h1 class="is-size-1 has-text-grey-light p-2 has-text-weight-bold">THE SQUAD</h1>
    </div>
  </header>
  <main>
    <div class="has-background-grey-lighter columns is-multiline is-flex-wrap-wrap is-justify-content-space-around">
  
      ${genCard(teamRoster)};

    </div>
  </main>
</body>
`
};

module.exports = generateTeam;

// check for loops in trivia game as template for mapping/looping through teamroster array

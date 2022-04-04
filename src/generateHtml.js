
const generateHTML = (teamRoster) => {
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
      <div class="has-background-grey-lighter columns is-flex-wrap-wrap is-justify-content-space-around">
        <div class="card column m-3">
          <div class="card-header">
            <div class="card-header-title is-centered">Joel</div>
            <div class="card-header-icon">
              <i class="fa-solid fa-person-military-pointing"></i>
            </div>
          </div>
          <div class="card-content">
            <span class="has-text-weight-bold">Role: </span><span>Manager</span>
            <br />
            <span class="has-text-weight-bold">ID: </span><span>684</span>
            <br />
            <span class="has-text-weight-bold">Email: </span><span>joel@joel.com</span>
            <br />
            <span class="has-text-weight-bold">Office: </span><span>789</span>
            <br />
          </div>
        </div>
  
        <div class="card column m-3">
          <div class="card-header">
            <div class="card-header-title is-centered">Jake</div>
            <div class="card-header-icon">
              <i class="fa-solid fa-person-military-pointing"></i>
            </div>
          </div>
          <div class="card-content">
            <span class="has-text-weight-bold">Role: </span><span>Engineer</span>
            <br />
            <span class="has-text-weight-bold">ID: </span><span>123</span>
            <br />
            <span class="has-text-weight-bold">Email: </span><span>jake@jake.com</span>
            <br />
            <span class="has-text-weight-bold">Github: </span><span>jakeGH</span>
            <br />
          </div>
        </div>
  
        <div class="card column m-3">
          <div class="card-header">
            <div class="card-header-title is-centered">Kim</div>
            <div class="card-header-icon">
              <i class="fa-solid fa-person-military-pointing"></i>
            </div>
          </div>
          <div class="card-content">
            <span class="has-text-weight-bold">Role: </span><span>Intern</span>
            <br />
            <span class="has-text-weight-bold">ID: </span><span>987</span>
            <br />
            <span class="has-text-weight-bold">Email: </span><span>kim@kim.com</span>
            <br />
            <span class="has-text-weight-bold">School: </span><span>University of Utah</span>
            <br />
          </div>
        </div>
      </div>
    </main>
  </body>
  
  `;
};

module.exports = generateHTML;

// check for loops in trivia game as template for mapping/looping through teamroster array

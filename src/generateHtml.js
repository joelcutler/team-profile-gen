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
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
    <link rel="stylesheet" href="./dist/style.css" />
  </head>
  
  <body>
    <header class="has-text-centered">
      <h1 class="is-size-1">The Squad!</h1>
    </header>
  </body>
  `;
};

module.exports = generateHTML;

// check for loops in trivia game as template for mapping/looping through teamroster array

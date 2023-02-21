function insertCards(team) {
  const html = [];
  html.push(
    team
      .filter((emp) => emp.getRole() === 'Manager')
      .map((manager) => console.log(manager))
  );
  html.push(
    team
      .filter((emp) => emp.getRole() === 'Engineer')
      .map((engineer) => console.log(engineer))
  );
  html.push(
    team
      .filter((emp) => emp.getRole() === 'Intern')
      .map((intern) => console.log(intern))
  );
  return html.join('');
}

function generateHTML(team) {
  return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
      integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    <link rel="stylesheet" href="style.css" />

    <title>Team Profile</title>
  </head>
  <body>
    <div class="header">
      <h1 class="text-center">My Team</h1>
    </div>
    <div class="container">
      ${insertCards(team)}
    </div>

   
  </body>
</html>

    
    
    `;
}

module.exports = generateHTML;

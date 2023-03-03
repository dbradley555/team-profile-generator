function insertCards(team) {
  const html = [];
  html.push(
    team
      .filter((emp) => emp.getRole() === 'Manager')
      .map((manager) => {
        return `<div class="col">
      <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-header">
          <h2 id="manager-name">${manager.name}</h2>
          <h5 id="manager-role">
            <i class="fa-solid fa-people-roof"></i> Manager
          </h5>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" id="manager-id">Employee ID: ${manager.id}</li>
            <li class="list-group-item" id="manager-email">Email: 
            ${manager.email}
            </li>
            <li class="list-group-item" id="manager-office">Office Number: 
            ${manager.officeNumber}
            </li>
          </ul>
        </div>
      </div>
    </div>`;
      })
  );
  html.push(
    team
      .filter((emp) => emp.getRole() === 'Engineer')
      .map((engineer) => {
        return `<div class="col">
      <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-header">
          <h2 id="engineer-name">${engineer.name}</h2>
          <h5 id="engineer-role">
          <i class="fa-solid fa-glasses"></i> Engineer
          </h5>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" id="engineer-id">Employee ID: ${engineer.id}</li>
            <li class="list-group-item" id="engineer-email">Email: 
            ${engineer.email}
            </li>
            <li class="list-group-item" id="engineer-github">GitHub Username: 
            ${engineer.github}
            </li>
          </ul>
        </div>
      </div>
    </div>`;
      })
  );
  html.push(
    team
      .filter((emp) => emp.getRole() === 'Intern')
      .map((intern) => {
        return `<div class="col">
      <div class="card shadow p-3 mb-5 bg-body-tertiary rounded">
        <div class="card-header">
          <h2 id="intern-name">${intern.name}</h2>
          <h5 id="intern-role">
          <i class="fa-sharp fa-solid fa-user-graduate"></i> Intern
          </h5>
        </div>
        <div class="card-body">
          <ul class="list-group">
            <li class="list-group-item" id="intern-id">Employee ID: ${intern.id}</li>
            <li class="list-group-item" id="intern-email">Email: 
            ${intern.email}
            </li>
            <li class="list-group-item" id="intern-school">University Attended: 
            ${intern.school}
            </li>
          </ul>
        </div>
      </div>
    </div>`;
      })
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
    <link rel="stylesheet" href="../src/style.css" />

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

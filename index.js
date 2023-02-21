const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/htmlgenerator.js');
const path = require('path');

const team = [];
// Create an array of questions for user input
const managerQuestions = [
  {
    type: 'input',
    name: 'managername',
    message: 'Please enter the name of the team manager:',
  },
  {
    type: 'input',
    name: 'managerid',
    message: 'Please enter the ID of the team manager:',
  },
  {
    type: 'input',
    name: 'manageremail',
    message: 'Please enter the email address of the team manager:',
  },
  {
    type: 'input',
    name: 'manageroffice',
    message: 'Please enter the office number of the team manager:',
  },
];

const nextEmployee = [
  {
    type: 'list',
    name: 'anotheremployee',
    message: 'Do you want to add another employee?',
    choices: ['Y', 'N'],
  },
];

const whatEmployee = [
  {
    type: 'list',
    name: 'employeetype',
    message: 'What employee position would you like to add?',
    choices: ['Engineer', 'Intern'],
  },
];

const engineerQuestions = [
  {
    type: 'input',
    name: 'engineername',
    message: 'Please enter the name of the engineer:',
  },
  {
    type: 'input',
    name: 'engineerid',
    message: 'Please enter the ID of the engineer:',
  },
  {
    type: 'input',
    name: 'engineeremail',
    message: 'Please enter the email address of the engineer:',
  },
  {
    type: 'input',
    name: 'engineergithub',
    message: 'Please enter the GitHub username of the engineer:',
  },
];
const engineerAnswers = [];

const internQuestions = [
  {
    type: 'input',
    name: 'internname',
    message: 'Please enter the name of the intern:',
  },
  {
    type: 'input',
    name: 'internid',
    message: 'Please enter the ID of the intern:',
  },
  {
    type: 'input',
    name: 'internemail',
    message: 'Please enter the email address of the intern:',
  },
  {
    type: 'input',
    name: 'internschool',
    message: 'Please enter the school the intern attended:',
  },
];

const internAnswers = [];

function init() {
  inquirer.prompt(managerQuestions).then((data) => {
    let manager = new Manager(
      data.managername,
      data.managerid,
      data.manageremail,
      data.manageroffice
    );
    team.push(manager);
    questionLoop();
  });
}

function questionLoop() {
  inquirer.prompt(nextEmployee).then((data) => {
    if (data.anotheremployee === 'N') {
      fs.writeFileSync(
        path.join(__dirname, '/dist/', 'team.html'),
        generateHTML(team)
      );
      // console.log(team);
    } else {
      nextQuestion();
    }
  });
}

function nextQuestion() {
  inquirer.prompt(whatEmployee).then((data) => {
    if (data.employeetype === 'Engineer') {
      inquirer.prompt(engineerQuestions).then((data) => {
        let engineer = new Engineer(
          data.engineername,
          data.engineerid,
          data.engineeremail,
          data.engineergithub
        );
        team.push(engineer);
        questionLoop();
      });
    } else {
      inquirer.prompt(internQuestions).then((data) => {
        let intern = new Intern(
          data.internname,
          data.internid,
          data.internemail,
          data.internschool
        );
        team.push(intern);
        questionLoop();
      });
    }
  });
}

init();

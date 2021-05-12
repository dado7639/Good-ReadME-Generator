// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description regarding your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Write a description regarding your project.",
    name: "description",
  },
  {
    type: "list",
    message: "Which license do you want to use?",
    choices: ["MIT", "ISC", "GPL"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(fileName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown({ ...data }));
  });
}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
//require generateMarkdown
// require inquirer

const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require('fs')

// TODO: Create an array of questions for user input
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//github, email

const questions = [{
        type: 'input',
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: 'input',
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: 'input',
        message: "How can your project be installed?",
        name: "install",
    },
    {
        type: "input",
        message: "How is your project used?",
        name: "use",
    },
    {
        type: "list",
        message: "What license/licenses did you utilize in your project?",
        name: "license",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"]
    },
    {
        type: "input",
        message: "Did other parties contribute to your project?",
        name: "contribute",
    },
    {
        type: "input",
        message: "Did you run any tests for your project?",
        name: "test",
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, generateMarkdown(data), (err) =>
        err ? console.error("err") : console.log("success"))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) =>
            writeToFile("readme", response)
        );
}

// Function call to initialize app
init();
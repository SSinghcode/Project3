// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateFile = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your Github uername"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address"
    }, {
        type: "input",
        name: "aapname",
        message: "What is your APP name"
    }, {
        type: "input",
        name: "description",
        message: "Please write short description  of your project"
    }, {
        type: "list",
        name: "license",
        message: "What kind of license should your project have",
        choices: ["MIIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
    }, {
        type: "input",
        name: "title",
        message: "What is the title of the project"
    },
    {
        type: "input",
        name: "dependencies",
        message: "What is the command to run dependencies"

    },
    {
        type: "input",
        name: "test",
        message: "What is the command to run tests"

    },
    {
        type: "input",
        name: "usage",
        message: "What does user need to know about using the repo?"

    }, {
        type: "input",
        name: "contributing",
        message: "What does user need to know about contributing to the repo?"

    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("README.md", generateFile({ ...responses }))
    })

}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs =  require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateFile = require("./utils/generateMarkdown");
const Choices = require("inquirer/lib/objects/choices");
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"username",
        message:"What is your Github uername"
    },
    {
        type:"input",
        name:"email",
        message:"What is your email address"
    },    {
        type:"input",
        name:"projectname",
        message:"What is your Project name"
    },    {
        type:"input",
        name:"description",
        message:"Please write short description  of your project"
    },    {
        type:"list",
        name:"license",
        message:"What kind of license should your project have",
        choices:["MIIT","APACHE 2.0","GPL 3.0","BSD 3","None"],
    },    {
        type:"input",
        name:"title",
        message:"What is the title of the project"
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
return fs.writeFileSync(path.join(process.cwd(),fileName),data)

}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions ).then((responses)=>{
    writeToFile("README.md",generateFile({...responses}))
})

}

// Function call to initialize app
init();

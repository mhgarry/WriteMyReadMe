// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = 

inquirer.prompt([
    {   
        type: "input",
        name: "Title",
        message: "Enter your README title here"
        
    },
    {
        type: "input",
        name: "Description",
        message: "Enter a description of your applicaiton here"
    },
    {
        type: "input",
        name: "Installation",
        message: "Enter installion instructions for your application here"
    },
    {
        type: "input",
        name: "Usage",
        message: "Enter usage information for your application here"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Enter contribution guidelines here"
    },
    {
        type: "input",
        name: "Tests",
        message: "Enter your test instructions here"
    } 
]).then((answersObj) =>
console.log(answersObj)
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = 

inquirer.prompt([
    {   
        type: "input",
        name: "title",
        message: "Enter your project title here"
        
    },
    {
        type: "input",
        name: "description",
        message: "Enter a detailed description of your project"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for building this project?"
    },
    {
        type: "input",
        name: "problems",
        message: "What problems does you project solve?"
    },
    {
        type: "input",
        name: "installation",
        message: "Enter any installion instructions for your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter detailed instructions on how to use your project"
    },
    {
        type: "input",
        name: "features",
        message: "Enter your projects features"
    },
    {
        type: "input",
        name: "screenshot",
        message: "Add a screenshot using ![alt text](assets/images/screenshot.png)"
    },
    {  
        type: "input",
        name: "credit",
        message: "Enter any contributers and sources you used while building your project"

    },
    {
        type: "input",
        name: "tests",
        message: "Enter any tests you have written for your project"
    },
    {
        type: "input",
        name: "contributing",
        message: "Enter any ways in which other developers can contribute to your project"
    },
    {
        type: "input",
        name: "contact",
        message: "Your email and github incase users have any questions"
    }])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
function init() {}


// Function call to initialize app
init();
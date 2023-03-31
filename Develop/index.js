// TODO: Include packages needed for this application
const fs = require('fs')
//bring in inquirer package
const inquirer = require('inquirer')
//imports our generatemarkdown function to write the file
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {   
        type: "input",
        name: "title",
        message: "Enter your application title here"
        
    },
    {
        //used for llicense information https://choosealicense.com/
        type: "list",
        message: "Choose a license for your application",
        name: "license",
        choices: ['Apache License 2.0', 'MIT License', "ISC License", 'GNU AGPLv3','GNU GPLv3','GNU LGPLv3', 'Mozilla Public License 2.0',
                'The Unlicense', 'Boost Software License 1.0']
    },
    {
        type: "input",
        name: "description",
        message: "Enter a detailed description of your application"
    },
    {
        type: "input",
        name: "motivation",
        message: "What was your motivation for building this application?"
    },
    {
        type: "input",
        name: "problems",
        message: "What problems does you application solve?"
    },
    {
        type: "input",
        name: "installation",
        message: "How does a user install your application?"
    },
    {
        type: "input",
        name: "usage",
        message: "How does a user use your application?"
    },
    {
        type: "input",
        name: "features",
        message: "What features does your application include?"
    },
    {
        type: "input",
        name: "required packages",
        message: "What packages are required if any to run this applicaiton?"
    },
    {  
        type: "input",
        name: "resources",
        message: "What resources did you use to build this application?"

    },
    {
        type: "input",
        name: "tests",
        message: "How can a user test your applicaiton?"
    },
    {
        type: "input",
        name: "contribute",
        message: "How can other developers contribute to your project?"
    },
    {
        type: "input",
        name: "email",
        message: "what is your email in case the user has questions?",
    },
    {   type: "input", 
        message: "What is your github account link?",
        name: "github"
    },
];
// TODO: Create a function to write README file
//write the file with filename and data, if there's an error console.log "Please inpnut all data"
//when parameters are passed into the arguments filename and data it will create our file
 function writeToFile (fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error) {
            return console.log("Please input all data");
        }
        console.log("Writing your README");
    });
};


// TODO: Create a function to initialize app
//runs inquirer and prompts the questions to user
//passes the userdata into function and console.logs our userdata 
//calls our writeToFile function to pass in "README.md" into our filename argument and our function generateMarkdown with the parameter userData into our data argument 
//the writeToFile function runs running our fs.writeFile function built into inquirer to write our file
function init() {
    inquirer.prompt(questions).then
    (function (userData) {
        console.log(userData)
        writeToFile("README.md", generateMarkdown(userData));
    });
};


//Function call to initialize app the intialize funciton and run all of our funcitons 
init();

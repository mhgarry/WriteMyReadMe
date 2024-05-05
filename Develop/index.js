const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter your application title here',
  },
  {
    type: 'input',
    name: 'Introduction',
    message: 'Enter your application introduction here',
  },
  {
    //used for license information https://choosealicense.com/
    type: 'list',
    message: 'Choose a license for your application',
    name: 'license',
    choices: [
      'Apache License 2.0',
      'MIT License',
      'ISC License',
      'GNU AGPLv3',
      'GNU GPLv3',
      'GNU LGPLv3',
      'Mozilla Public License 2.0',
      'The Unlicense',
      'Boost Software License 1.0',
    ],
  },
  {
    type: 'input',
    name: 'Features',
    message: 'What features does your application include?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How does a user install your application?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How does a user use your application?',
  },
  {
    type: 'input',
    name: 'required packages',
    message:
      'What packages are required if any to run this application? What purposes do these packages serve for this application?',
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How can other developers contribute to your project?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email in case the user has questions?',
  },
  {
    type: 'input',
    message: 'What is your github account link?',
    name: 'github',
  },
];

//will write our file to a new file called GENERATEDREADME.md
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (error) => {
    if (error) {
      return console.log('Please input all data');
    }
    console.log('Writing your README');
  });
}

// this function is called to initialize the app when
// a user runs the application
function init() {
  inquirer.prompt(questions).then(function (userData) {
    console.log(userData);
    writeToFile('GENERATEDREAEDME.md', generateMarkdown(userData));
  });
}

//Function call to initialize app the intialize funciton and run all of our funcitons
init();
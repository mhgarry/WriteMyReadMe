const fs = require('fs')
const inqurier = require('inquirer')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //https://choosealicense.com/
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 

  ## Table of Contents 

  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Credit](#credit)
  - [Tests](#tests)
  - [How to Contribute](#contributing)
  - [Contact Me] (#contact)
  - [License] (#license)
          
  ## Description 

  ## Installation

  ## Usage

  ## Features

  ## Screenshot

  ## Credit

  ## Tests

  ## How to Contribute 

  ## Contact Me
  
  ## License
`;
}

module.exports = generateMarkdown;
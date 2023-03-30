// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string

// function renderLicenseBadge(license) {
//     if (license === 'Apache License 2.0')
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   //https://choosealicense.com/
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {

// }

// // TODO: Create a function to generate markdown for README
//passes in the data from our prompts and we use template literals to write our README 
//we use the name property from our inquirer object array to pass the data to write into 
//our function 
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
  - [How to Contribute](#how-to-contribute)
  - [Questions] (#questions)
  - [License] (#licensing)

  ## Description 
  -${data.description}
  -${data.motivation}
  -${data.problems}

  ## Installation
  -${data.installation}

  ## Usage
  -${data.usage}

  ## Features
  -${data.features}
  ## Screenshot
  -${data.screenshot}
  ## Credit
  -${data.credit}
  ## Tests
  -${data.tests}
  ## How to Contribute 
  -${data.contributing}
  ## Questions for Developer
   - ${data.email}
   - ${data.github}
  
  ## License
  -${data.license}
`;
}

module.exports = generateMarkdown;
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
//checks for license value being used and gives it a badge
function licenseBadge (value) {
  let badge = " "
    if (value === 'Apache License 2.0') { 
      badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      }
      else if (value === "MIT License") {
      badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
     }
      else if (value === "ISC License0") {
       badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    }
    else if (value === "GNU AGPLv3") {
      badge =  "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    }
    else if (value === "GNU GPLv3") {
      badge =  "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
    else if (value === "GNU LGPLv3") {
      badge =  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    }
     else if (value === "Mozilla Public License 2.0" ) {
      badge =  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
     else if (value === "The Unlicense") {
      badge =  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
     else if (value === "Boost Software License 1.0") {
      badge =  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } 
    return badge
  };


// // // TODO: Create a function that returns the license link
// // // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   //https://choosealicense.com/
// }

// // // TODO: Create a function that returns the license section of README
// // // If there is no license, return an empty string
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
  - [License] (#license)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [Screenshot](#screenshot)
  - [Credit](#credit)
  - [Tests](#tests)
  - [How to Contribute](#how-to-contribute)
  - [Questions] (#questions)
  

  ## Description 
  -${data.description}
  -${data.motivation}
  -${data.problems}

  ## License
  -${licenseBadge.license}

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
  -${data.contribute}

  ## Questions
   - ${data.email}
   - ${data.github}
  
  
 
`;
}

module.exports = generateMarkdown;
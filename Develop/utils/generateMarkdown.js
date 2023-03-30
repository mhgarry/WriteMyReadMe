// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
//checks for license value being used and gives it a badge
function renderLicenseBadge(data) {
  const licenseType = data.license[0];
  let licenseString = " "
    if (licenseType === 'Apache License 2.0') { 
      licenseString = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
      };
      if (licenseType === "MIT License") {
      licenseString = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
     };
      if (licenseType === "ISC License0") {
       licenseString = `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
    }; 
    if (licenseType === "GNU AGPLv3") {
      licenseString = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    };
    if (licenseType === "GNU GPLv3") {
      licenseString = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    };
    if (licenseType === "GNU LGPLv3") {
      licenseString = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
    };
     if (licenseType === "Mozilla Public License 2.0" ) {
      licenseString = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    }; 
     if (licenseType === "The Unlicense") {
      licenseString = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    };
     if (licenseType === "Boost Software License 1.0") {
      licenseString = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    } 
    return licenseString
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
  -${data.renderLicenseBadge}
 
`;
}

module.exports = generateMarkdown;
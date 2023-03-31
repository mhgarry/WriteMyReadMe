// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
//checks for license value being used and returns its a badge and license link
function licenseBadge (license) {
      if (license === 'Apache License 2.0') { 
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      };
     if (license === "MIT License") {
      return  "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
     };
       if (license === "ISC License0") {
       return  "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
    }
     if (license === "GNU AGPLv3") {
      return   "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
    }
     if (license === "GNU GPLv3") {
      return   "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    }
     if (license === "GNU LGPLv3") {
      return  "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
    }
      if (license === "Mozilla Public License 2.0" ) {
      return  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
    }
      if (license === "The Unlicense") {
      return  "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
    }
      if (license === "Boost Software License 1.0") {
      return  "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
    } 
    
  };



// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(data) {
    return licenseBadge()
}
renderLicenseSection()
// // TODO: Create a function to generate markdown for README
//passes in the data from our prompts and we use template literals to write our README 
//we use the name property from our inquirer object array to pass the data to write into 
//our function 
function generateMarkdown(data) {
  return `
# ${data.title} 

#Table of contents,
  1. [License](#license)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [Required Packages](#packages)
  6. [Features](#features)
  7. [Resources](#resources)
  8. [Tests](#tests)
  9. [How to contribute](#contribute)
  10. [Questions](#questions)
  
## Licensing <a name="license"></a>

  >Refer to https://choosealicense.com/ for licensing information
  >${licenseBadge(data.license)}

## Description <a name="description"></a>
  
    > Application description: ${data.description}
    > I built this app ${data.motivation}
    > This app ${data.problems}

## Installation <a name="Installation"></a>
  
    > ${data.installation}
    > Refer to https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository for information on cloning a repository

## Usage <a name="usage"></a>

    > ${data.usage}

## Required Packages  <a name="packages"></a>

    >${data.packages}

## Features <a name="features"></a>
  
  > ${data.features}
  
## Resources <a name="resources"></a>
  
  > ${data.resources}
  
## Tests <a name="tests"></a>

  > ${data.tests}

## How to Contribute <a name="contribute"></a>
  
  > ${data.contribute}

## Questions <a name="questions"></a>
  
  > For any further questions I'm avaialble at ${data.email}
  > To view and clone this project's repository as well as view other projects I'm working on visit ${data.github}
`;
}

module.exports = generateMarkdown;
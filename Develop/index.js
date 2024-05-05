const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fuzzy = require('fuzzy');

// an async function that receives keeps track and assigns the user's input to the corresponding license
const assignCheckbox = async () => {
  try {
    await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your application',
        choices: checkboxes,
      },
    ]);
  } catch {
    console.log('Please select a license');
    return;
  }
};  // an async function that awaits the user to submit their choice of license for their application, once it receives the color inputted by the user, it will map the color to the corresponding license stored in the  content array
assignCheckbox();  // calls the assignCheckbox function



class LicenseData  {
  prototype(name, color, url) {
    this.name = name;
    this.color = color;
    this.url = url;
  };
};  // class that will hold the properties of the license properties to be used in our checkboxes and for rendering the license section of the README

const renderLicenseSection = [
{  apacheLicense:  new LicenseData('Apache License 2.0', '#2A0C4E', 'https://img.shields.io/badge/License-Apache%202.0-blue.svg') },
{  mitLicense: new LicenseData('MIT License', '#7B3F00', 'https://img.shields.io/badge/License-MIT-yellow.svg') },
{  iscLicense: new LicenseData('ISC License', '#E0A800', 'https://img.shields.io/badge/License-ISC-blue.svg') },
{  gnuAPLicense:  new LicenseData('GNU AGPLv3', '#87B38D', 'https://img.shields.io/badge/License-AGPL_v3-blue.svg') },
{  gnuGPLicense:  new LicenseData('GNU GPLv3', '#F0E3CA', 'https://img.shields.io/badge/License-GPLv3-blue.svg') },
{  gnuLPLicense:  new LicenseData('GNU LGPLv3', '#DE6B48', 'https://img.shields.io/badge/License-LGPL_v3-blue.svg') },
{  gnuLGLicense:  new LicenseData('Mozilla Public License 2.0', '#9B1D20', 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg') },
{  uniclaseLicense:  new LicenseData('The Unlicense', '#3D315B', 'https://img.shields.io/badge/license-Unlicense-blue.svg') },
{  boostLicense:  new LicenseData('Boost Software License 1.0', '#708D81', 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg') }
];  // an array of objects associated with the licenses that will be used to render the license section of the README

// a function that takes the user's inputed licesnse and maps the renderLicenseSection object based on the user's input compared to the object's name property
//   renderLicenseSection.map((dataObject) => {
//     (dataObject.name === license) ? dataObject : '';
//     return dataObject;
//   }
// );  // maps the user's input to the corresponding license object in the renderLicenseSection array

// an async function that will
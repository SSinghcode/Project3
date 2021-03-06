// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) 
{
  let x = license;

  // ["MIT","APACHE 2.0","GPL 3.0","BSD 3","None"],

  switch (x) {
    case "MIIT":
      return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;

      break;
    case "APACHE 2.0":
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`;
      break;

    case "GPL 3.0":
      return `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
      break;
    case "BSD 3":
      return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]'
      break;
    case "None":
      return` ""`
      break;
    default:
      return '""'
      break;
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ##Github username ${data.username}

  ## Table of Contents
  -[Description](#description)

  -[Installations](#installation)

  -[Usage](#usage)

  -[Contributing](#contributing)

  -[License](#license)

  -[Questions](#questions)










  ## license  
  ${renderLicenseBadge(data.license)}
  ## App Name 
  ${data.projectname}
  ##Email :- 
  ${data.email}

  ## Installations

  ${data.installation}

  ## Description
  ${data.description}
  ## Usage
  ${data.usage}
  ## Tests
  ${data.test}
  ## Dependencies
  ${data.dependencies}
  ## contribution
  ${data.contributuion}

`;
}

module.exports = generateMarkdown;

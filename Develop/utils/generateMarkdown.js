// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "https://img.shields.io/badge/License-MIT-yellow.svg";
        case "APACHE 2.0":
            return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
        case "GPL 3.0":
            return "https://img.shields.io/badge/License-GPLv3-blue.svg";
        case "BSD 3":
            return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";
        default:
            return "";
    }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    switch (license) {
        case "MIT":
            return "https://opensource.org/licenses/MIT";
        case "APACHE 2.0":
            return "https://opensource.org/licenses/Apache-2.0";
        case "GPL 3.0":
            return "https://www.gnu.org/licenses/gpl-3.0";
        case "BSD 3":
            return "https://opensource.org/licenses/BSD-3-Clause";
        default:
            return "";
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseSection(data.license)}
## Description 
${data.description}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[License](#License)
[Contributing](#Contribution-Guidelines)
[Tests](#How-To-Test)
[Questions](#Questions)


## Installation
\`\`\`${data.install}\`\`\`


## Usage
${data.use}

##License
${data.renderLicenseBadge}
${data.renderLicenseLink}


## Contribution Guidelines
${data.contribute}


## How to Test
${data.test}


## Questions
[github](https://github.com/${data.github})
${data.email}  
`;
}
module.exports = generateMarkdown;
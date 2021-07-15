// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    // if (license === "MIT") {
    //     return ("https://img.shields.io/badge/License-MIT-yellow.svg")
    // }
    // else if (license)
    switch (license) {
        case "MIT":
            return ("https://img.shields.io/badge/License-MIT-yellow.svg")
        case "APACHE 2.0":
            return ("https://img.shields.io/badge/License-Apache%202.0-blue.svg")
        case "GPL 3.0":
            return ("https://img.shields.io/badge/License-GPLv3-blue.svg")
        case "BSD 3":
            return ("https://img.shields.io/badge/License-BSD%203--Clause-blue.svg")
        default:
            return ("")

    }



}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "MIT") {
        return ("https://opensource.org/licenses/MIT")
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderStuff(license) {
    return `[![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    `
}

module.exports = generateMarkdown;
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license) {
        return `![License](https://img.shields.io/static/v1?label=license&message=${license}&color=success)`;
    } else {
        return "";
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license) {
        return `https://choosealicense.com/licenses/${license}`;
    } else {
        return "#";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license) {
        return `The following is the license used for this project <br> ${renderLicenseLink(
            license
        )}`;
    } else {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.licenseType)}

## Table of Contents
* [Description](#description)
* [Installation Instructions](#installation-instructions)
* [How to contribute](#how-to-contribute)
* [To Test](#to-test)
* [License](#license)


## Description

${data.description}

## Installation Instructions

${data.installationInstructions}

## How to contribute

${data.contributionGuidelines}

## To Test

${data.testInstructions}

## License

${renderLicenseSection(data.licenseType)}

## Questions

If you have any questions abount my project you can find me on github [${
        data.githubUserName
    }](https://github.com/${data.githubUserName}) or you can email me at ${
        data.email
    }
`;
}

module.exports = generateMarkdown;

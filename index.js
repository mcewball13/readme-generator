// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project name?",
        validation: titleInput => titleInput ? true : false
    },
    {
        type: "input",
        name: "description",
        message: "What is your project's description?",
        validation: descriptionInput => descriptionInput ? true : false
    },
    {
        type: "input",
        name: "installationInstructions",
        message: "How do you install it?",
        validation: descriptionInput => descriptionInput ? true : false
    },
    {
        type: "input",
        name: "usageInformation",
        message: "How do you use your app?",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "How can someone contribute to your app?",
    },
    {
        type: "input",
        name: "testInstructions",
        message: "How can someone test your app?",
    },
    {
        type: "confirm",
        name: "isLicense",
        message: "Would you like to add a license?",
        default: true,
    },
    {
        type: "rawlist",
        name: "licenseType",
        message: "What is your project's description?",
        choices: ["mit", "apache-2.0", "gpl-3.0", "mpl-2.0"],
        when: ({ isLicense }) => {
            if (isLicense) {
                return true;
            } else {
                return false;
            }
        },
    },
    {
        type: "input",
        name: "githubUserName",
        message: "What is your Github User Name?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }

        console.log("Done!");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        // Use user feedback for... whatever!!
        const returnedString = generateMarkdown(answers);
        writeToFile("README.md", returnedString);
    });
}

// Function call to initialize app
init();

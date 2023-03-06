// Imports
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");

// JS Variables
const allEmployeeObjects = [];

// TODO: Write Code to gather information about the development team members, and render the HTML file.
// array of questions for user
const questions = [
    {
        type: "input",
        message: "Please enter the Team Manager's name",
        name: "managerName"
    },
    {
        type: "input",
        message: "Please enter the Team Manager's employee ID",
        name: "managerID"
    },
    {
        type: "input",
        message: "Please enter the Team Manager's email address",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Please enter the Team Manager's office number",
        name: "managerOfficeNumber"
    }
];

const options = [
    {
        type:"list",
        message: "Please choose an option to proceed",
        choices: ["Add an Engineer","Add an Intern","Finished building team"],
        name: "userOption"
    }
];

const engineerQuestions = [
    {
        type: "input",
        message: "Please enter this engineer's name",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Please enter this engineer's employee ID",
        name: "engineerID"
    },
    {
        type: "input",
        message: "Please enter this engineer's email address",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Please enter this engineer's GitHub username",
        name: "engineerGithub"
    }
];

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        let currentEmployee = new Manager (response.managerName,response.managerID,response.managerEmail,response.managerOfficeNumber)
        allEmployeeObjects.push(currentEmployee);
        console.log(allEmployeeObjects);
        currentEmployee = "";
        userOption();
    })
}

// function to prompt for option
function userOption() {
    inquirer
    .prompt(options)
    .then((response) => {
        if (response.userOption == "Add an Engineer") {
            inquireEngineer();
        } else if (response.userOptions == "Add an Intern") {
            inquireIntern();
        } else if (response.userOptions == "Finished building team") {
            render();
        }
    })
}

function inquireEngineer () {
    inquirer
    .prompt
}

// function call to initialize program
init();
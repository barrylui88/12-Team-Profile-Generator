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

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        userOption();
    })
}

// function to prompt for option
function userOption() {
    inquirer
    .prompt(options)
    .then((response) => {

    })
}

// function call to initialize program
init();
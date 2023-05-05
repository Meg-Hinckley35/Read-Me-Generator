const inquirer = require('inquirer');
const fs = require('fs');
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

// questions
const questions = [
    {
        type: "input",
        message: "What is the name of your Project?",
        name: "title",
    },
    {
        type: "input",
        message: "Please add a brief description of what your project is about.",
        name: "description",
    },
    {
        type: "input",
        message: "List some cool features about this project here.",
        name: "features"
    },
    {
        type: "input",
        name: "link",
        message: "Please provide a URL where a user can access your deployed application."
    },
    {
        type: "input",
        name: "require",
        message: "List any project dependencies here.",
    },
    {
        type: "input",
        message: "Please add a brief Installation guide.",
        name: "installation",
    },
    {
        type: "input",
        message: "What are the languages or technologies associated with this project",
        name: "usage",
    },
    {
        type: "input",
        message: "Please list any contributors. (Use GitHub usernames)",
        name: "contributors"
    },
    //license options
    {
        type: "checkbox",
        message: "Choose which license you would like to have.",
        name: "license",
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'Other'],
    },
    {
        type:"input",
        message: "Please add your github URL.",
        name: "github",
    },
    {
        type: "input",
        message: "How can users contact you? Please provide your email.",
        name: "email",
    },
    {
        type: "input",
        name: "test",
        message: "Provide walkthrough of required tests if applicable.",
    },
];

// function to write our read me file
function writeToFile(fileName, data){
    //fs
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
        
}

// Initializing app
function init() {
    inquirer.prompt(questions).then((responses) => {
      console.log("Creating Professional README.md File...");
      writeToFile("./dist/README.md", generateMarkdown({ ...responses }));
    });
  }
  init();

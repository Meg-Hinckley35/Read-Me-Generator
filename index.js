const inquirer = require('inquirer');
const fs = require('fs');

// questions
inquirer.prompt(
[
    {
        type: 'input',
        message: "What is the name of your Project?",
        name: 'title',
    }
    {
        type: 'input',
        message: "description",
        name: 'description',
    }
    {
        type: 'input',
        message: "Table of Contents",
        name: 'contents'
    }
    {
        type: 'input',
        message: "Installation",
        name: 'installation',
    }
    {
        type: 'input',
        message: "Usage",
        name: 'usage',
    }
    {
        type: 'input',
        message: "Contributions",
        name: 'contributions',
    }
    //license options
    {
        type: 'list',
        message: "",
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'Other'],
    }
    {
        type:'input',
        message: "Github",
        name: 'github',
    }
    {
        type: 'input',
        message: "email",
        name: 'email',
    }
]
).then((

))
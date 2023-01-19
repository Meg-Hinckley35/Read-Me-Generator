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
        message: "Please add a brief description of what your project is about.",
        name: 'description',
    }
    {
        type: 'input',
        message: "Please add a short Table of Contents.",
        name: 'contents'
    }
    {
        type: 'input',
        message: "Please add a brief Installation guide.",
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
        message: "Choose which license you would like to have.",
        name: 'license',
        choices: ['The MIT License', 'The GPL License', 'Apache License', 'GNU License', 'Other'],
    }
    {
        type:'input',
        message: "Please add your github URL.",
        name: 'github',
    }
    {
        type: 'input',
        message: "How can users contact you? Please provide your email.",
        name: 'email',
    }
]
).then(({
    title,
    description,
    contents,
    installation,
    usage,
    contributions,
    license,
    github,
    email
})=> {
    //template to be used:
    const template = `# ${title}
    *[Description]{#description}
    *[Table of Contents]{#contents}
    *[Installation]{#installation}
    *[Usage]{#usage}
    *[Contributions]{#contributions}
    *[License]{#license}
    *[Github]{#github}
    *[Email]{#email}
    ## Description
    ${description}
    ## Table of Contents
    ${contents}
    ## Installation
    ${installation}
    ## Usage
    ${usage}
    ## Contributions
    ${contributions}
    ## License
    ${license}
    ## Github
    ${github}
    ## Email
    ${email};`

    // function for creating the ReadMe file using fs
    creatNewfile(title, template);
}
);

// function to create our function
function creatNewfile(fileName, data){
    //fs
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`,data,(err)=>{
        if(err){
            console.log(err)
        }
        console.log('README has been generated');
    })
}


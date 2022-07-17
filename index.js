const inquirer = require('inquirer')
const fs = require('fs'); inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter project title.',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter project description.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions.',
        },
        {
            type: 'input',
            name: 'license',
            message: 'Enter project license.',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Enter contribution credits.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter tests',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter questions',
        },
    ])
    .then((answers) => {
        console.log(answers)
        // fs.writeFile('index.md', htmlPageContent, (err) =>
        //     err ? console.log(err) : console.log('Successfully created index.html!')
        // );
    });

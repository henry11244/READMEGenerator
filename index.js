const inquirer = require('inquirer')
const fs = require('fs');

const readmeWrite = (answers) => `test`;

inquirer.prompt([

    {
        type: 'input',
        name: 'username',
        message: 'Enter Github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address.',
    },
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
        name: 'usage',
        message: 'Enter installation information.',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Enter project license.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    },
    {
        type: 'input',
        name: 'license',
        message: 'Select license.',
    },
])
    .then((answers) => {

        const readmeContent = readmeWrite(answers);
        fs.writeFile('index.me', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });




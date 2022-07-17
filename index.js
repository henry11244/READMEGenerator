const inquirer = require('inquirer')
const fs = require('fs');

const readmeWrite = (answers) => `

# ${answers.title}

<div id="top"></div>

<br />
<div align="center">


<h3 align="center">${answers.title}</h3>

  <p align="center">
  ${answers.description}
    
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>



<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

${answers.installation}

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

${answers.usage}

<p align="right">(<a href="#top">back to top</a>)</p>

## License

Distributed under the ${answers.license} License.

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

${answers.contribution}

<p align="right">(<a href="#top">back to top</a>)</p>

## Tests

${answers.tests}

<p align="right">(<a href="#top">back to top</a>)</p>

## Questions

Github: [github.com/${answers.username}](github.com/${answers.username}) 
Email: [${answers.email}](${answers.email}) 
`;

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
        message: 'Enter usage information.',
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
        fs.writeFile('index.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });




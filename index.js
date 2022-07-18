const inquirer = require('inquirer')
const fs = require('fs');

const license = ['Apache', 'BSD', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Unlicense']


const licenseBadge = {
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
    IBM: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)',
    ISC: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT',
    Mozilla: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    Unlicense: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
}

const licenseDescription = {
    Apache: `Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.
    You may obtain a copy of the License at <br><br>http://www.apache.org/licenses/LICENSE-2.0 <br><br>Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and
    limitations under the License`,
    BSD: 'Distributed under the BSD License.',
    IBM: 'Distributed under the IBM License.',
    ISC: `THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`,
    MIT: 'Distributed under the MIT License.',
    Mozilla: `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`,
    Unlicense: `This is free and unencumbered software released into the public domain. < br > <br>Anyone is free to copy, modify, publish, use, compile, sell, or
        distribute this software, either in source code form or as a compiled binary, for any purpose, commercial or non-commercial, and by any means. <br><br> In jurisdictions that recognize copyright laws, the author or authors
            of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and
            successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law. <br><br>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
                OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                <br><br> For more information, please refer to <http://unlicense.org/>`,
}

const readmeWrite = (answers) => `
${licenseBadge.answers.license}

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
    <li><a href="#description">Description</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#tests">Tests</a></li>
    <li><a href="#questions">Questions</a></li>
  </ol>
</details>

<p align="right">(<a href="#top">back to top</a>)</p>

## Description

${answers.description}

<p align="right">(<a href="#top">back to top</a>)</p>

## Installation

${answers.installation}

<p align="right">(<a href="#top">back to top</a>)</p>

## Usage

${answers.usage}

<p align="right">(<a href="#top">back to top</a>)</p>

## License

${licenseDescription.answers.license}

<p align="right">(<a href="#top">back to top</a>)</p>

## Contributing

${answers.contribution}

<p align="right">(<a href="#top">back to top</a>)</p>

## Tests

${answers.tests}

<p align="right">(<a href="#top">back to top</a>)</p>

## Questions

Github: [github.com/${answers.username}](https://github.com/${answers.username}) <br>
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
        name: 'contribution',
        message: 'Enter contribution guidelines.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select license.',
        choices: license
    },
])
    .then((answers) => {

        const readmeContent = readmeWrite(answers);
        fs.writeFile('ResultREADME.md', readmeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html!')
        );
    });



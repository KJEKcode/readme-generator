const inquirer = require("inquirer");
const api = require("./api.js");
const fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "username",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects title?"
  },
  {
    type: "input",
    name: "description",
    message: "Write a description for your project"
  },
  {
    type: "input",
    name: "usage",
    message: "Enter your usage notes"
  },
  {
    type: "input",
    name: "liscense",
    message: "Enter your projects liscense information"
  },
  {
    type: "input",
    name: "contributing",
    message: "List your contributors (comma seperated)"
  },
  {
    type: "input",
    name: "test",
    message: "Tests"
  }
]).then(function(answers) {
  api.getUser(answers.username).then(({data}) => {
    fs.writeFile("genREADME.md", 
`# ${answers.title}
## Description:
${answers.description}
### Table of Contents:
- [Usage](#usage)
- [Liscense](#liscense)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
### Usage:
${answers.usage}
### Liscense
${answers.liscense}
### Contributors
${answers.contributing}
### Tests
${answers.test}
### Questions
Please direct questions to:<br>
<img src="${data.avatar_url}" width='50px'/> ${answers.username} at email: ${data.email}
<br><br>
[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Naereen/)`, 
    function(err) {

      if (err) {
        return console.log(err);
      }

      console.log("Success!");

    });
  });
  
});

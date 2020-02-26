const axios = require("axios");
const readmeTemp = require("./readmeTemplate.js")
const api = require("./api.js")
const inquirer = require("inquirer");
const fs = require("fs");
const promtQuestions = [
  {
    type: "input",
    message: "Enter Github username:",
    name: "username"
  },
  {
      type: "input",
      message: "Enter Project Title:",
      name: "title"
  },
  {
      type: "input",
      message: "Enter Description of project:",
      name:"description"
  },
  {
      type: "list",
      message: "Enter Project License:",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      name: "license"
  },
  {
      type: "input",
      message: "Enter Dependency Install Command:",
      name: "install"
  },
  {
      type: "input",
      message: "Enter Project Test Command:",
      name: "test"
  },
  {
      type: "input",
      message: "Enter Usage Notes:",
      name: "usage"
  },
  {
      type: "input",
      message: "Enter Contribution Notes:",
      name: "contributions"
  }
];

function init() {
  inquirer.prompt(promtQuestions).then(answers => {
    console.log(answers);
    api.getUser(answers.username).then(({data}) => {
      fs.writeFile('READMEtemp.md', readmeTemp({...answers, ...data}), err=>{
        if(err) throw err
        console.log('Success!')
      })
    })
  })
}

init();


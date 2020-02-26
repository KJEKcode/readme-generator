function readmeTemp(data) {
return `
# ${data.title}
${data.description}
## Table of Contents
- [Liscense](#liscense)
- [Install](#install-command)
- [Test](#test-command)
- [Usage Notes](#usage-notes)
- [Contribution Notes](#contribution-notes)
- [Questions](#questions)
### License
${data.license}
### Install Command
${data.install}
### Test Command
${data.test}
### Usage Notes
${data.usage}
### Contribution Notes
${data.contributions}
### Questions

<img src="${data.avatar_url}" width='50px'/>

${data.username} at email: ${data.email}

![ForTheBadge uses-js](http://ForTheBadge.com/images/badges/uses-js.svg)
`
}

module.exports = readmeTemp;

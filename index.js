const inquirer = require('inquirer')
const chalk = require('chalk')
const fs = require('fs')
let qs = require('./questions')

function write(data) {
  var w_data = new Buffer(data);
  fs.writeFile(__dirname + '/manifest.json', w_data, function(err) {
    if (err) {
      console.error(chalk.red(err));
    } else {
      console.log(chalk.green('写入成功'))
    }
});
}

inquirer.prompt(qs.questions).then(function(answers) {
  answers = qs.revise(answers)
  write(JSON.stringify(answers, null, 2))
})
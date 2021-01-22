const inquirer = require('inquirer');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username'
    },
    {
      type: 'input',
      name: 'about',
      message: 'Provide some information about yourself:'
    }
  ]);
};
promptUser().then(answers => console.log(answers));
const fs = require('fs');
const generatePage = require('./src/page-template.js');

//console.log(inquirer);

const pageHTML = generatePage(name, github);
// const profileDataArgs = process.argv.slice(2);
// const [name, github] = profileDataArgs;

//console.log(profileDataArgs);

// Notice the lack of parentheses around the `profileDataArr` parameter?
//const printProfileData = profileDataArr => {
    // This...
    //for (let i = 0; i < profileDataArr.length; i += 1) {
      //console.log(profileDataArr[i]);
    //}
  
    //console.log('================');
  
    // Is the same as this...
    //profileDataArr.forEach(profileItem => console.log(profileItem));
//};
  
// printProfileData(profileDataArgs);



//console.log(name, github);
//console.log(generatePage(name, github))

fs.writeFile('./index.html', pageHTML, err => {
  if (err) throw new Error(err);

  console.log('Portfolio complete! Check out index.html to see the output!');
});
const inquirer = require("inquirer")
const axios = require("axios")

const questions = [
  {
    type:"checkbox",
    name:"color",
    message:"Which of these colors is your favorite?",
    choices:["green","blue","pink","red"]
    },
  {
    type:"input",
    name:"user",
    message:"What GitHub username would you like to generate a profile for?"
  }
];

inquirer.prompt(questions).then(function({user}){
    queryURL = "https://api.github.com/users/" + user.name
    axios.get(queryURL);
});


function writeToFile(fileName, data) {
 
}

function init() {
}
init();

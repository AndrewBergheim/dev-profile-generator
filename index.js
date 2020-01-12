const fs = require("fs")
const inquirer = require("inquirer")
const axios = require("axios")
const convertFactory = require("electron-html-to")

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


inquirer.prompt(questions).then(
  function(data){
    const user = data.user
    const color = data.color
    console.log("USERNAME: " + user)
    console.log("COLOR: " + color)
    const queryURL = "https://api.github.com/users/" + user;
    console.log(queryURL)
    try {
      axios.get(queryURL).then(
        (response) =>{
        console.log(response)
        }
      )
  }    
  
    catch(error){
      console.log(error)
    }
  } 
)
  




function writeToFile(fileName, data) {

}

function init() {
}
init();

//copy functions from generateHTML.js
const colors = {
  green: {
    wrapperBackground: "#E6E1C3",
    headerBackground: "#C1C72C",
    headerColor: "black",
    photoBorderColor: "#black"
  },
  blue: {
    wrapperBackground: "#5F64D3",
    headerBackground: "#26175A",
    headerColor: "white",
    photoBorderColor: "#73448C"
  },
  pink: {
    wrapperBackground: "#879CDF",
    headerBackground: "#FF8374",
    headerColor: "white",
    photoBorderColor: "#FEE24C"
  },
  red: {
    wrapperBackground: "#DE9967",
    headerBackground: "#870603",
    headerColor: "white",
    photoBorderColor: "white"
  }
};
let convertFunction = function(){
  let conversion = convertFactory({
    converterPath: convertFactory.converters.PDF 
  })

  conversion(
    {html: newHTML}, function(err, result){
      if (err){
        return console.error(err)
      }
      //console.log(result)
      result.stream.pipe(fs.createWriteStream("./resume.pdf"))
      console.log("Conversion success! resume.pdf generated at root.")
      conversion.kill()
    }
    
  )
}

const electron = require("electron")
let generateHTML = function(color, responseData, stars) {
  return `<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
      <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
      <title>Document</title>
      <style>
          @page {
            margin: 0;
          }
          *,
          *::after,
          *::before {
          box-sizing: border-box;
          }
          html, body {
          padding: 0;
          margin: 0;
          }
          html, body, .wrapper {
          height: 100%;
          }
          .wrapper {
          background-color: ${colors[color].wrapperBackground};
          padding-top: 100px;
          }
          body {
          background-color: ${colors[color].wrapperBackground};
          -webkit-print-color-adjust: exact !important;
          font-family: 'Cabin', sans-serif;
          }
          main {
          background-color: #E9EDEE;
          height: auto;
          padding-top: 30px;
          }
          h1, h2, h3, h4, h5, h6 {
          font-family: 'BioRhyme', serif;
          margin: 0;
          }
          h1 {
          font-size: 3em;
          }
          h2 {
          font-size: 2.5em;
          }
          h3 {
          font-size: 2em;
          }
          h4 {
          font-size: 1.5em;
          }
          h5 {
          font-size: 1.3em;
          }
          h6 {
          font-size: 1.2em;
          }
          .photo-header {
          position: relative;
          margin: 0 auto;
          margin-bottom: -50px;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          background-color: ${colors[color].headerBackground};
          color: ${colors[color].headerColor};
          padding: 10px;
          width: 95%;
          border-radius: 6px;
          }
          .photo-header img {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          object-fit: cover;
          margin-top: -75px;
          margin-bottom: 10px;
          border: 6px solid ${colors[color].photoBorderColor};
          box-shadow: rgba(0, 0, 0, 0.3) 4px 1px 20px 4px;
          }
          .photo-header h1, .photo-header h2 {
          width: 100%;
          text-align: center;
          }
          .photo-header h1 {
          margin-top: 10px;
          }
          .links-nav {
          width: 100%;
          text-align: center;
          padding: 20px 0;
          font-size: 1.1em;
          }
          .nav-link {
          display: inline-block;
          margin: 5px 10px;
          }
          .workExp-date {
          font-style: italic;
          font-size: .7em;
          text-align: right;
          margin-top: 10px;
          }
          .container {
          padding: 50px;
          padding-left: 100px;
          padding-right: 100px;
          }

          .row {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 20px;
            margin-bottom: 20px;
          }

          .card {
            padding: 20px;
            border-radius: 6px;
            background-color: ${colors[color].headerBackground};
            color: ${colors[color].headerColor};
            margin: 20px;
          }
          
          .col {
          flex: 1;
          text-align: center;
          }

          a, a:hover {
          text-decoration: none;
          color: inherit;
          font-weight: bold;
          }

          @media print { 
          body { 
            zoom: .75; 
          } 
          }
      </style>
      <body>
      <div class = "wrapper">
        <main>
          <!--Header with photo-->
          <div class = "photo-header">
            <img class = "photo-header" src = ${responseData.data.avatar_url}>
            <h1>${responseData.data.name}</h1>
            <div class = "links-nav">
              <h6 class = "nav-link">${responseData.data.location}</h6>
              <h6 class = "nav-link"><a href = "${responseData.data.url}" >GitHub</a></h6>
              <h6 class = "nav-link"><a href = "${responseData.data.blog}" >Portfolio</a></h6>
            </div>
          </div>
          <div class = "container">  
            <h6 style = "text-align:center">${responseData.data.bio}</h6>
            <div class = "row">
              <div class = "col">
                <div class = "card">
                  <h1>Repos</h1>
                  <h5>${responseData.data.public_repos}</h5>
                </div>
              </div>
              <div class = "col">
                <div class = "card">
                  <h1>Followers</h1>
                  <h5>${responseData.data.followers}</h5>
                </div>
              </div>
            </div>
            <div class = "row">
              <div class = "col">
                <div class = "card">
                  <h1>GitHub Stars</h1>
                  <h5>${stars}</h5>
                </div>
              </div>
              <div class = "col">
                <div class = "card">
                  <h1>Following</h1>
                  <h5>${responseData.data.following}</h5>
                </div>
              </div>
            </div>
          </div> 
        </main>
      </div>
      </body>
      `
    }
const fs = require("fs")
const inquirer = require("inquirer")
const axios = require("axios")
const convertFactory = require("electron-html-to")
let color;
let stars = 0;
let newHTML;
let user;
/*
let writeFunction =  function writeToFile(fileName, fileContent) {
  fs.writeFile(fileName,fileContent,function(err){
    if (err){
      console.log(err)
    }
    else console.log("File written!")
  })
}
*/
//console.log("begin")

const questions = [
  {
    type:"list",
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


let inquireFunction = function(){ 
  inquirer.prompt(questions).then(
    function(data){
      // record username response
      user = data.user
      //record color response
      color = data.color

      // log username and color
      console.log("USERNAME: " + user)
      console.log("COLOR: " + color)

      // establish urls to query
      const queryURL = "https://api.github.com/users/" + user;
      const queryTwoURL = "https://api.github.com/users/" + user + "/repos";
      console.log(queryURL)

      // axios request that URL to get an object used for HTML construction
      try {
        axios.all([
          axios.get(queryURL),
          axios.get(queryTwoURL)
        ]).then(
        (axios.spread((responseData,repoData) =>{
          for (let i = 0; i < repoData.data.length; i++){
            stars += repoData.data[i].watchers
          }
          newHTML = generateHTML(color, responseData, stars)
          console.log("HTML generated!")
          convertFunction()
        })
        )
      )
    }
    //catch error if requests fail
      catch(error){
        console.log(error)
      }
    }
  )}

  

// then use provided generateHTML function to create page
// then write new html to accessible file


let init = function(){
  inquireFunction()
}


init();

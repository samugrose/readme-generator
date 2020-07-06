const inquirer = require("inquirer");
const fs = require("fs");
const readMeTemp = require("./readmetemp.js");
const questions = require("./inquirer_questions");

inquirer.prompt(
    questions.questions
).then(function(response){
    console.log("sucess!");
    console.log(response);
    fs.writeFile("READMEGEN.md", readMeTemp(response), function(err){
        if(err){
            throw err;
        }console.log("new readme written");
    })
})
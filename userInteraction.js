var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./dbConnection.js");

connection.connect(function (err) {
    if (err) throw err;
    console.log("it's working");
    // functions here
});

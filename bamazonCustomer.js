var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./dbConnection.js");
var bamazon = require("./userPrompt.js");

connection.connect(function (err) {
    if (err) throw err;
    bamazon.start();
});


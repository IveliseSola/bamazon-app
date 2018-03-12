var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./dbConnection.js");

connection.connect(function (err) {
    if (err) throw err;
    console.log("it's working");
    // functions here
});

inquirer.prompt([
    {
        type: "input",
        name: "idProduct",
        message: "What's the id of the product you want to buy?"
      },
      {
        type: "input",
        name: "productQuantity",
        message: "How many you want to buy?"
      }
]).then(function(inquirerResponse) {
    if (inquirerResponse.options === "post an item"){
         //postItems();
         console.log(inquirerResponse.options);
    }else {
        //bidItem();
        console.log(inquirerResponse.options);
    }
});
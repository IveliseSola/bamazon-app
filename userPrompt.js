var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./dbConnection.js");
var myQueries = require("./dbQueries.js");

// connection.connect(function (err) {
//     if (err) throw err;
//     console.log("ok estoy aqui");
//     myQueries.allProducts();
// });

// inquirer.prompt([
//     {
//         type: "input",
//         name: "idProduct",
//         message: "What's the id of the product you want to buy?"
//       },
//       {
//         type: "input",
//         name: "productQuantity",
//         message: "How many you want to buy?"
//       }
// ]).then(function(inquirerResponse) {
//     if (a=b){
//          //postItems();
//          console.log(inquirerResponse.options);
//     }else {
//         //bidItem();
//         console.log(inquirerResponse.options);
//     }
// });
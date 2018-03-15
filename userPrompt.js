var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./dbConnection.js");
var myQueries = require("./dbQueries.js");

module.exports.main = function() {
    //myQueries.allProducts();
    inquirer.prompt([
        {
            type: "input",
            name: "idProduct",
            message: "What's the id of the product you want to buy?"
        },
        {
            type: "input",
            name: "productQuantity",
            message: "How many do you want to buy?"
        }
    ]).then(function (inquirerResponse) {

        var quantityRequired = parseInt(inquirerResponse.productQuantity);
        var idParsed = parseInt(inquirerResponse.idProduct);
        
         myQueries.product(idParsed, quantityRequired);
            
});
}

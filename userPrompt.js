var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = require("./dbConnection.js");
var myQueries = require("./dbQueries.js");

module.exports.start = function () {

    //myQueries.allProducts();
    main();
}

function main() {
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
        var callback = myQueries.callback;
        var quantity = myQueries.getProduct(idParsed, callback);
            
        console.log(quantity);
        if (quantity >= quantityRequired) {
            var num = quantity - quantityRequired;
            myQueries.updateInventory(num, idParsed);
            var cost = myQueries.totalCost(idParsed, quantityRequired);
            console.log("The total cost of your purchase is: $" + cost);
        } else {
           
            console.log("Insufficient quantity!");
        }
    });
}

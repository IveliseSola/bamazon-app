var inquirer = require("inquirer");
var myQueries = require("./dbQueries.js");



module.exports.main = function() {
    myQueries.allProducts();
    setTimeout(userprompt, 1000);
    //userprompt();
}
function userprompt() {
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
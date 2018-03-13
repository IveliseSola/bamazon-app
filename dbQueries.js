var mysql = require("mysql");
var connection = require("./dbConnection.js");

connection.connect(function (err) {
    if (err) throw err;
    //allProducts();
});

var allProducts = function selectProducts() {
    console.log("Products:\n");
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("\n" + "Product id: " + res[i].item_id + ", "
                + "Product Name: " + res[i].product_name + ", "
                + "Price: $" + res[i].price + "\n");
        }
        connection.end();
    });
}
module.exports = allProducts();
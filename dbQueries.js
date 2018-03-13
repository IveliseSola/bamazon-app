var connection = require("./dbConnection.js");

connection.connect(function (err) {
    if (err) throw err;
    // functions here
});

module.exports = allProducts;

var allProducts = function selectProducts(){
    console.log("Products:...\n");
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
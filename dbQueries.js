
var connection = require("./dbConnection.js");

var allProducts = function () {
    console.log("\n Products: \n");
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

var getProduct = function (arg) {
    connection.query("SELECT stock_quantity FROM products WHERE ?", {
        item_id: arg
    }, function (err, res) {
        if (err) throw err;
        return res.stock_quantity;
        connection.end();
    });
}

var updateInventory = function (arg1, arg2) {
    connection.query("UPDATE ? FROM products WHERE ?",
        [
            {
                stock_quantity: arg1
            },
            {
                item_id: arg2
            }
        ],
        function (err, res) {
            if (err) throw err;
            connection.end();
        });
}

var totalCost = function (arg1, arg2){
    connection.query("SELECT price FROM products WHERE ?", {
        item_id: arg1
    }, function (err, res) {
        if (err) throw err;
        return res.price * arg2;
        connection.end();
    });
}

module.exports = {
    allProducts = allProducts,
    getProduct = getProduct,
    updateInventory = updateInventory,
    totalCost = totalCost
}
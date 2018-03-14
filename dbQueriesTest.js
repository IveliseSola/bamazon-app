var mysql = require("mysql");
var connection = require("./dbConnection.js");
var aux = 0;

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

var getProduct = function (arg, callback) {
    var res = connection.query("SELECT stock_quantity FROM products WHERE ?",
    {
        item_id: arg
    }, function(err, result) {
        if(err) throw err;
        return callback(result);
        connection.end();
    });
}

module.exports.callback = function(res) {
    var result = res;
    return result[0].stock_quantity;
}

getProduct(arg, callback);

var updateInventory = function (arg1, arg2) {
    connection.query("UPDATE products SET ? WHERE ?",
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

var totalCost = function (arg1, arg2) {
    connection.query("SELECT price FROM products WHERE ?", {
        item_id: arg1
    }, function (err, res) {
        if (err) throw err;
        return res.price * arg2;
        connection.end();
    });
}

module.exports = {
    allProducts: function () { },
    getProduct: function () { },
    callback: function () {},
    // updateInventory: function () { },
    totalCost: function () { }
}

// console.log(getProduct(5));
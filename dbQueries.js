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

module.exports.product = function(arg, arg1) {
    connection.query("SELECT stock_quantity FROM products WHERE ?",
        {
            item_id: arg
        }, function (err, result) {
            if (err) throw err;
            if (result[0].stock_quantity >= arg1) {
                var num = result[0].stock_quantity - arg1;
                updateInventory(num, arg);
                calculateCost(arg, arg1);
            } else {
                console.log("Insufficient quantity!");
            }
            connection.end();
        });
}

function updateInventory (arg1, arg2) {
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
            //connection.end();
        });
}

function calculateCost(arg1, arg2) {
    connection.query("SELECT price FROM products WHERE ?", {
        item_id: arg1
    }, function (err, res) {
        if (err) throw err;
        console.log("The total cost of your purchase is: $" + res[0].price * arg2);
        //connection.end();
    });
}

// module.exports = {
//     // callback: callback,
//     allProducts: function () { },
//     getProduct: function () { },
//     updateInventory: function () { },
//     totalCost: function () { }
// }


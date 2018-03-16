var bamazon = require("./userPrompt.js");

connection.connect(function (err) {
    if (err) throw err;
   bamazon.main();
});



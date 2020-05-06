var connection = require("../config/connection.js");

var orm = {
selectAll: function (cb) {
    var queryString = "SELECT * FROM burgers;";
    connection.query(queryString, (err, result) => {
    if(err) {throw err;}
        cb(result);
    });
},

insertOne: function (vals, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false);";
    connection.query(queryString, vals, (err, result) => {
    if(err) {throw err;}
        cb(result);
    });

},

updateOne: function (colOneVal, colTwoVal, cb) {
    var queryString = "UPDATE burgers SET devoured = ? WHERE burger_name = ?";
    connection.query(queryString, [colOneVal, colTwoVal], (err, result) => {
    if(err) {throw err;}
        cb(result);
    });
}
}

module.exports = orm;
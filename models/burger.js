var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", res => {
            cb(res);
        });
    },

    insertOne: function(vals, cb) {
        orm.insertOne("burgers", vals, res => {
            cb(res);
        });
    },

    updateOne: function(colOneVal, colTwoVal, cb) {
        orm.updateOne("burgers", colOneVal, colTwoVal, res => {
            cb(res);
        });
    }
};

module.exports = burger;
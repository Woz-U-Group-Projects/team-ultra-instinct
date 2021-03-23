'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * addColumn "Type" to table "products"
 *
 **/

var info = {
    "revision": 2,
    "name": "product_model_type",
    "created": "2021-03-16T18:48:23.351Z",
    "comment": ""
};

var migrationCommands = [{
    fn: "addColumn",
    params: [
        "products",
        "Type",
        {
            "type": Sequelize.STRING(255),
            "field": "Type",
            "allowNull": true
        }
    ]
}];

module.exports = {
    pos: 0,
    up: function(queryInterface, Sequelize)
    {
        var index = this.pos;
        return new Promise(function(resolve, reject) {
            function next() {
                if (index < migrationCommands.length)
                {
                    let command = migrationCommands[index];
                    console.log("[#"+index+"] execute: " + command.fn);
                    index++;
                    queryInterface[command.fn].apply(queryInterface, command.params).then(next, reject);
                }
                else
                    resolve();
            }
            next();
        });
    },
    info: info
};

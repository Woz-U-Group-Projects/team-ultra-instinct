'use strict';

var Sequelize = require('sequelize');

/**
 * Actions summary:
 *
 * createTable "products", deps: []
 * createTable "users", deps: []
 *
 **/

var info = {
    "revision": 1,
    "name": "product_quantity",
    "created": "2021-03-25T02:10:59.836Z",
    "comment": ""
};

var migrationCommands = [{
        fn: "createTable",
        params: [
            "products",
            {
                "ProductId": {
                    "type": Sequelize.INTEGER(11),
                    "field": "ProductId",
                    "primaryKey": true,
                    "allowNull": false
                },
                "Name": {
                    "type": Sequelize.STRING(255),
                    "field": "Name",
                    "allowNull": true
                },
                "Cost": {
                    "type": Sequelize.INTEGER(11),
                    "field": "Cost",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                },
                "Type": {
                    "type": Sequelize.STRING(255),
                    "field": "Type",
                    "allowNull": true
                },
                "Quantity": {
                    "type": Sequelize.INTEGER(99),
                    "field": "Quantity",
                    "allowNull": false
                }
            },
            {}
        ]
    },
    {
        fn: "createTable",
        params: [
            "users",
            {
                "UserId": {
                    "type": Sequelize.INTEGER(11),
                    "field": "UserId",
                    "primaryKey": true,
                    "allowNull": false
                },
                "FirstName": {
                    "type": Sequelize.STRING(255),
                    "field": "FirstName",
                    "allowNull": true
                },
                "LastName": {
                    "type": Sequelize.STRING(255),
                    "field": "LastName",
                    "allowNull": true
                },
                "Email": {
                    "type": Sequelize.STRING(255),
                    "field": "Email",
                    "allowNull": true
                },
                "Username": {
                    "type": Sequelize.STRING(255),
                    "field": "Username",
                    "allowNull": true
                },
                "Password": {
                    "type": Sequelize.STRING(255),
                    "field": "Password",
                    "allowNull": true
                },
                "createdAt": {
                    "type": Sequelize.DATE,
                    "field": "createdAt",
                    "allowNull": false
                },
                "updatedAt": {
                    "type": Sequelize.DATE,
                    "field": "updatedAt",
                    "allowNull": false
                }
            },
            {}
        ]
    }
];

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

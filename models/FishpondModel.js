const { Sequelize, DataTypes } = require("sequelize");
const db = require("../config/database");

const Fishpond = db.define("Fishpond", {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

module.exports = Fishpond;

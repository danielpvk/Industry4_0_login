var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "test";
var config = require(__dirname + "/../config/config.json")[env];



if (config.use_env_variable) {
  var exampleSequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var exampleSequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

}

var DeviceType = exampleSequelize.define("DeviceTypes", {
    DeviceTypeDescription: Sequelize.TEXT,
    Parameters_quantity: Sequelize.INTEGER,
    Parameter1_name: Sequelize.STRING,
    Parameter1_min_val: Sequelize.INTEGER,
    Parameter1_max_val: Sequelize.INTEGER,
    Parameter2_name: Sequelize.STRING,
    Parameter2_min_val: Sequelize.INTEGER,
    Parameter2_max_val: Sequelize.INTEGER,
    Parameter3_name: Sequelize.STRING,
    Parameter3_min_val: Sequelize.INTEGER,
    Parameter3_max_val: Sequelize.INTEGER,
    Parameter4_name: Sequelize.STRING,
    Parameter4_min_val: Sequelize.INTEGER,
    Parameter4_max_val: Sequelize.INTEGER,
    Parameter5_name: Sequelize.STRING,
    Parameter5_min_val: Sequelize.INTEGER,
    Parameter5_max_val: Sequelize.INTEGER,
  });

  module.exports = DeviceType;

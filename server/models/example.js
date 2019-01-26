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

var Process = exampleSequelize.define("Process", {
    Process_name: Sequelize.STRING,
    Process_Description: Sequelize.TEXT,
    Devices_quantity: Sequelize.INTEGER,
    Device1_name: Sequelize.STRING,
    Device1_type: Sequelize.INTEGER,
    IdDevice1: Sequelize.INTEGER,
    Device2_name: Sequelize.STRING,
    Device2_type: Sequelize.INTEGER,
    IdDevice2: Sequelize.INTEGER,
    Device3_name: Sequelize.STRING,
    Device3_type: Sequelize.INTEGER,
    IdDevice3: Sequelize.INTEGER,
    Device4_name: Sequelize.STRING,
    Device4_type: Sequelize.INTEGER,
    IdDevice4: Sequelize.INTEGER,
    Device5_name: Sequelize.STRING,
    Device5_type: Sequelize.INTEGER,
    IdDevice5: Sequelize.INTEGER,
    Device1_type_description:Sequelize.STRING,
    Device2_type_description:Sequelize.STRING,
    Device3_type_description:Sequelize.STRING,
    Device4_type_description:Sequelize.STRING,
    Device5_type_description:Sequelize.STRING
  });

  module.exports = Process;

/* 
module.exports =function(sequelize, DataTypes) {
  var Process = sequelize.define("Process", {
    Process_name: DataTypes.STRING,
    Process_Description: DataTypes.TEXT,
    Devices_quantity: DataTypes.INTEGER,
    Device1_name: DataTypes.STRING,
    Device1_type: DataTypes.INTEGER,
    IdDevice1: DataTypes.INTEGER,
    Device2_name: DataTypes.STRING,
    Device2_type: DataTypes.INTEGER,
    IdDevice2: DataTypes.INTEGER,
    Device3_name: DataTypes.STRING,
    Device3_type: DataTypes.INTEGER,
    IdDevice3: DataTypes.INTEGER,
    Device4_name: DataTypes.STRING,
    Device4_type: DataTypes.INTEGER,
    IdDevice4: DataTypes.INTEGER,
    Device5_name: DataTypes.STRING,
    Device5_type: DataTypes.INTEGER,
    IdDevice5: DataTypes.INTEGER,
    Device1_type_description:DataTypes.STRING,
    Device2_type_description:DataTypes.STRING,
    Device3_type_description:DataTypes.STRING,
    Device4_type_description:DataTypes.STRING,
    Device5_type_description:DataTypes.STRING
  });

  return Process;
};
 */

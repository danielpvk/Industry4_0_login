var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "test";
var config = require(__dirname + "/../config/config.json")[env];

if (config.use_env_variable) {
  var exampleSequelize = new Sequelize(process.env[config.use_env_variable]);
  console.log("config");
} else {
  var exampleSequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

var Device = exampleSequelize.define("Devices", {
  LectureP1: Sequelize.FLOAT,
  LectureP2: Sequelize.FLOAT,
  LectureP3: Sequelize.FLOAT,
  LectureP4: Sequelize.FLOAT,
  LectureP5: Sequelize.FLOAT,
  NumSerie: Sequelize.INTEGER
});

module.exports = Device;

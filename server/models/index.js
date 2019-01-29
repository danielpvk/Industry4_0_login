"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "test";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};
console.log("config", process.env.NODE_ENV);
if (config.use_env_variable) {
  console.log("config", process.env.NODE_ENV);
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.DeviceType = require("../models/devicetype.js");
db.Process = require("../models/example.js");
db.Device = require("../models/device.js");
db.User = require("../models/user.js");
module.exports = db;

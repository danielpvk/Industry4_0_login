var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "test";
var config = require(__dirname + "/../config/config.json")[env];



if (config.use_env_variable) {
  var userSequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var userSequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );

}

var User = userSequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  /* hooks: {
    beforeCreate: (user) => {
      const salt = bcrypt.genSaltSync();
      user.password = bcrypt.hashSync(user.password, salt);
    }
  } */
});

User.prototype.validPassword = function (password) {
  return (password==this.password);
}

userSequelize.sync().then( () => console.log('Db Connection OK, User Table Ready')).catch( err => console.log("DB Err: ", err));

module.exports = User;


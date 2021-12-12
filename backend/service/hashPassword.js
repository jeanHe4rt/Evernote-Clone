var bcrypt = require("bcryptjs");
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("B4c0//", salt);

const password = async (pass) => {
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(pass, salt, function (err, hash) {
      
    });
  });
};

module.exports = ("hashPassword", password);

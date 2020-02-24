const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { INVALID_CRED, LOGGED_IN } = require("../utils/response_constants");

Admin.login = async ({ login, password }) => {
  let date = Math.floor(Date.now() / 1000) + 60 * 60;
  try {
    let user = await Admin.findOne({ login });
    if (user) {
      let isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        let token = await assign_jwt(data);
        await Admin.update(
          { _id: user._id },
          { $push: { tokens: { token, expiredAt: date } } }
        );
        LOGGED_IN.token = token;
        return LOGGED_IN;
      }
    }
    return INVALID_CRED;
  } catch (e) {
    return INVALID_CRED;
  }
};

/**
 * Private Functions
 */

let assign_jwt = async date => {
  try {
    let token = await jwt.sign(
      { user: "GAGO" },
      process.env.JWT_SECRET,
      { name },
      {
        exp: date
      }
    );
    return token;
  } catch (e) {
    return false;
  }
};

module.exports = Admin;

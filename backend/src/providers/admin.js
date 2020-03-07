const Admin = require("../models/Admin");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { INVALID_CRED, LOGGED_IN,UNAUTHIORIZED } = require("../utils/response_constants");

Admin.login = async ({ login, password }) => {
  try {
    let date =
      Math.floor(Date.now() / 1000) + 60 * process.env.EXPIRATIONS_TIME_MINUTES;
    let user = await Admin.findOne({ login });
    if (user) {
      let isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        let token = await assign_jwt(date);
        await Admin.update(
          { _id: user._id },
          { $push: { tokens: { token: token, expiredAt: date } } }
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

Admin.reg = async ({ login, password }) => {
  try {
    let admin = new Admin({
      login,
      password
    });
    let data = await admin.save();
    return data;
  } catch (e) {
    return e;
  }
};

Admin.checkJwt = async token => {
  try {
    let isActive = jwt.verify(token, process.env.JWT_SECRET);
    let isExist =await Admin.find({ tokens: { $elemMatch: { token } } });
    if (isActive && isExist) {
      return { success: true, msg: "Token is active",statusCode:200 };
    } else {
      return UNAUTHIORIZED;
    }
  } catch (e) {
    return UNAUTHIORIZED;
  }
};

/**
 * Private Functions
 */

let assign_jwt = async date => {
  try {
    let token = await jwt.sign(
      { user: "GAGO", exp: date },
      process.env.JWT_SECRET
    );
    return token;
  } catch (e) {
    return false;
  }
};

module.exports = Admin;

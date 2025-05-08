const express = require("express");
const app =express()
const router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
app.use(cookieParser())
const schema = require("../middleware/authentication.validations");
const passwordschema = require("../middleware/password.validations");
const { generalresponse, runQuery } = require("../helper/helping");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRETS;
const bcrypt = require("bcryptjs");
const { finduserbymail, createuser } = require("../helper/queries");
exports.getsignup = async (req, res) => {
  res.render("screens/register");
};
exports.postsignup = async (req, res) => {
  try {
    let data = {
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
    };
    const response = await schema.validate({
      fname: req.body.fname,
      lname: req.body.lname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
    });
    const checkuser = await finduserbymail(req.body.email);
    if (checkuser != "") {
      success = res
        .json(generalresponse("data","user with same email is already exist", false));
      return success;
    }
    if (response.error) {
      return res.send({ success: false, msg: response.error.details[0].message });
    }
    const token = jwt.sign(data, JWT_SECRET, { expiresIn: "5m" });
    res.send({
      token: token,
      data: data,
      success: true,
      msg: "check mail to set up password",
    });
  } catch (error) {
    res.send({
      success: false,
      msg: "internal server error",
    });
  }
};

exports.getvarification = async (req, res) => {
  res.render("screens/verification");
};
exports.postverification = async (req, res) => {
  try {
    jwt.verify(req.body.token, JWT_SECRET, function (err, decoded) {
      if (err) {
        return res.status(401).json({
          msg: "invalid token",
          success: false,
        });
      } else {
        return res.status(200).json({
          msg: "authorization successfully",
          success: true,
        });
      }
    });
  } catch (error) {
    return res.json({
      msg: "internal server error",
      success: false,
    });
  }
  
};
exports.getpasswordsetup = async (req, res) => {
  res.render("screens/passwordsetup");
};
exports.postpasswordsetup = async (req, res) => {
  const responsefirst = await schema.validate({
    fname: req.body.fname,
    lname: req.body.lname,
    email: req.body.email,
    phonenumber: req.body.phonenumber,
  });
  const checkuser = await finduserbymail(req.body.email);
  if (checkuser != "") {
    success = res
      .json(generalresponse("data","user with same email is already exist", false));
    return success;
  }
  if (responsefirst.error) {
    return res.send({ success: false, msg: "can't set password! you should register again" });
  }
  const response = await passwordschema.validate({
    password: req.body.password,
    cpassword: req.body.cpassword,
  });
  if (response.error) {
    return res.send({ success: false, msg: response.error.details[0].message });
  }
  let password = req.body.password;
  let fname = req.body.fname;
  let lname = req.body.lname;
  let email = req.body.email;
  let phonenumber = req.body.phonenumber;
  const salt = await bcrypt.genSalt(10);
  const secPass = await bcrypt.hash(password, salt);
  try {
    const result = await createuser(fname,lname,email,phonenumber,secPass)
    res.send({
      success: true,
      msg: "successfully account has been creted! you can login now",
    });
  } catch (error) {
    res.send({
      success: false,
      msg: "internal server error",
    });
  }
};
exports.getlogin = async (req,res) => {
  res.render('screens/login')
}
exports.postlogin = async (req,res) => {
  try {
    let email = req.body.username;
    let enterdpassword = req.body.password;
    const result = await finduserbymail(email);
    if(result == ""){
      success = res
      .json(generalresponse("data","password isn't matching with corspoding mail",false));
    return success;
    }
    let passwordcompare = await bcrypt.compare(
      enterdpassword,
      result[0].password
    );
    if (!passwordcompare) {
      success = res
      .json(generalresponse("data","password isn't matching with corspoding mail",false));
    return success;
    }
    const data = {
      fname: result[0].fname,
      lname: result[0].lname,
      email: result[0].email,
    };
    const authtoken = jwt.sign(data, JWT_SECRET,{ expiresIn: '10m' });
      res.cookie("TwitterToken", authtoken, {
      httpOnly: true,
      secure: false,
      maxAge: 60 * 60 *1000 ,
    });
    res.send({ success: true  , msg:"login successfully you are on home screen"});
  } catch (error) {
    res.send({ success: true  , msg:"internal server error"});
  }
};
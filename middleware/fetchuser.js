var jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRETS;


const fetchuser = (req, res, next) => {
  const token = req.cookies.TwitterToken;
  
  if (!token) {
    return res.redirect('/login')
  }
  try {
    const data = jwt.verify(token, JWT_SECRET, (err, decode) => {
      if (err) {
        return res.redirect('/login')
      } else {
        req.user = decode;
        next();
      }
    });
  } catch (error) {
    return res.redirect('/login')
  }
};
module.exports = fetchuser;
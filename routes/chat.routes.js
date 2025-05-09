const express = require("express");
const router = express.Router();
const app = express();
app.set("view engine", "ejs");
const multer = require("multer");
var bodyParser = require("body-parser");
const fetchuser = require("../middleware/fetchuser");
const { gethome, gettweetcreate, posttweetcreate, gettweetviews, postdelete,getupdate, postupdate, getusers, followpost, fetchtweets, fetchtweetsoffollowing, getfollowing, postfollowing, getprofilepage, postretweets, postshowretweet, likepost, dislikepost, logout, postupdateprofile } = require("../controller/application.controller");
const { chathomeget, fetchuserpost, postchat, fetchmessages, deletemessage, updatemessage, fetchmsg } = require("../controller/chat.controller");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads/");
  },
  filename: (req, file, cb) => {
    let timestamp = Date.now();
    let pathname = file.originalname;
    cb(null, `${timestamp}_${pathname}`);
  },
});
const upload = multer({ storage: storage });
router.get('/chathome',fetchuser,chathomeget)
router.post("/fetchuser",fetchuser,fetchuserpost)
router.post("/sendchat",fetchuser,upload.none(),postchat)
router.post("/fetchmessages",fetchuser,upload.none(),fetchmessages)
router.post("/deletemessage",fetchuser,upload.none(),deletemessage)
router.post("/updatemessage",fetchuser,upload.none(),updatemessage)
router.post("/fetchmsg",fetchuser,upload.none(),fetchmsg)

module.exports = router
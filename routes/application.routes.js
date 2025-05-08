const express = require("express");
const router = express.Router();
const app = express();
app.set("view engine", "ejs");
const multer = require("multer");
var bodyParser = require("body-parser");
const fetchuser = require("../middleware/fetchuser");
const { gethome, gettweetcreate, posttweetcreate, gettweetviews, postdelete,getupdate, postupdate, getusers, followpost, fetchtweets, fetchtweetsoffollowing, getfollowing, postfollowing, getprofilepage, postretweets, postshowretweet, likepost, dislikepost, logout, postupdateprofile } = require("../controller/application.controller");
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
// all are protected routes
router.get('/home',fetchuser,gethome)
router.get('/create-tweet',fetchuser,gettweetcreate)
router.post("/create-tweet",upload.none(),fetchuser,posttweetcreate)
router.get("/viewtweets",fetchuser, gettweetviews)
router.post('/delete',fetchuser,upload.none(),postdelete)
router.get("/update/:id",fetchuser,upload.none(),getupdate)
router.post("/update",fetchuser,upload.none(),postupdate)
router.get("/viewusers",fetchuser,getusers)
router.post("/follow",fetchuser,upload.none(),followpost)
router.post("/fetchtweets",fetchuser,fetchtweets)
router.post("/fetchtweetsbyfollowing",fetchuser,upload.none(),fetchtweetsoffollowing)
router.get("/following",fetchuser,getfollowing)
router.post('/unfollow',upload.none(),fetchuser,postfollowing)
router.get("/profile",fetchuser,getprofilepage)
router.post('/retweet',fetchuser,upload.none(),postretweets)
router.post('/showretweet',fetchuser,upload.none(),postshowretweet)
router.post('/likepost',fetchuser,upload.none(),likepost)
router.post('/dislikepost',fetchuser,upload.none(),dislikepost)
router.post('/logout',fetchuser,logout)
router.post('/updateprofile',fetchuser,upload.none(),postupdateprofile)

module.exports = router;

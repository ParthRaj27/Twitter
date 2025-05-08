const express = require("express");
const {
  getsignup,
  postsignup,
  getvarification,
  postverification,
  postpasswordsetup,
  getpasswordsetup,
  getlogin,
  postlogin,
} = require("../controller/authentication.controller");
const router = express.Router();
const app = express();
app.set("view engine", "ejs");
const multer = require("multer");
var bodyParser = require("body-parser");
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
router.get("/", getsignup);
router.post("/register", upload.none(), postsignup);
router.get("/verification",getvarification)
router.post("/verification",upload.none(),postverification)
router.get("/set-password",getpasswordsetup);
router.post('/set-password',upload.none(),postpasswordsetup)
router.get('/login',getlogin)
router.post('/login',upload.none(),postlogin)


module.exports = router;

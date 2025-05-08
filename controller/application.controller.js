const express = require("express");
const router = express.Router();
var bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const jwt = require("jsonwebtoken");
const { runQuery } = require("../helper/helping");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRETS;
const {
  inserttweet,
  dislike,
  fetchtweetofparticularuser,
  postfollowingquery,
  finduserbymail,
  deletetweets,
  tweetdata,
  startfollow,
  updatetweet,
  findusernotbymail,
  fetchtweets,
  showusersquery,
  finduserbyid,
  getfollowingquery,
  tweetsoffollowing,
  dislikequery,
  dislikequerysecond,
  updatetweetlikecountquery,
  retweetsinsert,
  retweetsshowquery,
  likecheckquery,
  decrement,
  liketweetinsert,
  alreadylike,
  fetchlikecount,
  updateiflike,
  retweet,
  checktweetislikedornot,
  updateprofile,
} = require("../helper/queries");
const retweetschema = require("../middleware/retweet.validations");
const tweetschema = require("../middleware/tweet.validations");
exports.gethome = async (req, res) => {
  const token = req.cookies.TwitterToken;
  const data = jwt.verify(token, JWT_SECRET, (err, decode) => {
    let email = decode.email;
    res.render("screens/home", { email: email });
  });
};
exports.gettweetcreate = async (req, res) => {
  const token = req.cookies.TwitterToken;
  const data = jwt.verify(token, JWT_SECRET, (err, decode) => {
    let email = decode.email;
    res.render("screens/createTweets", { email: email });
  });
};
exports.posttweetcreate = async (req, res) => {
  let title = req.body.title;
  let content = req.body.content;
  const response = await tweetschema.validate({
    title: req.body.title,
    content: req.body.content,
  });
  if (response.error) {
    return res.send({ success: false, msg: response.error.details[0].message });
  }
  let username = req.body.username;
  let trimusername = username.trim();
  const findidresult = await finduserbymail(trimusername);
  tweet_by_user_id = findidresult[0].id;
  try {
    let result = await inserttweet(
      trimusername,
      tweet_by_user_id,
      title,
      content
    );
    console.log(result);
    if (result) {
      res.send({ msg: "your tweet has been published", success: true });
    }
  } catch (error) {
    res.send({ msg: error });
  }
};
exports.gettweetviews = async (req, res) => {
  try {
    const token = req.cookies.TwitterToken;
    const data = jwt.verify(token, JWT_SECRET, async (err, decode) => {
      let email = decode.email;
      let result = await fetchtweetofparticularuser(email);
      res.render("screens/tweetviews", { result: result, email: email });
    });
  } catch (error) {
    res.send({ msg: "internal server error", success: false });
  }
};
exports.postdelete = async (req, res) => {
  try {
    let result = await deletetweets(req.body.id);
    if (result) {
      res.send({ success: true, msg: "successfully deleted" });
    } else {
      res.send({ success: false, msg: "error while deleting element" });
    }
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.getupdate = async (req, res) => {
  try {
    let result = await tweetdata(req.params.id);
    if (result) {
      res.render("screens/updatetweet", { data: result });
    }
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.postupdate = async (req, res) => {
  try {
    let result = await updatetweet(
      req.body.title,
      req.body.content,
      req.body.id
    );
    if (result) {
      res.send({ success: true, msg: "your tweet has been updated" });
    }
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};

exports.getusers = async (req, res) => {
  try {
    const token = req.cookies.TwitterToken;
    const data = jwt.verify(token, JWT_SECRET, async (err, decode) => {
      let email = decode.email;
      // query 1
      let finduserresult = await finduserbymail(email);
      let userid = finduserresult[0].id;
      // query 2
      let result = await findusernotbymail(email);
      // retrive result after performing intersection
      let showusers = await showusersquery(userid);
      res.send({ result: showusers });
    });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};

exports.followpost = async (req, res) => {
  try {
    let result = await finduserbymail(req.body.userid);
    console.log(result);
    let userid = result[0].id;
    let email = result[0].email;
    let following_id = req.body.id;
    let resultfollowinguser = await finduserbyid(following_id);
    let followeremail = resultfollowinguser[0].email;
    let followresult = await startfollow(
      following_id,
      userid,
      followeremail,
      email
    );
    if (followresult) {
      res.send({ success: true, msg: "you started following to user" });
    }
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.fetchtweets = async (req, res) => {
  try {
    let result1 = await fetchtweets();
    let result2 = await retweet();
    let result = [...result1, ...result2];
    result.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
    res.send({ result: result });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};

exports.fetchtweetsoffollowing = async (req, res) => {
  try {
    let finduser = `select * from users where email = "${req.body.username}"`;
    let finduserresult = await runQuery(finduser);
    let userid = finduserresult[0].id;
    let result = await tweetsoffollowing(userid);
    res.send({ result: result });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.getfollowing = async (req, res) => {
  try {
    const token = req.cookies.TwitterToken;
    const data = jwt.verify(token, JWT_SECRET, async (err, decode) => {
      let email = decode.email;
      let result = await finduserbymail(email);
      let userid = result[0].id;
      let queryresult = await getfollowingquery(userid);
      res.render("screens/following", { result: queryresult, email: email });
    });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.postfollowing = async (req, res) => {
  try {
    let result = await finduserbymail(req.body.loggeduserid);
    let userid = result[0].id;
    let resultquery = await postfollowingquery(userid, req.body.unfollowuserid);
    if (resultquery) {
      res.send({ success: true, msg: "you unfollowed the following user" });
    }
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.getprofilepage = async (req, res) => {
  try {
    const token = req.cookies.TwitterToken;
    const data = jwt.verify(token, JWT_SECRET, async (err, decode) => {
      let email = decode.email;
      let result = await finduserbymail(email);
      let user = result[0];
      res.render("screens/profile", { result: user });
    });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.postretweets = async (req, res) => {
  try {
    const response = await retweetschema.validate({
      retweet: req.body.retweet,
    });
    if (response.error) {
      return res.send({
        success: false,
        msg: response.error.details[0].message,
      });
    }
    const token = req.cookies.TwitterToken;
    const data = jwt.verify(token, JWT_SECRET, async (err, decode) => {
      let email = decode.email;
      let result = await finduserbymail(email);
      let userid = result[0].email;
      let queryresult = await retweetsinsert(
        req.body.tweets_id,
        userid,
        req.body.retweet
      );
      if (queryresult) {
        res.send({
          success: true,
          msg: "retweet on following post successfully",
        });
      }
    });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.postshowretweet = async (req, res) => {
  try {
    let queryresult = await retweetsshowquery(req.body.tweets_id);
    if (queryresult) {
      res.send({ result: queryresult });
    }
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.likepost = async (req, res) => {
  try {
    const token = req.cookies.TwitterToken;
    const data = jwt.verify(token, JWT_SECRET, async (err, decode) => {
      let email = decode.email;
      let result = await finduserbymail(email);
      let userid = result[0].id;
      // check if already liked
      let checkqueryresult = await likecheckquery(req.body.id, userid);
      if (checkqueryresult[0]) {
        return res.send({
          success: false,
          msg: "you already liked this tweet",
        });
      }
      // check if dislike than update into liked
      let checkdislikequeryresult = await dislikequery(req.body.id, userid);
      if (checkdislikequeryresult[0]) {
        let dislikequeryresult = await dislikequerysecond(req.body.id, userid);
        let updatetweetlikecountresult = await updatetweetlikecountquery(
          req.body.id
        );
        return res.send({ success: true, msg: "tweet has been liked" });
      }
      let queryresult = await liketweetinsert(req.body.id, userid);
      let updatetweetlikecountresult = await updatetweetlikecountquery(
        req.body.id
      );
      res.send({ success: true, msg: "tweet has been liked" });
    });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.dislikepost = async (req, res) => {
  try {
    const token = req.cookies.TwitterToken;
    const data = jwt.verify(token, JWT_SECRET, async (err, decode) => {
      let email = decode.email;
      let result = await finduserbymail(email);
      let userid = result[0].id;
      // chcek the tweet has been liked or not
      let checkqueryresult = await checktweetislikedornot(req.body.id, userid);
      if (checkqueryresult[0]) {
        // update like -> dislike if already likes
        let dislikequeryresult = await updateiflike(req.body.id, userid);
        let validteresult = await fetchlikecount(req.body.id);
        let currect_count = validteresult[0].like_count;
        if (currect_count > 0) {
          let updatetweetlikecountresult = await decrement(req.body.id);
          return res.send({
            success: true,
            msg: "your tweet has been disliked",
          });
        } else {
          return res.send({
            success: true,
            msg: "your tweet has been disliked",
          });
        }
      }
      // if already dislike
      let checkdislikequeryresult = await alreadylike(req.body.id, userid);
      if (checkdislikequeryresult[0]) {
        return res.send({
          success: true,
          msg: "you already dislike the tweet",
        });
      }
      let queryresult = await dislike(req.body.id, userid);
      res.send({ success: true, msg: "tweet has been disliked" });
    });
  } catch (error) {
    res.send({ success: false, msg: "internal server error" });
  }
};
exports.logout = async (req, res) => {
  res.clearCookie("TwitterToken", { path: "/" });
  res.send({ success: true, msg: "logout succcessfully" });
};
exports.postupdateprofile = async (req, res) => {
  try {
    let queryresult = await updateprofile(
      req.body.fname,
      req.body.lname,
      req.body.phonenumber,
      req.body.email
    );
    res.send({ success: true, msg: "profile updated" });
  } catch (error) {
    console.log(error)
    res.send({ success: false, msg: "error while updating profile" });
  }
};

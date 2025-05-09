const { runQuery } = require("./helping");
// authentication queries
const createuser = async (fname, lname, email, phonenumber, secPass) => {
  let result = await runQuery(
    `INSERT INTO users(fname, lname, email,Phone_number, password) VALUES ("${fname}","${lname}","${email}","${phonenumber}","${secPass}")`
  );
  return result;
};
// application queries
const getalluser = async () => {
  return await runQuery("query");
};
const inserttweet = async (trimusername, tweet_by_user_id, title, content) => {
  let result = await runQuery(
    `INSERT INTO Tweets(Tweet_by,tweet_by_user_id, Tweet_title, Tweet_content) VALUES ("${trimusername}","${tweet_by_user_id}","${title}","${content}")`
  );
  return result;
};
const fetchtweetofparticularuser = async (email) => {
  let result = await runQuery(
    `Select * from Tweets where is_deleted = 0  AND Tweet_by = '${email}'`
  );
  return result;
};
const finduserbymail = async (trimusername) => {
  let result = await runQuery(
    `select * from users where email = "${trimusername}"`
  );
  return result;
};
const finduserbyid = async (id) => {
  let result = await runQuery(`select * from users where id = "${id}"`);
  return result;
};
const findusernotbymail = async (trimusername) => {
  let result = await runQuery(
    `select id from users where email != "${trimusername}"`
  );
  return result;
};
const deletetweets = async (id) => {
  let result = await runQuery(
    `UPDATE Tweets SET is_deleted= 1 where tweet_id = ${id}`
  );
  return result;
};
const tweetdata = async (id) => {
  let result = await runQuery(`select * from Tweets where tweet_id = ${id}`);
  return result;
};
const updatetweet = async (title, content, id) => {
  let result = await runQuery(
    `UPDATE Tweets SET Tweet_title="${title}", Tweet_content = "${content}" WHERE tweet_id = ${id}`
  );
  return result;
};
const showusersquery = async (userid) => {
  let result = await runQuery(
    `select * from users where id != "${userid}" and id not in (SELECT user_id from follow_following_table where followers_id = "${userid}" and status="following")`
  );
  return result;
};
const startfollow = async (following_id, userid, followeremail, email) => {
  let result = await runQuery(
    `INSERT INTO follow_following_table(user_id, followers_id , user_name , follower_name) VALUES ("${following_id}","${userid}","${followeremail}" , "${email}" )`
  );
  return result;
};
const fetchtweets = async () => {
  let result = await runQuery(
    `select * from Tweets where is_deleted = "0" order by Created_at desc`
  );
  return result;
};
const retweet = async () => {
  let result = await runQuery(
    `select Tweets.tweet_id ,Tweets.Tweet_by, Tweets.tweet_by_user_id , Tweets.Tweet_title, Tweets.Tweet_content, Tweets.created_at , ReTweets.tweet_by, ReTweets.retweet_content , ReTweets.created_at from ReTweets left join  Tweets  on  ReTweets.Tweet_id = Tweets.tweet_id;`
  );
  return result;
};
const tweetsoffollowing = async (userid) => {
  let result = await runQuery(
    `select * from Tweets inner join follow_following_table on Tweets.tweet_by_user_id = follow_following_table.user_id where follow_following_table.followers_id = ${userid} and follow_following_table.status = "following" order by created_at	desc`
  );
  return result;
};
const getfollowingquery = async (userid) => {
  let result = await runQuery(
    `select * from follow_following_table where followers_id = ${userid} and status ="following"`
  );
  return result;
};
const postfollowingquery = async (userid, unfollowuserid) => {
  let status = "notfollowing";
  let result = await runQuery(
    `UPDATE follow_following_table SET status ="${status}" WHERE user_id="${unfollowuserid}" and followers_id = "${userid}"`
  );
  return result;
};
const retweetsinsert = async (tweets_id, userid, retweet) => {
  let result = await runQuery(
    `INSERT INTO ReTweets (Tweet_id, tweet_by, ReTweet_content) values ("${tweets_id}","${userid}","${retweet}")`
  );
  return result;
};
const retweetsshowquery = async (tweets_id) => {
  let result = await runQuery(
    `select * from ReTweets where tweet_id = "${tweets_id}"`
  );
  return result;
};
const likecheckquery = async (id, userid) => {
  let result = await runQuery(
    `select * from like_tweet where tweet_id = "${id}" AND liked_by = "${userid}" AND liked = "liked"`
  );
  return result;
};
const dislikequery = async (id, userid) => {
  let result = await runQuery(
    `select * from like_tweet where tweet_id = "${id}" AND liked_by = "${userid}" AND liked = "dislike"`
  );
  return result;
};
const dislikequerysecond = async (id, userid) => {
  let result = await runQuery(
    `update like_tweet set liked="liked" where tweet_id = "${id}" AND liked_by = "${userid}"`
  );
  return result;
};
const updatetweetlikecountquery = async (userid) => {
  let result = await runQuery(
    `update Tweets set like_count = like_count + 1 where tweet_id = "${userid}"`
  );
  return result;
};
const liketweetinsert = async (id, userid) => {
  let result = await runQuery(
    `INSERT INTO like_tweet (tweet_id, liked_by) values ("${id}","${userid}")`
  );
  return result;
};
const checktweetislikedornot = async (id, userid) => {
  let result = await runQuery(
    `select * from like_tweet where tweet_id = "${id}" AND liked_by = "${userid}"`
  );
  return result;
};
const updateiflike = async (id, userid) => {
  let result = await runQuery(
    `update like_tweet set liked="dislike" where tweet_id = "${id}" AND liked_by = "${userid}"`
  );
  return result;
};
const fetchlikecount = async (id) => {
  let result = await runQuery(
    `select like_count from Tweets where tweet_id = "${id}"`
  );
  return result;
};
const decrement = async (id) => {
  let result = await runQuery(
    `update Tweets set like_count=like_count - 1 where tweet_id = "${id}"`
  );
  return result;
};
const alreadylike = async (id, userid) => {
  let result = await runQuery(
    `select * from like_tweet where tweet_id = "${id}" AND liked_by = "${userid}" and liked = "disliked"`
  );
  return result;
};
const dislike = async (id, userid) => {
  let result = await runQuery(
    `INSERT INTO like_tweet (tweet_id, liked_by , liked) values ("${id}","${userid}","dislike")`
  );
  return result;
};
const updateprofile = async (fname, lname, phonenumber, email) => {
  let result = await runQuery(
    `UPDATE users SET fname="${fname}",lname="${lname}",Phone_number="${phonenumber}" WHERE email = "${email}"`
  );
  return result;
};
const fetchusers = async () => {
  let result = await runQuery(`select * from users where is_deleted = 0`);
  return result;
};

const sendchat = async (from, to, message) => {
  let result = await runQuery(
    `INSERT INTO chat(message_from,message_to,message) VALUES ("${from}","${to}","${message}")`
  );
  return result;
};
const fetchmessageofuser = async (from, to) => {
  try {
    let findto = await runQuery(`select email from users where id = "${to}"`);
    let findfrom = await runQuery(
      `select id from users where email = "${from}"`
    );
    let email = findto[0].email;
    let id = findfrom[0].id;
    let query = `select * from chat where (message_from ="${from}" or message_from = "${email}") and (message_to ="${to}" or message_to ="${id}")`;
    let result = await runQuery(query);
    return result;
  } catch (error) {
    console.log(error);
  }
};
const deletemsg = async (id) => {
  let result = await runQuery(
    `UPDATE chat SET is_deleted = "1" where id="${id}"`
  );
  return result;
};
const updatemessage = async (id,message,time) => {
    let result = await runQuery(
      `UPDATE chat SET message = "${message}" ,updated_at = "${time}" where id="${id}"`
    );
    return result;
  };
const fetchmssg = async (id) => {
  let result = await runQuery(
    `select * from chat where id="${id}"`
  );
  return result;
};
module.exports = {
    updatemessage,
    fetchmssg,
  deletemsg,
  fetchmessageofuser,
  sendchat,
  getalluser,
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
  updateprofile,
  fetchusers,
  retweet,
  checktweetislikedornot,
  createuser,
};

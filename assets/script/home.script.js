var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function formatDateTime(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }).format(date);
}

function formatTweetTime(tweetTime) {
  let userTimeZone =
    localStorage.getItem("timezone") ||
    Intl.DateTimeFormat().resolvedOptions().timeZone;
  const tweetDate = new Date(tweetTime);

  const now = new Date();

  const localTweetTime = new Date(
    tweetDate.toLocaleString("en-US", { timeZone: userTimeZone })
  );

  const diffInSeconds = Math.floor((now - localTweetTime) / 1000);

  let timeAgo;
  if (diffInSeconds < 60) timeAgo = `${diffInSeconds} sec ago`;
  else if (diffInSeconds < 3600)
    timeAgo = `${Math.floor(diffInSeconds / 60)} min ago`;
  else if (diffInSeconds < 86400)
    timeAgo = `${Math.floor(diffInSeconds / 3600)} hours ago`;
  else if (diffInSeconds < 604800)
    timeAgo = `${Math.floor(diffInSeconds / 86400)} days ago`;
  else timeAgo = formatDateTime(localTweetTime);
  return `${timeAgo} (${formatDateTime(localTweetTime)})`;
}

let tweetform = document.getElementById("tweetform");
tweetform.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(tweetform);
  let username = document.getElementById("username").innerHTML;
  formData.append("username", username);
  try {
    const response = await fetch("/application/create-tweet", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    alert(json.msg);
    if (json.success == true) {
      window.location.href = "/application/home";
    }
  } catch (error) {
    console.log(error);
  }
});
async function following(req, res) {}
async function fetchtweets() {
  document.getElementById("feed").innerHTML = "";
  const response = await fetch("/application/fetchtweets", {
    method: "POST",
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let results = json.result;
  let posts = document.getElementById("feed");
  results.forEach((result) => {
    let p = document.createElement("p");
    if (result.retweet_content == undefined) {
      p.innerHTML = `
<div class="card">
    <div class="containertweets">
      <h4>posted by : <b>${
        result.Tweet_by
      }</b> <span style="margin-left : 385px"><i onclick="myFunction(this)" class="fa fa-thumbs-up" ></i>Likes : ${
        result.like_count
      }</span></h4>
      <button class="likedislikebutton" onclick="like(this.value)" value=${
        result.tweet_id
      }>
<span><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>Like</span>
</button>
<button class="likedislikebutton" onclick="dislike(this.value)" class="buttons" value=${
        result.tweet_id
      }>
<span><i onclick="myFunction(this)" class="fa fa-thumbs-down"></i>Dislike</span>
</button><br>
      <p>tweet title : ${result.Tweet_title}</p>
      <p>tweet content : ${result.Tweet_content}</p>
      <p>tweet time : ${formatTweetTime(result.created_at)}</p>
<button  onclick="showretweet(this.value)" value=${
        result.tweet_id
      } class="button" style="--clr: #7808d0">
<span class="button__icon-wrapper">
<svg
  viewBox="0 0 14 15"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="button__icon-svg"
  width="10"
>
  <path
    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
    fill="currentColor"
  ></path>
</svg>

<svg
  viewBox="0 0 14 15"
  fill="none"
  width="10"
  xmlns="http://www.w3.org/2000/svg"
  class="button__icon-svg button__icon-svg--copy"
>
  <path
    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
    fill="currentColor"
  ></path>
</svg>
</span>
Explore All Retweets
</button>

      <p id="${result.tweet_id}"></p>
      <div class="retweetform">
        <div class="retweet">
      <input type="text" id="id${
        result.tweet_id
      }" placeholder="Enter Your retweet"></div>
       <button style="border: 1px solid aliceblue;" type="submit" class="sendbtn"  onclick="retweet(this.value)" value=${
         result.tweet_id
       }>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Retweet</span>
          </button>
</div>
    </div>
  </div>`;
      posts.appendChild(p);
    } else {
      p.innerHTML = `
<div class="card">
    <div class="containertweets" style="padding: 10px">
      <h4>retweet by : <b>${result.tweet_by}</b></h4>
        <p>retweet content : ${result.retweet_content}</p>
        <p>retweet time :   ${formatTweetTime(result.created_at)}</p>
      <div class="container" style="border: 5px solid white"><h4>posted by : <b>${
        result.Tweet_by
      }</b></h4>
      <pn>tweet title : ${result.Tweet_title}</p>
      <p>tweet content : ${result.Tweet_content}</p>
    </div>
  </div>`;
      posts.appendChild(p);
    }
  });
}
async function like(id) {
  let formData = new FormData();
  formData.append("id", id);
  const response = await fetch("/application/likepost", {
    method: "post",
    body: formData,
  });
  let result = await response.json();
  if (result) {
    alert(result.msg);
  }
  fetchtweets();
}
async function dislike(id) {
  let formData = new FormData();
  formData.append("id", id);
  const response = await fetch("/application/dislikepost", {
    method: "post",
    body: formData,
  });
  let result = await response.json();
  if (result) {
    alert(result.msg);
  }
  fetchtweets();
}
async function showretweet(id) {
  document.getElementById(id).innerHTML = "";
  let formData = new FormData();
  formData.append("tweets_id", id);
  const response = await fetch("/application/showretweet", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  if (result.result == 0) {
    let posts = document.getElementById(id);
    let p = document.createElement("p");
    p.innerHTML = `No ReTweet on this Tweet`;
    posts.append(p);
  }
  let data = result.result;
  let posts = document.getElementById(id);
  data.forEach((result) => {
    let p = document.createElement("p");
    p.innerHTML = `
      <h4>Retweet by: <b>${result.tweet_by}</b></h4> 
      <p>ReTweet content : ${result.ReTweet_content}</p>
      <p>ReTweet at : ${formatTweetTime(result.created_at)}</p>`;
    posts.appendChild(p);
  });
}
async function retweet(id) {
  let retweet = document.getElementById("id" + id).value;
  let formData = new FormData();
  formData.append("retweet", retweet);
  formData.append("tweets_id", id);

  const response = await fetch("/application/retweet", {
    method: "POST",
    body: formData,
  });
  const result = await response.json();
  if (result.success == true) {
    alert(result.msg);
    fetchtweets();
  } else {
    alert(result.msg);
  }
}
async function fetchtweetsbyfollowing() {
  document.getElementById("feed").innerHTML = "";
  const formData = new FormData();
  let username = document.getElementById("username").innerHTML;
  formData.append("username", username.trim());
  const response = await fetch("/application/fetchtweetsbyfollowing", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let results = json.result;
  let posts = document.getElementById("feed");
  results.forEach((result) => {
let p = document.createElement("p");
    p.innerHTML = `

<div class="card">
    <div class="containertweets">
      <h4>posted by : <b>${
        result.Tweet_by
      }</b> <span style="margin-left : 385px"><i onclick="myFunction(this)" class="fa fa-thumbs-up" ></i>Likes : ${
        result.like_count
      }</span></h4>
      <button class="likedislikebutton" onclick="like(this.value)" value=${
        result.tweet_id
      }>
<span><i onclick="myFunction(this)" class="fa fa-thumbs-up"></i>Like</span>
</button>
<button class="likedislikebutton" onclick="dislike(this.value)" class="buttons" value=${
        result.tweet_id
      }>
<span><i onclick="myFunction(this)" class="fa fa-thumbs-down"></i>Dislike</span>
</button><br>
      <p>tweet title : ${result.Tweet_title}</p>
      <p>tweet content : ${result.Tweet_content}</p>
      <p>tweet time : ${formatTweetTime(result.created_at)}</p>
<button  onclick="showretweet(this.value)" value=${
        result.tweet_id
      } class="button" style="--clr: #7808d0">
<span class="button__icon-wrapper">
<svg
  viewBox="0 0 14 15"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  class="button__icon-svg"
  width="10"
>
  <path
    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
    fill="currentColor"
  ></path>
</svg>

<svg
  viewBox="0 0 14 15"
  fill="none"
  width="10"
  xmlns="http://www.w3.org/2000/svg"
  class="button__icon-svg button__icon-svg--copy"
>
  <path
    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
    fill="currentColor"
  ></path>
</svg>
</span>
Explore All Retweets
</button>

      <p id="${result.tweet_id}"></p>
      <div class="retweetform">
        <div class="retweet">
      <input type="text" id="id${
        result.tweet_id
      }" placeholder="Enter Your retweet"></div>
       <button style="border: 1px solid aliceblue;" type="submit" class="sendbtn"  onclick="retweet(this.value)" value=${
         result.tweet_id
       }>
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Retweet</span>
          </button>
</div>
    </div>
  </div>`;
      posts.appendChild(p);
    });
}
async function getusers() {
  document.getElementById("users").innerHTML = "";
  const response = await fetch("/application/viewusers", {
    method: "get",
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  let place = document.getElementById("users");
  let results = json.result;
  results.forEach((result) => {
    let p = document.createElement("p");
    p.innerHTML = ` <div class="card">
          <img src="img_avatar.png" alt="user" style="width:100%">
          <div class="container">
            <h4><b>${result.email}</b></h4> 
            <p>${result.fname}</p>
            <button class="likedislikebutton" value="${result.id}" onclick="follow(this.value)" class="btn">follow</button>
          </div>
        </div> 
      </div>`;
    place.appendChild(p);
  });
}
async function follow(id) {
  const formData = new FormData();
  let userid = document.getElementById("username").innerHTML.trim();
  formData.append("id", id);
  formData.append("userid", userid);
  const response = await fetch("/application/follow", {
    method: "POST",
    body: formData,
  });
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  if (json.success == true) {
    getusers();
  }
}
async function logout() {
  const response = await fetch("/application/logout", { method: "post" });
  const result = await response.json();
  if (result.success) {
    alert(result.msg);
    window.location.href = "/login";
  }
}
fetchtweets();
getusers();

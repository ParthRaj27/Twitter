let form = document.getElementById("myForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch("/application/updateprofile", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    alert(json.msg);
    if (json.success == true) {
      window.location.href = "/application/profile";
    }
  } catch (error) {
    console.error(error.message);
  }
});
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

let activefrom = document.getElementById("activefrom").value;
let derivedtime = formatTweetTime(activefrom);
document.getElementById("set").innerHTML = derivedtime;
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
let userTimeZone =
  localStorage.getItem("timezone") ||
  Intl.DateTimeFormat().resolvedOptions().timeZone;
document.getElementById("timezone").innerHTML = userTimeZone;

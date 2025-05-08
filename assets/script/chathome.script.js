const chatMessages = document.getElementById("chat-messages");
async function fetchusers() {
  let response = await fetch("/chat/fetchuser", {
    method: "POST",
  });
  let result = await response.json();
  let user = result.data;
  let users = document.getElementById("users");
  users.innerHTML = "";
  user.forEach((element) => {
    let user = `<li class="user-item" id="${element.id}" onclick=setroom("${element.id}","${element.fname}")>${element.fname}</li>`;
    users.innerHTML += user;
  });
}
fetchusers();
const activeUser = document.getElementById("active-user");
function setroom(id, value) {
  document.getElementById("currentuser").innerHTML = id;
  //   localStorage.setItem("currentroom", id);
  activeUser.innerHTML = value;
  fetchchat(id);
}
async function fetchchat(id) {
  chatMessages.innerHTML = "";
  let formdata = new FormData();
  formdata.append("user", id);
  let response = await fetch("/chat/fetchmessages", {
    method: "POST",
    body: formdata,
  });
  let result = await response.json();
  let messages = result.data;
  messages.forEach((element) => {
    if (element.message_to == id) {
      chatMessages.innerHTML += `<div class="message received">${element.message}</div>`;
    } else {
      chatMessages.innerHTML += `<div class="message sent">${element.message}</div>`;
    }
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
const sendbutton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");

sendbutton.addEventListener("click", async () => {
  const messageText = messageInput.value.trim();
  //   let user = localStorage.getItem("currentroom");
  let user = document.getElementById("currentuser").innerHTML;
  if (user == "") {
    alert("select user");
  } else {
    let formdata = new FormData();
    formdata.append("user", user);
    formdata.append("message", messageText);
    if (user) {
      let response = await fetch("/chat/sendchat", {
        method: "POST",
        body: formdata,
      });
      let result = await response.json();
      if (result.success == true) {
        const socket = io();
        socket.on("connect", () => {
          // socket.emit('chat', { id: `${user}`, str: `${messageText}` });
          socket.emit("chat", { id: 1, str: `${messageText}` });
          let username = document.getElementById("active-user").innerHTML;
  let loggedinuser = document.getElementById("loggedinuser").innerHTML;
          socket.emit("stopTyping", { username: `${username}` , loggedinuser:`${loggedinuser}`  });
        });
        messageInput.value = "";
      }
    } else {
      alert("select user");
    }
  }
});
const socket = io();
messageInput.addEventListener("input", () => {
  let username = document.getElementById("active-user").innerHTML;
  let loggedinuser = document.getElementById("loggedinuser").innerHTML;
  if (messageInput.value != "") {
    socket.emit("typing", { username: `${username}` , loggedinuser:`${loggedinuser}` });
  } else {
    socket.emit("stopTyping", { username: `${username}` , loggedinuser:`${loggedinuser}`  });
  }
});
socket.on("connect", () => {
  socket.emit("join", 1);
});
socket.on("chat", (data) => {
  console.log(data.str);
  let wantid = localStorage.getItem("currentroom");
  fetchchat(wantid);
  // fetchchat(2)
});
socket.on("typing", (data) => {
    let username = document.getElementById("active-user").innerHTML;
  let loggedinuser = document.getElementById("loggedinuser").innerHTML;
  if(username == data.loggedinuser && loggedinuser == data.username){
    document.getElementById(
    "typing"
  ).innerText = ` is typing`;
  }
});
socket.on("stopTyping", (data) => {
    let username = document.getElementById("active-user").innerHTML;
  let loggedinuser = document.getElementById("loggedinuser").innerHTML;
  if(username == data.loggedinuser && loggedinuser == data.username){
  document.getElementById("typing").innerText = ``;
}
});
let currentuser;
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
  const nodeList = document.querySelectorAll(".user-item")
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].style.color = "white";
  }
  currentuser = id;
  activeUser.innerHTML = value;
  fetchchat(id);
  console.log(activeUser);
  document.getElementById(`${id}`).style.color = "black"
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
      if (element.is_deleted == 0) {
        if (element.updated_at == "not updated") {
          chatMessages.innerHTML += `<div class="message received"><div class="dropdown">${element.message}
      <div class="dropdown-content">
      <button class="ED" onclick="Editmessage(${element.id})">Edit</button>
      <button class="ED" onclick="Deletemessage(this.id)" id="${element.id}">delete</button>
      </div>    
        </div>
        </div>`;
        } else {
          chatMessages.innerHTML += `<div class="message received"><div class="dropdown">${element.message} ... <Span class="updatedmsg">Edited</span>
      <div class="dropdown-content">
      <button class="ED" onclick="Deletemessage(this.id)" id="${element.id}">delete</button>
      </div>    
        </div>
        </div>`;
        }
      } else {
        chatMessages.innerHTML += `<div class="message received">this message was deleted!</div>`;
      }
    } else {
      if (element.is_deleted == 1) {
        chatMessages.innerHTML += `<div class="message sent">this message was deleted!</div>`;
      }
      else if (element.updated_at.trim() != "not updated") {
        chatMessages.innerHTML += `<div class="message sent"><div class="dropdown">${element.message} ... <Span class="updatedmsg">Edited</span>`;
      } else {
        chatMessages.innerHTML += `<div class="message sent">${element.message}</div>`;
      }
    }
  });
  chatMessages.scrollTop = chatMessages.scrollHeight;
}
const sendbutton = document.getElementById("send-button");
const messageInput = document.getElementById("message-input");

sendbutton.addEventListener("click", async () => {
  const messageText = messageInput.value.trim();
  if(messageText == ""){
    alert("Write Something!")
  }
  //   let user = localStorage.getItem("currentroom");
  else{
    let user = currentuser;
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
          socket.emit("stopTyping", {
            username: `${username}`,
            loggedinuser: `${loggedinuser}`,
          });
        });
        messageInput.value = "";
      }
    } else {
      alert("select user");
    }
  }
  }
});
const socket = io();
messageInput.addEventListener("input", () => {
  let username = document.getElementById("active-user").innerHTML;
  let loggedinuser = document.getElementById("loggedinuser").innerHTML;
  if (messageInput.value != "") {
    socket.emit("typing", {
      username: `${username}`,
      loggedinuser: `${loggedinuser}`,
    });
  } else {
    socket.emit("stopTyping", {
      username: `${username}`,
      loggedinuser: `${loggedinuser}`,
    });
  }
});
socket.on("connect", () => {
  socket.emit("join", 1);
});
socket.on("chat", (data) => {
  let wantid = currentuser
  fetchchat(wantid);
  // fetchchat(2)
});
socket.on("typing", (data) => {
  let username = document.getElementById("active-user").innerHTML;
  let loggedinuser = document.getElementById("loggedinuser").innerHTML;
  if (username == data.loggedinuser && loggedinuser == data.username) {
    document.getElementById("typing").innerText = ` is typing`;
  }
});
socket.on("stopTyping", (data) => {
  let username = document.getElementById("active-user").innerHTML;
  let loggedinuser = document.getElementById("loggedinuser").innerHTML;
  if (username == data.loggedinuser && loggedinuser == data.username) {
    document.getElementById("typing").innerText = ``;
  }
});
async function Deletemessage(id) {
  let formdata = new FormData();
  formdata.append("id", id);
  let response = await fetch("/chat/deletemessage", {
    method: "POST",
    body: formdata,
  });
  let result = await response.json();
  let user = result.data;
  let wantid = localStorage.getItem("currentroom");
  fetchchat(wantid);
}
var btn = document.getElementById("myBtn");
async function Editmessage(id) {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  var span = document.getElementsByClassName("close")[0];
  let formdata = new FormData();
  formdata.append("id", id);
  let response = await fetch("/chat/fetchmsg", {
    method: "POST",
    body: formdata,
  });
  let result = await response.json();
  let msg = result.data;
  let modalcontent = document.getElementById("modal-content");
  modalcontent.innerHTML = `
  <input name="id" value="${msg[0].id}" hidden>
  <input type="text" name="updatedmsg" value="${msg[0].message}" >
`;
}
// btn.onclick = function() {
//   modal.style.display = "block";
// }
var modal = document.getElementById("myModal");
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
let updatedform = document.getElementById("updatedform");
updatedform.addEventListener("submit", async (e) => {
  e.preventDefault();
  let formdata = new FormData(updatedform);
  let response = await fetch("/chat/updatemessage", {
    method: "POST",
    body: formdata,
  });
  let result = await response.json();
  if (result.success == true) {
    alert(result.msg);
    modal.style.display = "none";
    let wantid = localStorage.getItem("currentroom");
    fetchchat(wantid);
  } else {
    alert("error while updating message");
    modal.style.display = "none";
    let wantid = localStorage.getItem("currentroom");
    fetchchat(wantid);
  }
});

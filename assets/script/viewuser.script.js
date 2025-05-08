async function follow(id) {
  const formData = new FormData();
  let userid = document.getElementById("username").innerHTML.trim();
  console.log(userid);
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
  alert(json.msg);
  if (json.success == true) {
    window.location.href = "/application/viewusers";
  }
}

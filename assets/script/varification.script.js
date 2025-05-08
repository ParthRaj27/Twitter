document.getElementById(
  "div"
).innerHTML = `<button onclick="varified()">click set password</button>`;
async function varified() {
  let token = localStorage.getItem("token");
  try {
    const response = await fetch("/verification", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: token }),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    alert(json.msg);
    if (json.success == true) {
      window.location.href = "/set-password";
    }
  } catch (error) {
    console.error(error.message);
  }
}

document
  .getElementById("passwordform")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("here");

    let fname = localStorage.getItem("fname");
    let lname = localStorage.getItem("lname");
    let email = localStorage.getItem("email");
    let phonenumber = localStorage.getItem("phonenumber");
    let formData = new FormData(passwordform);
    formData.append("fname", fname);
    formData.append("lname", lname);
    formData.append("email", email);
    formData.append("phonenumber", phonenumber);
    console.log(formData);
    try {
      const response = await fetch("/set-password", {
        method: "POST",
        body: formData,
      });
      const json = await response.json();
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      alert(json.msg);
      console.log(json.success);
      if (json.success == true) {
        let fname = localStorage.removeItem("fname");
        let lname = localStorage.removeItem("lname");
        let email = localStorage.removeItem("email");
        let phonenumber = localStorage.removeItem("phonenumber");
        window.location.href = "/login";
      } else {
        window.location.href = "/set-password";
      }
    } catch (error) {
      console.error(error.message);
    }
  });
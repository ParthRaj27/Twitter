let form = document.getElementById("myForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData);

  try {
    const response = await fetch("/register", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    alert(json.msg);
    if (json.success == true) {
      localStorage.setItem("token", json.token);
      localStorage.setItem("fname", json.data.fname);
      localStorage.setItem("lname", json.data.lname);
      localStorage.setItem("email", json.data.email);
      localStorage.setItem("phonenumber", json.data.phonenumber);
      window.location.href = "/verification";
    }
  } catch (error) {
    console.error(error.message);
  }
});

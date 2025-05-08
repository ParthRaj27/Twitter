let form = document.getElementById("updatetweet");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  try {
    const response = await fetch("/application/update", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    alert(json.msg);
    if (json.success == true) {
      window.location.href = "/application/viewtweets";
    }
  } catch (error) {
    console.log(error);
  }
});

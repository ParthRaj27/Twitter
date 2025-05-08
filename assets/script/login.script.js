document
  .getElementById("loginform")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(loginform);
    console.log(formData)
    try {
      const response = await fetch("/login", {
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
      console.error(error.message);
    }
  });
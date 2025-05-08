async function deletetweet(id) {
  let text = "do you want to delete this tweet?";
  if (confirm(text) == true) {
    const formData = new FormData();
    formData.append("id", id);
    const response = await fetch("/application/delete", {
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
  } else {
    alert("delete prevented!");
  }
}

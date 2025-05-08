
  function timeago(date){
    const now = new Date();
    const past = new Date(date);
    const diff = Math.floor((now - past)/1000)
    if(diff < 60 ){
      return `${diff} seconds ago`
    }
    const minutes = Math.floor(diff/60)
    if(minutes<60){
      return `${minutes} minutes ago`
    }
    const hours = Math.floor(minutes/60)
    if(hours<24){
      return `${hours} hours ago`
    }
    const days = Math.floor(hours/24)
    if(days<30){
      return `${days} days ago`
    }
    const months = Math.floor(days/30)
    if(months<12){
      return `${months} months ago`
    }
    const years = Math.floor(months/12)
    return `${years} years ago`
    
  }
    async function unfollow(unfollowuserid) {
        const formData = new FormData();
        let loggeduserid = document.getElementById("username").innerHTML.trim();
        formData.append("loggeduserid",loggeduserid)
        formData.append("unfollowuserid",unfollowuserid)
        const response = await fetch("/application/unfollow", {
            method: "POST",
            body: formData
          });
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }

          const json = await response.json();
          if(json.success == true){
            window.location.href = "/application/following"
          }
    }
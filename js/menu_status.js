let location_ = window.location.pathname;
let page = location_.split("/").pop().split(".").shift();
document.getElementById(page).classList.add("active");
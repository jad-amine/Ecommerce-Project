const log_out = document.querySelector("#log-out");

log_out.addEventListener("click", ()=> {
  localStorage.clear();
  location.replace("../index.html");
})
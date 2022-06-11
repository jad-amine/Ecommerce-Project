//Grab elements
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const log_in = document.querySelector("#log-in");



//Send data and store response (token and name) in localstorage
log_in.addEventListener("click", ()=>{
  var data = new FormData();
  data.append('email', email.value);
  data.append('password', password.value);

  axios.post('http://localhost:8000/api/login', data)
  .then(res => {
    data = res.data;
    localStorage.setItem('name',data.user.name);
    token = data.authorisation.token;
    localStorage.setItem('token', token);
  })
});
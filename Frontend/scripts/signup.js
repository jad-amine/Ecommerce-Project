//Grab elements
const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const signup = document.querySelector("#signup");



//Send data and store response (token and name) in localstorage
signup.addEventListener("click", ()=>{
  var data = new FormData();
  data.append('name', name1.value);
  data.append('email', email.value);
  data.append('password', password.value);

  axios.post('http://localhost:8000/api/register', data)
  .then(res => {
    data = res.data;
    console.log(data)
    // console.log(data.authorization)
    // console.log(data.user)
  })
  .catch(err=>alert('Please Choose a valid email Address and a 6 letter password !!'))
});
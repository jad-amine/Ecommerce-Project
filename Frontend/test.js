const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const HomePage = document.querySelector("#HomePage");
const Items = document.querySelector("#Items");
const User = document.querySelector("#User");

HomePage.onclick = getHomepage;

function getHomepage(){
  let data = new FormData();
  data.append('name', name1.value);
  data.append('email', email.value);
  data.append('password', password.value);
  data.append('JWT-Token', 'lalal');

  axios.post('http://localhost:8000/api/v1/user/signUp', data)
  .then(res => console.log(res.data));
}

Items.onclick = getItems;

function getItems(event){
  axios.get('http://localhost:8000/api/v1/item')
  .then(res => console.log(res.data));
}

User.onclick = getUsers;

function getUsers(event){
  axios.get('http://localhost:8000/api/v1/user/login')
  .then(res => console.log(res.data));
}
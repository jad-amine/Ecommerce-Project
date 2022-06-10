const name1 = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const LogIn = document.querySelector("#LogIn");
const SignUp = document.querySelector("#SignUp");
const Like = document.querySelector("#Like");


// ================
// axios.get('http://localhost:8000/api....', 
//   { headers: { authorization: 'my secret token' } });


LogIn.onclick = sendData;

function sendData(){
  let data = new FormData();
  data.append('email', 'jad@sef.com');
  data.append('password', 'test1234');
  
  axios.post('http://localhost:8000/api/login', data)
  .then(res => {
    data = res.data;
    token = data.authorisation.token;
    localStorage.setItem('token', token);
    console.log(localStorage);
  });
}

SignUp.onclick = getItems;

function getItems(event){
  let data = new FormData();
  data.append('name', name1.value);
  data.append('email', email.value);
  data.append('password', password.value);
  
  axios.post('http://localhost:8000/api/register',data)
  .then(res => console.log(res.data));
}

Like.onclick = getUsers;

function getUsers(event){
  let data =new FormData();
  data.append('email', 'user@gmail.com');
  data.append('password', 'test1234')
  axios.post('http://localhost:8000/api/like', data,
  { headers: { Authorization: "Bearer" + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL2xvZ2luIiwiaWF0IjoxNjU0ODQ5NDE0LCJleHAiOjE2NTQ4NTMwMTQsIm5iZiI6MTY1NDg0OTQxNCwianRpIjoiMkhVV242ZHkwbm9nc0VWdiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.ahiLpWh6M4a6sbXcACSrL_iIC1XsGJ9vljgYqEwA5JU'}})
  .then(res => console.log(res.data));
}
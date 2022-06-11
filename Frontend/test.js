const like = document.querySelector("#like");
const login = document.querySelector("#login");
const item = document.querySelector("#item");

let data = new FormData();
data.append('email', 'jad@sef.com');
data.append('password', 'test1234');

// Like
like.addEventListener("click", ()=>{
  axios.post('http://localhost:8000/api/like', data,
    { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
  .then(res => console.log(res.data));
})


//Login 
login.addEventListener("click", ()=>{
  let data = new FormData();
  data.append('email', 'jad@sef.com');
  data.append('password', 'test1234');
  
  axios.post('http://localhost:8000/api/login', data)
  .then(res => {
    console.log(res.data)
    data = res.data;
    token = data.authorisation.token;
    localStorage.setItem('token', token);
    console.log(localStorage);
  })
});


item.addEventListener("click", ()=>{
  axios.post('http://localhost:8000/api/item', data,
    { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
  .then(res => console.log(res.data));
})
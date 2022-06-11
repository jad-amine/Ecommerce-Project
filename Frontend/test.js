const like = document.querySelector("#like");
const login = document.querySelector("#login");
const item = document.querySelector("#item");
const logout = document.querySelector("#logout");

var data = new FormData();
data.append('email', 'jad@sef.com');
data.append('password', 'test1234');

// Like
like.addEventListener("click", ()=>{
  axios.post('http://localhost:8000/api/like','',
    { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
  .then(res => console.log(res.data));
})





item.addEventListener("click", ()=>{
  axios.post('http://localhost:8000/api/item', '',
    { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
  .then(res => console.log(res.data));
})


logout.addEventListener("click", ()=>{
  axios.post('http://localhost:8000/api/logout', '',
  { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
  .then(res=>localStorage.clear());
})
const like = document.querySelector("#like");
const login = document.querySelector("#login");
const item = document.querySelector("#item");
const logout = document.querySelector("#logout");
const file = document.querySelector("#file");

file.addEventListener("change", ()=>{
  var fileSelected = file.files;
  var fileToLoad = fileSelected[0];
  var fileReader = new FileReader();
  var base64;
  fileReader.onload = function (fileLoadedEvent){
    
    base64 = fileLoadedEvent.target.result;
    // console.log(base64);
    
    base64 = base64.split(",")[1];
    console.log(base64);
    post_img(base64);
  }
  fileReader.readAsDataURL(fileToLoad);
})

function post_img(base64){
  let data = new FormData();
  data.append('name', 'jads');
  data.append('price', 200);
  data.append('offer', 20);
  data.append('image', base64)
  axios.post('http://localhost:8000/api/item',data,
  {headers: {'Authorization': `bearer ${localStorage.getItem('token')}`}}).then(res=>console.log(res.data));
}


var data = new FormData();
data.append('email', 'jad@sef.com');
data.append('password', 'test1234');

// Like
login.addEventListener("click", ()=>{
  axios.post('http://localhost:8000/api/login',data,
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
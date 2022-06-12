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
    console.log(base64);
    base64 = base64.split(",")[1];
    console.log(base64);
  }
  fileReader.readAsDataURL(fileToLoad);
  let data = new FormData();
  data.append('img', JSON.stringify(base64));

  axios.post('http://localhost:8000/base64.php',data).then(res=>console.log(res.data));
})





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
let name1 = localStorage.getItem('name'); 
const login = document.querySelector("#login-tab") 
const logout = document.querySelector("#logout-tab") 
if(localStorage.getItem('name')){
  login.innerHTML = 'Welcome ' +  name1.toUpperCase();
  logout.innerHTML = "Sign Out";
  logout.addEventListener("click", ()=>{
    localStorage.clear();
    location.reload();
  })
} 


axios.get("http://localhost:8000/api/getLikes",
  {headers: { Authorization : `Bearer ${localStorage.getItem('token')}`}})
  .then(res => {
    console.log(res.data, 'likes');
  });

axios.get("http://localhost:8000/api/offer")
  .then(res => {
    const offers = document.querySelector(".offers");
    let offer = res.data.items;
    offer.forEach(offer => {
      var div = document.createElement('div');
      div.innerHTML = `${offer.name}`
      let icon = document.createElement("i");
      icon.addEventListener("click", ()=>{
        console.log("liked");
        icon.style.color = "red";
      })
      icon.classList.add("fa-solid");
      icon.classList.add("fa-heart");
      div.appendChild(icon);
      offers.appendChild(div)
    });
  });




// ================
// axios.get('http://localhost:8000/api....', 
//   { headers: { authorization: 'my secret token' } });


// LogIn.onclick = sendData;

// function sendData(){
//   let data = new FormData();
//   data.append('email', 'jad@sef.com');
//   data.append('password', 'test1234');
  
//   axios.post('http://localhost:8000/api/login', data)
//   .then(res => {
//     data = res.data;
//     token = data.authorisation.token;
//     localStorage.setItem('token', token);
//     console.log(localStorage);
//   });
// }

// SignUp.onclick = getItems;

// function getItems(event){
//   let data = new FormData();
//   data.append('name', name1.value);
//   data.append('email', email.value);
//   data.append('password', password.value);
  
//   axios.post('http://localhost:8000/api/register',data)
//   .then(res => console.log(res.data));
// }

// Like.onclick = getUsers;

// function getUsers(event){
//   let data =new FormData();
//   data.append('email', 'user@gmail.com');
//   data.append('password', 'test1234')
//   axios.post('http://localhost:8000/api/like', data,
//     { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
//   .then(res => console.log(res.data));
// }
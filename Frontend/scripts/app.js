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


  // Populate offer section
axios.get("http://localhost:8000/api/offer")
  .then(res => {
    const offers = document.querySelector(".offers");
    let offer = res.data.items;
    offer.forEach(offer => {
      // console.log(offer);
      var div = document.createElement('div');
      div.innerHTML = ` Name: ${offer.name} <br> ID: ${offer.id}`
      // let icon = document.createElement("i");
      // icon.addEventListener("click", ()=>{
      //   axios.post(`http://localhost:8000/api/like/ ${offer.id}`,'',
      //   { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
      //   .then(res => console.log(res.data));
      //   icon.classList.toggle("red");
      // })
      // icon.classList.add("fa-solid");
      // icon.classList.add("red");
      // icon.classList.add("fa-heart");
      // icon.style.cursor = "pointer";
      // div.appendChild(icon);
      offers.appendChild(div)
    });
  });

  // Populate Likes Section
axios.get("http://localhost:8000/api/getLikes",
{headers: { Authorization : `Bearer ${localStorage.getItem('token')}`}})
.then(res => {
  const like_section = document.querySelector(".likes");
  if(res.data.status == 'error'){
    like_section.innerHTML = "Please Login to add Items"
    return
  };
  if(res.data.message == 'No likes'){
    like_section.innerHTML = "You haven't Like Anything So Far !"
    return;
  };
  let likes = res.data.result;
  for (let i=0; i<likes.length; i++){
    console.log(likes[i])
    var div = document.createElement('div');
    div.innerHTML = ` Name: ${likes[i].name} <br> ID: ${likes[i].id}`
    let icon = document.createElement("i");
    icon.addEventListener("click", ()=>{
      axios.post(`http://localhost:8000/api/like/ ${likes[i].id}`,'',
      { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
      .then(res => console.log(res.data));
      icon.classList.toggle("red");
    })
    icon.classList.add("fa-solid");
    icon.classList.add("red");
    icon.classList.add("fa-heart");
    icon.style.cursor = "pointer";
    div.appendChild(icon);
    like_section.appendChild(div)
  }
})

  
  



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
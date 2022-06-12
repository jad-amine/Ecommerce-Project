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
      var div = document.createElement('div');
      div.innerHTML = ` Name: ${offer.name} <br> ID: ${offer.id} <br><h4>Discount: ${offer.offer} %</h4>`
      offers.appendChild(div)
    });
  });

  // Populate Likes Section
axios.get("http://localhost:8000/api/getLikes",
{headers: { Authorization : `Bearer ${localStorage.getItem('token')}`}})
.then(res => {
  const like_section = document.querySelector(".likes");
  if(res.data.message == 'Unauthenticated user'){
    like_section.innerHTML = "Please Login to add Items"
    return;
  };
  if(res.data.message == 'No likes'){
    like_section.innerHTML = "You haven't Liked Anything So Far !"
    return;
  };
  let likes = res.data.result;
  for (let i=0; i < likes.length; i++){
    var div = document.createElement('div');
    div.innerHTML = ` Name: ${likes[i].name} <br> ID: ${likes[i].id}`
    let icon = document.createElement("i");
    icon.addEventListener("click", ()=>{
      axios.post(`http://localhost:8000/api/like/ ${likes[i].id}`,'',
      { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
      .then(res => {
        location.reload();
        console.log(res.data)});
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


 // Items Section 
axios.get("http://localhost:8000/api/items",
{ headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
.then(res=>{
  let data = res.data;
  let items = data.items;
  let all_id = [];
  let user_likes = data.user;
  let likes = [];
  if(user_likes){
    user_likes.forEach(like=>likes.push(like.id))
  }
  items.forEach(item=>all_id.push(item.id))
  const section = document.querySelector(".items");
  items.forEach(item => {
    var div = document.createElement('div');
    div.innerHTML = ` Name: ${item.name} <br> ID: ${item.id}`
    let icon = document.createElement("i");
    icon.addEventListener("click", ()=>{
      if(!localStorage.getItem('token')){
        alert("Please Login to Like Items !")
        return;
      }
      axios.post(`http://localhost:8000/api/like/ ${item.id}`,'',
      { headers: { Authorization: "Bearer" + `${localStorage.getItem('token')}`}})
      .then(res => {
        let data = res.data;
        console.log(res.data)
        if(data.status == "error"){
          alert('Please Login to Like Items');
          return;
        } else{
          icon.classList.toggle("red");
          location.reload();
        }
      })
    })
    icon.classList.add("fa-solid");
    if(likes.includes(item.id)){
      icon.classList.add("red");
    }
    icon.classList.add("fa-heart");
    icon.style.cursor = "pointer";
    div.appendChild(icon);
    section.appendChild(div)
  });
})


// Grab elements and display user name
let name1 = localStorage.getItem('name'); 
const login = document.querySelector("#login-tab") 
const logout = document.querySelector("#logout-tab") 

  // Populate offer section
axios.get("http://localhost:8000/api/offer")
  .then(res => {
    const offers = document.querySelector(".offers");
    let offer = res.data.items;
    offer.forEach(offer => {
      var container1 = document.createElement("div");
      var div = document.createElement('div');
      div.style.backgroundImage = `url(${offer.image})`;
      div.classList.add('show_item');
      let p = document.createElement("p");
      let h2 = document.createElement("h2");
      h2.innerText = ` ${offer.name}`;
      p = `Discount: ${offer.offer} %`
      container1.appendChild(div);
      container1.append(h2);
      container1.append(p);
      offers.appendChild(container1);
    });
  });

  // Populate Likes Section
axios.get("http://localhost:8000/api/getLikes",
{headers: { Authorization : `Bearer ${localStorage.getItem('token')}`}})
.then(res => {
  const like_section = document.querySelector(".likes");
  // User not logged in
  if(res.data.message == 'Unauthenticated user'){
    like_section.innerHTML = "Please Login to add Items"
    return;
  };
  // User logged in (change dispay)
  login.innerHTML = 'Welcome ' +  name1.toUpperCase();
  logout.innerHTML = "Sign Out";
  logout.addEventListener("click", ()=>{
    localStorage.clear();
    location.reload();
  })
  // User doesn't have likes
  if(res.data.message == 'No likes'){
    like_section.innerHTML = "You haven't Liked Anything So Far !"
    return;
  };
  // User have likes
  let likes = res.data.result;
  for (let i=0; i < likes.length; i++){
    var container1 = document.createElement("div");
    var div = document.createElement('div');
    div.style.backgroundImage = `url(${likes[i].image})`;
    let h2 = document.createElement("h2");
    h2.innerText = `${likes[i].name}`;
    let p = document.createElement("p");
    p = `Discount: ${likes[i].offer} %`;
    div.classList.add('show_item');
    let icon = document.createElement("i");
    // Like button functionality
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
    container1.appendChild(div);
    container1.append(icon);
    container1.append(h2);
    container1.append(p);
    like_section.appendChild(container1);
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
    var container1 = document.createElement("div");
    var div = document.createElement('div');
    let h2 = document.createElement("h2");
    let p = document.createElement("p");
    h2.innerText = `${item.name}`;
    p = `Discount: ${item.offer} %`;
    div.style.backgroundImage = `url(${item.image})`;
    div.classList.add('show_item');
    // Like button functionality
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
    container1.appendChild(div);
    container1.append(icon);
    container1.append(h2);
    container1.append(p);
    section.appendChild(container1);
  });
})

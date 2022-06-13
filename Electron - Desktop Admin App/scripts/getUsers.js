const span = document.querySelector("#result");

// Get users table from the server
axios.get('http://localhost:8000/api/users', {
  headers: {
    'Authorization': `bearer ${localStorage.getItem('token')}`
  }
}).then( res => {
  data = res.data.users;
  // Populate the users to the table
  for (let i=0; i< data.length; i++){
    let table = document.querySelector("#users");
    let user = data[i];
    let row = table.insertRow(i+1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = user.id;
    cell2.innerHTML = user.name;
    cell3.innerHTML = user.email;
    cell4.innerHTML = user.user_type;
    cell5.innerHTML = user.updated_at.split(".")[0];
    let icon = document.createElement("i");
    icon.classList.add('fa-solid');
    icon.classList.add('fa-eye');
    icon.classList.add('view');
    cell6.appendChild(icon);
    
    icon.addEventListener("click", ()=>{
      console.log(user.id)
      axios.get(`http://localhost:8000/api/users/${user.id}`, 
      {headers: {'Authorization' : `Bearer ${localStorage.getItem('token')}`}})
      .then(res => {
        let items = res.data.items;
        span.innerHTML = "<h2>Items liked:</h2>";
        if(!items.length){
          span.innerHTML = "<h2>No Items Liked<h2>";
        }
        for(let i=0; i<items.length; i++){
          let p = document.createElement("p");
          p.innerText = `${i+1}:   ${items[i].name.toUpperCase()} /  ID: ${items[i].id} /  Price: ${items[i].price} /  Offer: ${items[i].offer}`;
          span.appendChild(p);
        }
        console.log(items)})
      .catch(err => console.log(err));
    })
  }
})
.catch(err=>{
  alert("You are not an Admin");
  // location.replace("../index.html");
});

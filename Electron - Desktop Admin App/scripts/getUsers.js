
axios.get('http://localhost:8000/api/users', {
  headers: {
    'Authorization': `bearer ${localStorage.getItem('token')}`
  }
}).then( res => {
  data = res.data.users;
  for (let i=0; i< data.length; i++){
    let table = document.querySelector("#users");
    let user = data[i];
    let row = table.insertRow(i+1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell1.innerHTML = user.id;
    cell2.innerHTML = user.name;
    cell3.innerHTML = user.email;
    cell4.innerHTML = user.user_type;
    cell5.innerHTML = user.updated_at;
  }
})
.catch(err=>{
  alert("You are not an Admin");
  location.replace("../index.html");
});

axios.get("http://localhost:8000/api/items",
).then( res => {
  data = res.data.items;
  for (let i=0; i< data.length; i++){
    let table = document.querySelector("#view_items");
    let item = data[i];
    let row = table.insertRow(i+1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = item.id;
    cell2.innerHTML = item.name;
    cell3.innerHTML = item.price;
    cell4.innerHTML = item.offer;
    cell5.innerHTML = item.image;
    cell6.innerHTML = "Delete";
    cell6.classList.add("reder");
    cell6.addEventListener("click", ()=>{
      axios.delete(`http://localhost:8000/api/item/${item.id}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`
        }
      })
      .then(res => location.reload())
      .catch(err => console.log(err));
    })
  }
})
.catch(err=>{
  alert("You are not an Admin");
  location.replace("../index.html");
});

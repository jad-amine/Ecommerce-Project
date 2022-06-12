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
    let cell7 = row.insertCell(6);
    cell1.innerHTML = item.id;
    cell2.innerHTML = item.name;
    cell3.innerHTML = item.price;
    cell4.innerHTML = item.offer;
    cell5.innerHTML = item.image;
    cell6.innerHTML = "Update";
    cell6.classList.add("greyer");
    // cell6.style.backgroundColor = "rgb(171, 171, 171)";
    cell7.innerHTML = "Delete";
    cell7.classList.add("reder");
    // cell7.style.backgroundColor = "red";
    cell6.addEventListener("click", ()=>{
      
    })
    cell7.addEventListener("click", ()=>{
      
    })
    
    // let icon = document.createElement("i");
    // icon.classList.add = "fa-solid";
    // icon.classList.add = "fa-pen";
    // document.appendchild(icon);
    // cell7.innerHTML = 'hello';
  }
})
// .catch(err=>{
//   alert("You are not an Admin");
//   location.replace("../index.html");
// });

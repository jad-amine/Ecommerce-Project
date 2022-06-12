// Grab elements
const name1 = document.querySelector("#name");
const price = document.querySelector("#price");
const offer = document.querySelector("#offer");
const image = document.querySelector("#image");
const add_item = document.querySelector("#add-item");

add_item.addEventListener("click", postData);

function postData(){
  console.log('hi');
  if(!name1.value || !price.value || !offer.value){
    alert('Please fill all the fields');
    return;
  };
  let data = new FormData();
  data.append('name', name1.value);
  data.append('price', price.value);
  data.append('offer', offer.value);
  data.append('image', image.value);

  axios.post("http://localhost:8000/api/item", data, {
    headers: {
      'Authorization': `bearer ${localStorage.getItem('token')}`
    }
  }).then(res => {
    if(res.data.status == "error"){
      alert("Item Already exists")
    }
    const added =document.querySelector("#added-success");
    added.innerHTML = "Item Added !"
    console.log(res.data)})
  .catch(err =>{
    alert('You are not an Admin !')});
    location.replace("../index.html");
}
// Grab elements
const name1 = document.querySelector("#name");
const price = document.querySelector("#price");
const offer = document.querySelector("#offer");
const image = document.querySelector("#image");
const add_item = document.querySelector("#add-item");

add_item.addEventListener("click", postData);


function postData(){
  console.log('hi');
  if(!name1.value || !price.value || !offer.value || !image.value){
    alert('Please fill all the fields');
    return;
  };
  
  // Convert Image to base 64
  var fileSelected = image.files;
  var fileToLoad = fileSelected[0];
  var fileReader = new FileReader();
  var base64;
  fileReader.onload = function (fileLoadedEvent){
    
    base64 = fileLoadedEvent.target.result;
    // console.log(base64);
    
    base64 = base64.split(",")[1];
    console.log(base64);
    post_img(base64);
  }
  fileReader.readAsDataURL(fileToLoad);
}

// Send item to the backend
function post_img(base64){
  let data = new FormData();
  data.append('name', name1.value);
  data.append('price', price.value);
  data.append('offer', offer.value);
  data.append('image', base64)
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
    // location.replace("./items.html");
}


 //Searching data
 
document.getElementById("button").addEventListener("click",showData)

function showData(){
  let product = document.getElementById("input").value

  let url = "https://mycorsproxy-tuto1.herokuapp.com/https://api-bsale-first.herokuapp.com/products/search?query="+product
  fetch (url)
  .then(res=>res.json())
  .then(data_new=>{
    let data3="";
    data_new.map((element)=>{
      data3+=`<div class=productElement>
      <div>${element.name}</div>
      <img src="${element.url_image}" width= "190" height="170px" alt="Not Found"/>
      <div> Price: $${element.price}</div>
      </div>`
  });

  document.getElementById("filt").innerHTML = data3;
})
  .catch(e=>{console.log(e)})
}


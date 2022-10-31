const URL_products = "http://localhost:8010/proxy/categories";

//Getting Categories
fetch(URL_products)
.then((data)=>{return data.json()}) 
.then((completedata)=>{
  let data1="";
  completedata.map((element)=>{
    data1+=`<div class="UnitElement">${element.name}</div>`
  });
  document.getElementById("CategoryElement").innerHTML=data1;
})
.catch((error)=>{
  console.log(error);
})


//Getting Products

const URL_categories = "http://localhost:8010/proxy/products";
fetch(URL_categories)
.then((data)=>{return data.json()}) 
.then((completedata)=>{
  let data2="";
  completedata.map((element)=>{
    data2+=`<div class=productElement>
    <div>${element.name}</div>
    <img src="${element.url_image}" width= "190" height="170px" alt="Not Found"/>
    <div> Price: $${element.price}</div>
    </div>`
  });
  document.getElementById("Products").innerHTML=data2;
})
.catch((error)=>{
  console.log(error);
})


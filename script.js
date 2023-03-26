var container=document.createElement("div");
container.className="container";
var row=document.createElement("div");
row.classList.add("row","m-3");
container.append(row);

var res=fetch("https://restcountries.com/v2/all");
res.then((data)=>data.json())
.then((data1)=>foo(data1))
.catch((error)=>console.log(error));

function foo(data1){
   console.log(data1);
   for(var i=0;i<data1.length;i++){
       row.innerHTML+=
       `<div class="col-lg-4 col-sm-12">
       <div class="card">
  <div class="card-header" style="text-align:center" >

   ${data1[i].name}
  </div>
  <div class="card-body">
  <img src="${data1[i].flag}" class="card-img-top" alt="Country Flags">
  <p class="card-text" style="text-align:center"> Capital:${data1[i].capital}</p>
  <p class="card-text" style="text-align:center">Region:${data1[i].region}</p>
  <p class="card-text" style="text-align:center">Latlng:${data1[i].latlng}</p>

  <p class="card-text" style="text-align:center">Country code:${data1[i].alpha3Code}</p> 
  <button onclick="demo('${data1[i].name}',${i})">Click for Weather</button>
  <div id="result${i}" style="text-align:center"></div>
  </div>
</div>
     </div>`
    
    }
  }
async function demo(city,i){
const app_key="eb3898f59648758ae03f6eb59ba99c59";
let baseurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${app_key}`;
    let data=await fetch(baseurl);
    let format=await data.json();
    console.log(format.main.temp);
    var result=document.getElementById("result"+i);
    result.innerHTML=`Temperature:${format.main.temp}`
}
document.body.append(container);



 
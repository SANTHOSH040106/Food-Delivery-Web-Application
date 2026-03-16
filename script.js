function register(){

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

fetch("/register",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})

})
.then(res=>res.text())
.then(data=>{

alert(data);

if(data==="Registration successful"){
window.location="login.html";
}

});

}

function login(){

const username=document.getElementById("username").value;
const password=document.getElementById("password").value;

fetch("/login",{

method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({username,password})

})
.then(res=>res.text())
.then(data=>{

if(data==="success"){
window.location="index.html";
}else{
alert("Invalid credentials");
}

});

}

if(document.getElementById("restaurants")){

fetch("/restaurants")
.then(res=>res.json())
.then(data=>{

const div=document.getElementById("restaurants");

data.forEach(r=>{

div.innerHTML+=`

<div class="card">

<h3>${r.name}</h3>

<a href="menu.html?id=${r.id}">
<button>View Menu</button>
</a>

</div>

`;

});

});

}

if(window.location.pathname.includes("menu.html")){

const params=new URLSearchParams(window.location.search);
const id=params.get("id");

fetch("/menu/"+id)

.then(res=>res.json())

.then(data=>{

const div=document.getElementById("menu");

data.forEach(item=>{

div.innerHTML+=`

<div class="card">

<h3>${item.name}</h3>

<p>₹${item.price}</p>

<button onclick="orderFood('${item.name}')">
Order
</button>

</div>

`;

});

});

}

function orderFood(name){

document.getElementById("foodName").innerText =
name + " is on the way! 🍛";

document.getElementById("orderPopup").style.display="flex";

}

function closePopup(){

document.getElementById("orderPopup").style.display="none";

}
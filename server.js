const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

let users = [];

const restaurants = [

{
id:1,
name:"Amma Mess",
menu:[
{name:"Meals",price:120},
{name:"Sambar Rice",price:80},
{name:"Curd Rice",price:60},
{name:"Lemon Rice",price:70}
]
},

{
id:2,
name:"Chettinad Kitchen",
menu:[
{name:"Chicken Chettinad",price:220},
{name:"Mutton Chukka",price:260},
{name:"Chicken Biryani",price:180},
{name:"Parotta with Salna",price:90}
]
},

{
id:3,
name:"Dosa Corner",
menu:[
{name:"Plain Dosa",price:40},
{name:"Masala Dosa",price:70},
{name:"Ghee Roast",price:90},
{name:"Podi Dosa",price:85}
]
},

{
id:4,
name:"Tiffin Centre",
menu:[
{name:"Idli (2)",price:30},
{name:"Vada",price:25},
{name:"Pongal",price:60},
{name:"Poori Masala",price:70}
]
},

{
id:5,
name:"Biriyani House",
menu:[
{name:"Hyderabad Biriyani",price:350},
{name:"Ambur Biriyani",price:300},
{name:"Kolkata Biriyani",price:280},
{name:"Chettinad Biriyani",price:250}
]
}

];

app.post("/register",(req,res)=>{

const {username,password}=req.body;

const userExists = users.find(u=>u.username===username);

if(userExists){
return res.send("User already exists");
}

users.push({username,password});
res.send("Registration successful");

});

app.post("/login",(req,res)=>{

const {username,password}=req.body;

const user = users.find(
u=>u.username===username && u.password===password
);

if(user){
res.send("success");
}else{
res.send("Invalid credentials");
}

});

app.get("/restaurants",(req,res)=>{
res.json(restaurants);
});

app.get("/menu/:id",(req,res)=>{

const restaurant = restaurants.find(
r=>r.id==req.params.id
);

if(!restaurant){
return res.send("Restaurant not found");
}

res.json(restaurant.menu);

});

app.listen(3000,()=>{
console.log("Server running on http://localhost:3000");
});
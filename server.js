const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const pgs = [
{ name:"Silver Residency", city:"Ahmedabad", country:"India", price:9000, lat:23.03, lng:72.58 },
{ name:"Golden Stay", city:"Mumbai", country:"India", price:12000, lat:19.07, lng:72.87 },
{ name:"Urban Heights", city:"Delhi", country:"India", price:10000, lat:28.61, lng:77.20 },
{ name:"Maple Homes", city:"Toronto", country:"Canada", price:25000, lat:43.65, lng:-79.38 },
{ name:"Sky Habitat", city:"London", country:"UK", price:30000, lat:51.50, lng:-0.12 }
];

app.get("/pgs",(req,res)=>{
res.json(pgs);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
	console.log('Server running on port ${PORT}');
});
const express = require ('express');
const date = require('date-format')
const app= express ();
const PORT = 4444|| process.env.PORT;

const d = new Date();
d.getFullYear();

app.get("/", (req, res) =>{
          res.status(200).send("<h1> Hii this is simple social app made from hitesh's pro backend developer course <h1>");
});



app.get("/api/v1/instagram" , (req,res) =>{
    const instagram = {
        "username":"manickam_here",
        "follower": 10,
        "following": 10,
        "date | time": date('dd/MM | hh:mm:ss.SSS')
    }
     res.status(200).json(instagram)
})

app.get("/api/v1/facebook" , (req,res) =>{
    const facebook = {
        "username":"manickam venkatchalam",
        "follower": 5,
        "following": 5,
        "date | time": date('dd/MM | hh:mm:ss.SSS'),
    }
     res.status(200).json(facebook)
})


app.get("/api/v1/linkedin" , (req,res) =>{
    const linkedin = {
        "username":"manickam",
        "follower": 20,
        "following": 20,
        "date | time": date('dd/MM | hh:mm:ss.SSS')
    }
     res.status(200).json(linkedin)
});

app.get("/api/v1/:token", (req,res) => {
    console.log(req.params.token)
    res.status(200).json({param: req.params.token})
    
}) 

app.listen(PORT, ()=> {
    console.log('working')
});
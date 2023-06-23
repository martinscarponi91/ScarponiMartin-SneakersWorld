const express = require("express");
const app = express();
const PORT = 3000;

//Rutas
app.get("/", (req,res) => {
    res.send("Estoy en home")
})

app.get("/login", (req,res) => {
    res.send("Estoy en login")
})

app.get("/register", (req,res) => {
    res.send("Estoy en register")
})

app.get("/detailproduct", (req,res) => {
    res.send("Estoy en detail product")
})

app.get("/cart", (req,res) => {
    res.send("Estoy en cart")
})


//Server 
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });
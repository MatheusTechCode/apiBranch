
const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Olá, Nicolas passou aqui");
});


app.listen(3005, () => {
  console.log("Servidor on");
});


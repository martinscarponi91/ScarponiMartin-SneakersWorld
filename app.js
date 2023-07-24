const express = require("express");
const app = express();
const PORT = 1000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(require("./routes/indexRoutes"));
app.use(require("./routes/productsRoutes"));

//Server
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

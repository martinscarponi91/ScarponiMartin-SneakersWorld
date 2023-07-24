const express = require("express");
const productosRoutes = require("./routes/productosRoutes");

const app = express();

// Middleware
app.use(express.json());


// Rutas
app.use(require("./routes/indexRoutes"));
app.use("/productos", productosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

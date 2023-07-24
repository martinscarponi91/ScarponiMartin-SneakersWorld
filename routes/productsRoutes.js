const express = require("express");
const {
  obtenerProductos,
  crearProducto,
  obtenerUnProducto,
  actualizarProducto,
  eliminarProducto,
} = require("../controllers/productsControllers");
const validateProduct = require("../middlewares/validators/productValidator");
const router = express.Router();

// GET: Recupera datos de un recurso.
router.get("/products", obtenerProductos);

// GET: Recupera datos de un recurso.
router.get("/products/:id", obtenerUnProducto);

// POST: Envía datos para crear un recurso.
router.post("/products", validateProduct, crearProducto);

// PUT: Actualiza un recurso existente con datos nuevos.
router.put("/products/:id", actualizarProducto);

// DELETE: Elimina un recurso.
router.delete("/products/:id", eliminarProducto);



module.exports = router;

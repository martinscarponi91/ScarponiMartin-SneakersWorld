const { readProductos, writeProductos } = require("../utils/fsFunctions");

function obtenerProductos(req, res) {
  let productosDB = readProductos();
  res.json({ productosDB });
}

const obtenerUnProducto = (req, res) => {
  res.send("Nike Air Force 1");
};

const crearProducto = (req, res) => {
  const { id, nombre, precio } = req.body;
  // creamos el Producto
  const newProducto = { id, nombre, precio };

  // logica de base de datos
  let productosDB = readProductos();
  if (!Array.isArray(productosDB)) {
    console.log("no es un array");
    console.log(productosDB);
    productosDB = [];
  }
  productosDB.push(newProducto);
  writeProductos(productosDB);
  res.json({ message: "creado con exito", producto: newProducto });
};

const actualizarProducto = (req, res) => {
  res.send("Producto actualizado");
};

const eliminarProducto = (req, res) => {
  res.send("Producto eliminado");
};

module.exports = {
  obtenerProductos,
  crearProducto,
  obtenerUnProducto,
  actualizarProducto,
  eliminarProducto,
};

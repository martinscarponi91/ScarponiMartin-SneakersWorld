const fs = require("fs");
const validateProduct = require("../middlewares/validators/validateProduct");
const { body, validationResult } = require("express-validator");

const leerProductos = () => {
  try {
    const productos = fs.readFileSync("productos.json", "utf-8");
    return JSON.parse(productos);
  } catch (error) {
    return [];
  }
};

const escribirProductos = (productos) => {
  fs.writeFileSync("productos.json", JSON.stringify(productos, null, 2));
};

const obtenerProductos = (req, res) => {
  const productos = leerProductos();
  res.json({ productos });
};

const obtenerProductoPorId = (req, res) => {
  const { id } = req.params;
  const productos = leerProductos();
  const producto = productos.find((p) => p.id === parseInt(id));
  if (producto) {
    res.json({ producto });
  } else {
    res.status(404).json({ message: "Producto no encontrado." });
  }
};

const crearProducto = (req, res) => {
  const { id, nombre, precio } = req.body;
  const nuevoProducto = { id, nombre, precio };
  const productos = leerProductos();
  productos.push(nuevoProducto);
  escribirProductos(productos);
  res.status(201).json({ message: "Producto creado exitosamente.", producto: nuevoProducto });
};

const actualizarProducto = (req, res) => {
  const { id } = req.params;
  const { nombre, precio } = req.body;
  let productos = leerProductos();
  const producto = productos.find((p) => p.id === parseInt(id));
  if (producto) {
    producto.nombre = nombre;
    producto.precio = precio;
    escribirProductos(productos);
    res.json({ message: "Producto actualizado exitosamente.", producto });
  } else {
    res.status(404).json({ message: "Producto no encontrado." });
  }
};

const eliminarProducto = (req, res) => {
  const { id } = req.params;
  let productos = leerProductos();
  productos = productos.filter((p) => p.id !== parseInt(id));
  escribirProductos(productos);
  res.json({ message: "Producto eliminado exitosamente." });
};

module.exports = {
  obtenerProductos,
  obtenerProductoPorId,
  crearProducto: [validateProduct, crearProducto], // Agregamos el middleware de validación
  actualizarProducto: [validateProduct, actualizarProducto], // Agregamos el middleware de validación
  eliminarProducto,
};

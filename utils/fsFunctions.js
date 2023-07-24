const fs = require("fs");

const readProductos = () => {
  try {
    const productos = fs.readFileSync("products.json", "utf-8");
    return JSON.parse(productos);
  } catch (error) {
    if (error.code === "ENOENT") {
      // El archivo no existe
      console.error(
        "El archivo usuarios.json no se encontró en la ubicación especificada."
      );
    } else {
      // Otro error de lectura
      console.error("Error al leer el archivo usuarios.json:", error.message);
    }
    return null;
  }
};

// escribir archivo produtos
const writeProductos = (productos) => {
  fs.writeFileSync("products.json", JSON.stringify(productos), null, 2);
};

module.exports = {
  readProductos,
  writeProductos,
};

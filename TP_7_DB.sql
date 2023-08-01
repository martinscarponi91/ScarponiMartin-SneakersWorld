CREATE TABLE productos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    marca VARCHAR(50),
    precio DECIMAL(10, 2),
    talle VARCHAR(10)
);
CREATE TABLE usuarios (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100),
    apellido VARCHAR(100),
    provincia VARCHAR(50),
    direccion VARCHAR(200)
);
INSERT INTO productos (nombre, marca, precio, talle)
VALUES
    ('Air Force I', 'Nike', 250, '10'),
    ('Cortez', 'Nike', 150, '8'),
    ('Old Skool', 'Vans', 120, '10'),
    ('Superstar', 'Adidas', 150, '10'),
    ('Air Max', 'Nike', 199, '8');
    
INSERT INTO usuarios (nombre, apellido, provincia, direccion)
VALUES ('Martin', 'Scarponi', 'Cordoba', 'Puerto Argentino 1675');




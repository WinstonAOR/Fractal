-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS FractalDB;
USE FractalDB;

-- Tabla para almacenar información de usuarios
CREATE TABLE IF NOT EXISTS Usuarios (
    UserID INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    CorreoElectronico VARCHAR(100) UNIQUE NOT NULL,
    Contraseña VARCHAR(255) NOT NULL,
    Direccion VARCHAR(255),
    Telefono VARCHAR(15)
);

-- Tabla para almacenar información de productos
CREATE TABLE IF NOT EXISTS Productos (
    ProductoID INT AUTO_INCREMENT PRIMARY KEY,
    NombreProducto VARCHAR(100) NOT NULL,
    Descripcion TEXT,
    Precio DECIMAL(10, 2) NOT NULL,
    Stock INT NOT NULL,
    Categoria VARCHAR(50) NOT NULL,
    ImagenURL VARCHAR(255)
);

-- Tabla para almacenar información de pedidos
CREATE TABLE IF NOT EXISTS Pedidos (
    PedidoID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    FechaPedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    EstadoPedido ENUM('Pendiente', 'En Proceso', 'Enviado', 'Entregado') DEFAULT 'Pendiente',
    FOREIGN KEY (UserID) REFERENCES Usuarios(UserID)
);

-- Tabla para almacenar detalles de pedidos
CREATE TABLE IF NOT EXISTS DetallesPedido (
    DetalleID INT AUTO_INCREMENT PRIMARY KEY,
    PedidoID INT,
    ProductoID INT,
    Cantidad INT,
    PrecioUnitario DECIMAL(10, 2),
    Total DECIMAL(10, 2),
    FOREIGN KEY (PedidoID) REFERENCES Pedidos(PedidoID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);

-- Tabla para almacenar información de comentarios y reseñas
CREATE TABLE IF NOT EXISTS ComentariosResenas (
    ComentarioID INT AUTO_INCREMENT PRIMARY KEY,
    UserID INT,
    ProductoID INT,
    Comentario TEXT,
    Calificacion INT,
    FechaComentario TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UserID) REFERENCES Usuarios(UserID),
    FOREIGN KEY (ProductoID) REFERENCES Productos(ProductoID)
);

-- Tabla para almacenar información de la empresa
CREATE TABLE IF NOT EXISTS InformacionEmpresa (
    EmpresaID INT AUTO_INCREMENT PRIMARY KEY,
    Historia TEXT,
    Mision TEXT,
    Vision TEXT,
    Valores TEXT,
    PremiosReconocimientos TEXT
);

-- Tabla para almacenar información de contacto
CREATE TABLE IF NOT EXISTS InformacionContacto (
    ContactoID INT AUTO_INCREMENT PRIMARY KEY,
    Direccion VARCHAR(255),
    Telefono VARCHAR(15),
    CorreoElectronico VARCHAR(100),
    MapaInteractivoURL VARCHAR(255)
);

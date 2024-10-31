const express = require('express');
const path = require('path');

// Crea una aplicación de Express
const app = express();

// Sirve los archivos estáticos (HTML, JS, CSS) desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Escucha en el puerto 3000 o cualquier puerto especificado en el entorno
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

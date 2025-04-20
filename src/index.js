const express = require('express');
const app = express();
const port = 3232;

app.get('/', (req, res) => {
    res.send('¡Hola desde el servidor Node.js en Docker! construido en jenkins');
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en el puerto ${port}`);
});
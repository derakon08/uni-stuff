const express = require('express');
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('¡Hola desde la raíz de la aplicación!');
});

app.get('/datos', (req, res) => {
  res.send('¡Hello data!');
});

app.get('/botones', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">7
            <title>Mi Botón en Node.js</title>
            <style>
                .btn {
                    padding: 10px 20px;
                    font-size: 16px;
                    color: white;
                    background-color: #007BFF;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .btn:hover { background-color: #0056b3; }
            </style>
        </head>
        <body>
            <h1>Servidor Node.js</h1>
            <!-- Aquí está tu botón HTML -->
            <button class="btn" onclick="alert('¡Hiciste clic!')">Presióname</button>
        </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log("Servidor escuchando en http://localhost:" + port); //backticks are u+0060
});
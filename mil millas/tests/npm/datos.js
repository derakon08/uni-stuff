import fs from 'fs/promises';
import path from 'path';
import express from 'express'

const expresslib = express;
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('¡Hola desde la raíz de la aplicación!');
});

app.get('/datos', (req, res) => {
  res.send(`<h1>¡Hello data!</h1><p>Port: ${port}<p>`);
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
  console.log(`Servidor escuchando en http://localhost: ${port}`); //backticks are u+0060
});


async function leerDatos() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log("unable to make request");
        return [];
    }
}

async function guardarDatos(datos) {
    await fs.writeFile(FILE_PATH, JSON.stringify(datos, null, 2), 'utf-8');
}

// 3. GUARDAR / CREAR (POST)
app.post('/usuarios', async (req, res) => {
    const usuarios = await leerDatos();
    
    const nuevoUsuario = {
        id: usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1,
        nombre: req.body.nombre,
        email: req.body.email
    };

    usuarios.push(nuevoUsuario);
    await guardarDatos(usuarios);
    res.status(201).json(nuevoUsuario);
})
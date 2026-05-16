const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('¡Hola desde la raíz de la aplicación!');
});

app.get('/datos', (req, res) => {
  res.send('¡Hello data!');
});

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000"); //backticks are u+0060
});
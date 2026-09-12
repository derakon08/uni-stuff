const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const app = express();
const PORT = 3000;
const FILE_PATH = path.resolve('./data.json');

// Middleware para parsear JSON
app.use(express.json());

// Funciones ayudantes para leer y escribir
async function leerDatos() {
    try {
        const data = await fs.readFile(FILE_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

async function guardarDatos(datos) {
    await fs.writeFile(FILE_PATH, JSON.stringify(datos, null, 2), 'utf-8');
}

// ============================================
// 1. CONSULTAR TODOS LOS USUARIOS (GET)
// ============================================
app.get('/usuarios', async (req, res) => {
    const usuarios = await leerDatos();
    res.json(usuarios);
});

// ============================================
// 2. CONSULTAR USUARIO POR ID (GET)
// ============================================
app.get('/usuarios/:id', async (req, res) => {
    const usuarios = await leerDatos();
    const usuario = usuarios.find(u => u.id === parseInt(req.params.id));
    
    if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    res.json(usuario);
});

// ============================================
// 3. CREAR NUEVO USUARIO (POST)
// ============================================
app.post('/usuarios', async (req, res) => {
    const { nombre, email } = req.body;
    
    // Validación básica
    if (!nombre || !email) {
        return res.status(400).json({ error: 'Nombre y email son requeridos' });
    }
    
    const usuarios = await leerDatos();
    
    // Generar nuevo ID
    const nuevoId = usuarios.length > 0 ? Math.max(...usuarios.map(u => u.id)) + 1 : 1;
    
    // Crear nuevo usuario
    const nuevoUsuario = {
        id: nuevoId,
        nombre,
        email
    };
    
    // Guardar en el archivo
    usuarios.push(nuevoUsuario);
    await guardarDatos(usuarios);
    
    res.status(201).json({
        message: 'Usuario creado exitosamente',
        usuario: nuevoUsuario
    });
});

// ============================================
// 4. ACTUALIZAR USUARIO COMPLETO (PUT)
// ============================================
app.put('/usuarios/:id', async (req, res) => {
    const { nombre, email } = req.body;
    const id = parseInt(req.params.id);
    
    // Validación
    if (!nombre || !email) {
        return res.status(400).json({ error: 'Nombre y email son requeridos' });
    }
    
    const usuarios = await leerDatos();
    const indice = usuarios.findIndex(u => u.id === id);
    
    if (indice === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Actualizar usuario
    usuarios[indice] = {
        id,
        nombre,
        email
    };
    
    await guardarDatos(usuarios);
    
    res.json({
        message: 'Usuario actualizado exitosamente',
        usuario: usuarios[indice]
    });
});

// ============================================
// 5. ACTUALIZAR USUARIO PARCIALMENTE (PATCH)
// ============================================
app.patch('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, email } = req.body;
    
    const usuarios = await leerDatos();
    const indice = usuarios.findIndex(u => u.id === id);
    
    if (indice === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Actualizar solo los campos proporcionados
    if (nombre) usuarios[indice].nombre = nombre;
    if (email) usuarios[indice].email = email;
    
    await guardarDatos(usuarios);
    
    res.json({
        message: 'Usuario actualizado parcialmente',
        usuario: usuarios[indice]
    });
});

// ============================================
// 6. ELIMINAR USUARIO (DELETE)
// ============================================
app.delete('/usuarios/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    const usuarios = await leerDatos();
    const indice = usuarios.findIndex(u => u.id === id);
    
    if (indice === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Eliminar usuario
    const usuarioEliminado = usuarios.splice(indice, 1);
    await guardarDatos(usuarios);
    
    res.json({
        message: 'Usuario eliminado exitosamente',
        usuario: usuarioEliminado[0]
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
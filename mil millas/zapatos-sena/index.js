const { log } = require('console');
const express = require('express');
const fs = require('fs/promises');
const path = require('path');

const APP = express();
const FILE_PATH = path.resolve("/home/dera/MyStuff/code-stuff/sena/mil\ millas/test/zapatoas-sena/data.json");
const HOST_PATH = "/clients";

const PORT = 8000;

APP.use(express.json());

async function ReadData(){
    try{
        const data = await fs.readFile(FILE_PATH, 'utf-8');
        return JSON.parse(data || "[]");
    
    } catch (err) {
        console.log(err);
        return [`Unable to read file ${FILE_PATH}`];
    }
}

async function SaveData(data){
    await fs.writeFile(FILE_PATH, JSON.stringify(data, null, 1), 'utf-8');
}


//1.CONSULTAR TODOS LOS USUARIOS (GET)
APP.get(HOST_PATH, async (req, res) => {
    const clients = await ReadData();
    res.json(clients);
});


//2.CONSULTAR USUARIO POR ID (GET)
APP.get(HOST_PATH + '/:id', async (req, res) => {
    const clients = await ReadData();
    const client = clients.find(u => u.id === parseInt(req.params.id));
    
    if (!client) {
        return res.status(404).json({ error: 'No user found' });
    }
    
    res.json(client);
});


//3.CREAR NUEVO USUARIO (POST)
APP.post(HOST_PATH, async (req, res) => {
    const {id, name, email, phone_number, address, type, unit_price, unit_amount} = req.body;
    
    // Validación básica
    if (!name || !email || !id || !phone_number || !address || !type || !unit_price || !unit_amount) {
        return res.status(400).json({ error: 'All fields must be filled' });
    }
    
    const clients = await ReadData();
    
    // Generar nuevo ID
    const new_id = clients.length > 0 ? Math.max(...clients.map(u => u.id)) + 1 : 1;

    const subtotal = unit_amount * unit_price;
    
    // Crear nuevo client
    const new_client = {
        id: new_id, 
        name, 
        email, 
        phone_number, 
        address, 
        type, 
        unit_price, 
        unit_amount,
        subtotal
    };
    
    // Guardar en el archivo
    clients.push(new_client);
    await SaveData(clients);
    
    res.status(201).json({
        message: 'New user created',
        client: new_client
    });
});


//4.ACTUALIZAR USUARIO COMPLETO (PUT)
APP.put(HOST_PATH + '/:id', async (req, res) => {
    const { nombre, email } = req.body;
    const id = parseInt(req.params.id);
    
    // Validación
    if (!nombre || !email) {
        return res.status(400).json({ error: 'Nombre y email son requeridos' });
    }
    
    const clients = await ReadData();
    const indice = clients.findIndex(u => u.id === id);
    
    if (indice === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Actualizar client
    clients[indice] = {
        id,
        nombre,
        email
    };
    
    await SaveData(clients);
    
    res.json({
        message: 'Usuario actualizado exitosamente',
        client: clients[indice]
    });
});

// ============================================
// 6. ELIMINAR USUARIO (DELETE)
// ============================================
APP.delete(HOST_PATH + '/:id', async (req, res) => {
    const id = parseInt(req.params.id);
    
    const clients = await ReadData();
    const indice = clients.findIndex(u => u.id === id);
    
    if (indice === -1) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    
    // Eliminar client
    const usuarioEliminado = clients.splice(indice, 1);
    await SaveData(clients);
    
    res.json({
        message: 'Usuario eliminado exitosamente',
        client: usuarioEliminado[0]
    });
});

// Iniciar servidor
APP.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

APP.get('/', (req, res) => {
    res.send("<p>Root, welcome.</p>");
});


'use strict';
const express = require('express');
const fs = require('fs/promises');
const { isNumberObject: esObjetoNumero } = require('util/types');
const APLICACION = express();

APLICACION.use(express.json());

async function LeerDatos(rutaArchivo){
    consola.log(`Reading ${rutaArchivo}`);
try {
const datos = await fs.readFile(rutaArchivo, 'utf-8');
return JSON.parse(datos || "[]");
}
catch (error) {
        consola.log(`Unable to read`);
return [];
} 
}

async function GuardarDatos(rutaArchivo, datos) {
        consola.log(`Saving to ${rutaArchivo}`);
await fs.writeFile(rutaArchivo, JSON.stringify(datos, null, 1), 'utf-8');
}

async function AppObtener(peticion, respuesta, rutaArchivo){
    consola.log(`Get ${rutaArchivo}`);
const datos = await LeerDatos(rutaArchivo) || [];
    respuesta.json(datos);
}

async function AppPublicar(peticion, rutaArchivo){
    consola.log(`Recieved POST to ${rutaArchivo}`);
const solicitud = peticion.body; //type object
const datos = await LeerDatos(rutaArchivo);
if (!solicitud.id){
        solicitud.id = 0;
}
if (datos.length > 0 && !Object.keys(datos[0]).every((clave) => Object.hasOwn(solicitud, clave))) {
        console.error(`Expected structure: \n ${Object.keys(datos[0])}\n  Request body: ${solicitud}`);
return false;
}
const nuevoId = Math.max(0, ...datos.map((t) => t.id )) + 1; //autoincrement ifg
if (isNaN(nuevoId)){
        consola.log("Error: expected type of number.");
return false;
}
    solicitud.id = nuevoId;
    datos.push(solicitud);
await GuardarDatos(rutaArchivo, datos);
return true
}

async function AppActualizar(rutaArchivo, peticion) {
    consola.log("Recieved PUT to ", rutaArchivo);
const idSolicitud = parseInt(peticion.params.id);
if (!idSolicitud || idSolicitud < 1) {
        consola.log("No id for reference");
return false;
}
const datos = await LeerDatos(rutaArchivo);
const solicitud = peticion.body;
const indice = datos.findIndex(obj => obj.id === idSolicitud);
if (indice < 0) {
        consola.log("Invalid id: Index", indice);
return false;
}
    consola.log("Modifiyng data...");
for (const valor in solicitud) {
if (Object.hasOwn(datos[indice], valor)){
            datos[indice][valor] = solicitud[valor];
}
else {
            consola.log("Invalid entry:", valor, solicitud[valor]);
}
}
await GuardarDatos(rutaArchivo, datos);
return true;
}

async function AppEliminar(rutaArchivo, peticion){
    consola.log("Recieved DELETE for", rutaArchivo);
const idSolicitud = parseInt(peticion.params.id);
if (!idSolicitud) {
        consola.log("Invalid index");
return false;
}
const datos = await LeerDatos(rutaArchivo);
const indice = datos.findIndex(u => u.id === idSolicitud);
if (indice < 0) {
        consola.log('Invalid index');
return false;
}
    datos.splice(indice, 1);
await GuardarDatos(rutaArchivo, datos);
return true;
}
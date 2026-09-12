'use strict';
const console = require('console');
const express = require('express');
const fs = require('fs/promises');
const path = require('path');
const { isNumberObject } = require('util/types');

const APP = express();
const PATIENT_INFO = path.resolve("/home/dera/.temp/bmi-hospital-data/patient_data.json");
const DOCTOR_INFO = path.resolve("/home/dera/.temp/bmi-hospital-data/doctor_data.json");
const REGISTRY_INFO = path.resolve("/home/dera/.temp/bmi-hospital-data/register.json");
const PATIENTS_PATH = "/patients";
const DOCTORS_PATH = "/doctors";
const REGISTRY_PATH = "/registry";

const PORT = 46033;

APP.use(express.json());

async function ReadData(filepath){
    console.log(`Reading ${filepath}`);
    
    try {
        const data = await fs.readFile(filepath, 'utf-8');
        return JSON.parse(data || "[]");
    }

    catch (err) {
        console.log(`Unable to read`);
        return [];
    } 
}


async function SaveData(filepath, data) {
        console.log(`Saving to ${filepath}`);
        
        await fs.writeFile(filepath, JSON.stringify(data, null, 1), 'utf-8');
    }


async function AppGet(req, res, filepath){
    console.log(`Get ${filepath}`);
    
    const data = await ReadData(filepath) || [];
    res.json(data);
}


//It's not necessary to pass an id through the body, the function handles it automatically. If id is passed, it's ignored and overwriten
async function AppPost(req, filepath){
    console.log(`Recieved POST to ${filepath}`);
    
    const request = req.body; //type object
    const data = await ReadData(filepath);

    if (!request.id){
        request.id = 0;
    }
    
    if (data.length > 0 && !Object.keys(data[0]).every((key) => Object.hasOwn(request, key))) {
        console.error(`Expected structure: \n ${Object.keys(data[0])}\n  Request body: ${request}`);
        return false;
    }
    
    const new_id = Math.max(0, ...data.map((t) => t.id )) + 1; //autoincrement ifg

    if (isNaN(new_id)){
        console.log("Error: expected type of number.");
        return false;
    }
    
    request.id = new_id;

    data.push(request);
    await SaveData(filepath, data);
    
    return true
}


async function AppPut(filepath, req) {
    console.log("Recieved PUT to ", filepath);
    const request_id = parseInt(req.params.id);

    if (!request_id || request_id < 1) {
        console.log("No id for reference");
        return false;
    }

    const data = await ReadData(filepath);
    const request = req.body;

    const index = data.findIndex(obj => obj.id === request_id);

    if (index < 0) {
        console.log("Invalid id: Index", index);
        return false;
    }

    console.log("Modifiyng data...");
    for (const value in request) {
        if (Object.hasOwn(data[index], value)){
            data[index][value] = request[value];
        }
        else {
            console.log("Invalid entry:", value, request[value]);
        }
    }

    await SaveData(filepath, data);
    return true;
}


async function AppDelete(filepath, req){
    console.log("Recieved DELETE for", filepath);
    const request_id = parseInt(req.params.id);

    if (!request_id) {
        console.log("Invalid index");
        return false;
    }
    
    const data = await ReadData(filepath);
    const index = data.findIndex(u => u.id === request_id);

    if (index < 0) {
        console.log('Invalid index');
        return false;
    }

    data.splice(index, 1);
    await SaveData(filepath, data);

    return true;
}






APP.listen(PORT, () => {
    console.log(`Running bmi DB on http://localhost:${PORT}`); } );

APP.get('/', (req, res) => { 
    res.send(`<p>BMI calculator database for bmi-hospital,welcome.</p>\
        <a href='http:localhost:${PORT}${PATIENTS_PATH}'>Ver pacientes</a>\
        `
    ); } );





//patients
APP.get(PATIENTS_PATH, async (req, res) => { await AppGet(req, res, PATIENT_INFO); } );


APP.post(PATIENTS_PATH, async (req, res) => {
    result = await AppPost(req, PATIENT_INFO);
    if (!result) {
        res.status(400).json({ error: 'All fields must be filled' }); }

    else {
        res.status(201).json({
            message: 'New patient registered',
            });
        }
    }
);


APP.put(PATIENTS_PATH + '/:id', async (req, res) => {
    result = AppPut(PATIENT_INFO, req);

    if (!result) {
        res.status(404).json({ error: 'Patient not found' });
        return;
    }
    else {
        res.json({
        message: 'Updated patient info', });
    }
});


APP.delete(PATIENTS_PATH + '/:id', async (req, res) => {
    await AppDelete(PATIENT_INFO, req);
    
    if (!result) {
        res.status(404).json({ error: 'Patient not found' });
    }
    else {
        res.json({
        message: 'Deleted patient'});
    }
});





//doctors
APP.get(DOCTORS_PATH, async (req, res) => { await AppGet(req, res, DOCTOR_INFO); } );

APP.post(DOCTORS_PATH, async (req, res) => {
    result = await AppPost(req, DOCTOR_INFO);
    if (!result) {
        res.status(400).json({ error: 'All fields must be filled' }); }

    else {
        res.status(201).json({
            message: 'New doctor registered',
            });
        }
    }
);


APP.put(DOCTORS_PATH + '/:id', async (req, res) => {
    result = AppPut(DOCTOR_INFO, req);

    if (!result) {
        res.status(404).json({ error: 'Doctor not found' });
        return;
    }
    else {
        res.json({
        message: 'Updated doctor info', });
    }
});


APP.delete(DOCTORS_PATH + '/:id', async (req, res) => {
    await AppDelete(DOCTOR_INFO, req);
    
    if (!result) {
        res.status(404).json({ error: 'Doctor not found' });
    }
    else {
        res.json({
        message: 'Deleted doctor'});
    }
});






//registry
APP.get(REGISTRY_PATH, async (req, res) => { await AppGet(req, res, REGISTRY_INFO); } );

APP.post(REGISTRY_PATH, async (req, res) => {
    if (!req.body.doctor || !req.body.patient || !req.body.date || !req.body.site){
        res.status(400).json({ error: 'All fields must be filled' });
        return
   }

    result = await AppPost(req, REGISTRY_INFO);
    if (!result) {
        res.status(400).json({ error: 'All fields must be filled' }); }

    else {
        res.status(201).json({
            message: 'New entry registered',
            });
        }
    }
);


APP.put(REGISTRY_PATH + '/:id', async (req, res) => {
    result = AppPut(REGISTRY_INFO, req);

    if (!result) {
        res.status(404).json({ error: 'No entry found' });
        return;
    }
    else {
        res.json({
        message: 'Updated entry info', });
    }
});


APP.delete(REGISTRY_PATH + '/:id', async (req, res) => {
    await AppDelete(REGISTRY_INFO, req);
    
    if (!result) {
        res.status(404).json({ error: 'Entry not found' });
    }
    else {
        res.json({
        message: 'Deleted entry'});
    }
});


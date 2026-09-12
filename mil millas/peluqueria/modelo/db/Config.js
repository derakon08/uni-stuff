require('dotenv').config();

const requiredEnvVars = ['DB_HOST','DB_USER','DB_PASSWORD','DB_NAME','PORT'];

requiredEnvVars.firEach((key) => {
    if (!process.env[key]) {
        console.warn("Unknown key, no process.");
    }
});

const dbConfig = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
}

module.exports = dbConfig;
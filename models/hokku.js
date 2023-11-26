const path = require('path');
const { Pool } = require('pg');

require('dotenv').config({
    override: true,
    path: path.join(__dirname, '../development.env')
});

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
});

module.exports = pool;
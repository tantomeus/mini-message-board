const pool = require('../models/hokku');

function getAllHokku(req, res) {
    pool.query('SELECT * FROM hokku', (error, results) => {
        if (error) throw error;
        res.status(200).render('index', {hokku: results.rows});
    });
}

function addHokku(req, res) {
    const {text, author} = req.body;

    pool.query('INSERT INTO hokku (text, author, created_at) VALUES ($1, $2, CURRENT_TIMESTAMP)', [text, author], (error, results) => {
        if (error) throw error;
        res.redirect("/");
    });
}

module.exports = {getAllHokku, addHokku};
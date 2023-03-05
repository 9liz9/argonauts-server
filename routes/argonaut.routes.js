const router = require('express').Router();

const Argonaut = require('../models/Argonaut.model');

// POST /api/crew - Creates a new argonaut
router.post('/list', (req, res, next) => {
    const {name} = req.body;

    Argonaut.create({name})
    .then(response => res.json(response))
    .catch(err => res.status(500).json({
        message: "error creating a new argonaut",
        error: err
    }));
});

// GET /api/crew - Get list of argonauts
router.get('/list', (req, res, next) => {
    Argonaut.find()
    .then(allArgonauts => res.json(allArgonauts))
    .catch(err => {
        console.log("error getting list of the argonauts...", err);
        res.status(500).json({
            message: "error getting list of the argonauts",
            error: err
        })
    });
});

module.exports = router;
const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/', (req, res, next) => {
    req.params.projects = projects;
    res.render('index', {projects: req.params.projects});
})


module.exports = router;
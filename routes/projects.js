const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

router.get('/:id', (req, res) => {
    req.params.projects = projects;
    res.render('project', {
        projects: req.params.projects,
        id : req.params.id
    });
})


module.exports = router;
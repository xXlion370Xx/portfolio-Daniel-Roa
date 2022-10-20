const expres = require('express');
const router = expres.Router();

/*
* response index page
*/

router.get('/', (req, res, next) => {
    res.render('index', { title: "Daniel Roa - Home" });
})

router.get('/skills', (req, res, next) => {
    res.render('skills', { title: "Daniel Roa - Skills" });
})

router.get('/about', (req, res, next) => {
    res.render('about', { title: "Daniel Roa - About" });
})

router.get('/education', (req, res, next) => {
    res.send('Working on page education');
})

router.get('/contact', (req, res, next) => {
    res.render('contact', { title: "Daniel Roa - Contacto" });
})
module.exports = router;
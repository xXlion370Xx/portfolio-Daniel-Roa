const expres = require('express');
const router = expres.Router();

/*
* response index page
*/

router.get('/', (req, res, next) => {
    res.render('index', { title: "Daniel Roa" })
})

router.get('/skills', (req, res, next) => {
    res.render('skills', { title: "Daniel Roa - Skills" })
})

router.get('/about', (req, res, next) => {
    res.send('Working on page about');
})

router.get('/education', (req, res, next) => {
    res.send('Working on page education');
})

module.exports = router;
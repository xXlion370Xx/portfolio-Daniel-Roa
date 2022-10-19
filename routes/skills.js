var express = require('express');
var router = express.Router();

/* Response get */
router.get('/', (req, res, next) => {
    res.render('skills', { tittle: "Daniel Roa - Habilidades" });
})

module.exports = router;
var express = require('express');
var router = express.Router();

var renderData = {
  title: "Pokémon Damage Calculator"
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('calc', renderData);
});

module.exports = router;

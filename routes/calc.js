var express = require('express');
var router = express.Router();

const allNatures = [
  "hardy",    // 0
  "docile",   // 1
  "bashful",  // 2
  "quirky",   // 3
  "serious",  // 4
  "lonely",   // 5
  "adamant",  // 6
  "naughty",  // 7
  "brave",    // 8
  "bold",     // 9
  "impish",   // 10
  "lax",      // 11
  "relaxed",  // 12
  "modest",   // 13
  "mild",     // 14
  "rash",     // 15
  "quiet",    // 16
  "calm",     // 17
  "gentle",   // 18
  "careful",  // 19
  "sassy",    // 20
  "timid",    // 21
  "hasty",    // 22
  "jolly",    // 23
  "naive"     // 24
];

const allTypes = [
  "bug",      // 0
  "dark",     // 1
  "dragon",   // 2
  "electric", // 3
  "fairy",    // 4
  "fighting", // 5
  "fire",     // 6
  "flying",   // 7
  "ghost",    // 8
  "grass",    // 9
  "ground",   // 10
  "ice",      // 11
  "normal",   // 12
  "poison",   // 13
  "psychic",  // 14
  "rock",     // 15
  "steel",    // 16
  "water"     // 17
];

var renderData = {
  title: "Pokémon Calculator",
  natureNames: allNatures,
  typeNames: allTypes
};

/* GET calculator page. */
router.get('/', function(req, res, next) {
  res.render('calc', renderData);
});

module.exports = router;

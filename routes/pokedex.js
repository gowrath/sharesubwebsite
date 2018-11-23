var express = require('express');
var router = express.Router();

var pokedex = require('pokedex-promise-v2');
var dex = new pokedex();

var renderData = {
	title: "Pokedex",
	bulkData: null
}

var errorData = {
	message: "pokemon not found",
	error: null
}

/* GET pokedex page. */
router.get("/", function(req, res, next) {
	res.render("pokedex", renderData);
});

router.get("/:id", function(req, res, next) {
	var pokeId = req.params.id;
	dex.getPokemonByName(pokeId)
	.then(function(response) {
		return response;
	})
	.then(function(data) {
		renderData.title = "Pokedata";
		renderData.bulkData = data;
		res.render("pokedata", renderData);
		console.log("success render pokemon#: " + pokeId);
	})
	.catch(function(error) {
		errorData.error = error;
		res.render("error", errorData);
	})
})

module.exports = router;

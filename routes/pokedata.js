var express = require('express');
var router = express.Router();

var pokedex = require('pokedex-promise-v2');
var dex = new pokedex();

var rawPokemonData = {
	title: null,
	id: null,
	name: null,
	weight: null,
	height: null,
	typeList: null,
	abilityList: null,
	moveList: null,
	moveSetDetails: null,
	statList: null,
	spriteUrl: null
}

var errorData = {
	message: "Pokemon Not Found",
	error: null
}

// Render prepared data on pokemon data page
const renderPokemonData = function(pokemonData, res) {
	res.render("pokedata", pokemonData);
}

// Prepare data from API to be rendered
const preparePokemonData = function(pokemonData, renderFunc, res) {
	//
}

/* GET pokemon data page. */
router.get("/:id", function(req, res, next) {
	var pokeId = req.params.id;
	dex.getPokemonByName(pokeId)
	.then(function(response) {
		return response;
	})
	.then(function(data) {
		preparePokemonData(data, renderPokemonData, res);
	})
	.catch(function(error) {
		errorData.error = error;
		errorData.error.status = 404;
		res.render("error", errorData);
	})
})

module.exports = router;

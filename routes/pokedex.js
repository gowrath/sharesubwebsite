var express = require('express');
var router = express.Router();

var pokedex = require('pokedex-promise-v2');
var dex = new pokedex();

var renderDexData = {
	title: "Data Pokédex",
	pokemonList: null
};

/* GET pokedex page. */
router.get("/", function(req, res, next) {
	dex.getPokemonsList()
	.then(function(response) {
		let pokemonList = [];
		let results = response["results"];
		for (let i in results) {
			let pokemon = {};
			pokemon["name"] = results[i]["name"];
			let url = results[i]["url"];
			pokemon["id"] = url.substring(url.indexOf("pokemon") + 8, url.length - 1).padStart(3, "0");
			pokemonList.push(pokemon);
		}
		renderDexData.pokemonList = pokemonList.slice(0, pokemonList.length - 147);
		res.render("pokedex", renderDexData);
	})
	.catch(function(error) {
		console.log(error);
	})
});

module.exports = router;

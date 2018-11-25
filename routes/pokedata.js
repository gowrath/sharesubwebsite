var express = require('express');
var router = express.Router();

var pokedex = require('pokedex-promise-v2');
var dex = new pokedex();

var rawPokemonData = {
	title: "Pokemon Details",
	id: null,
	name: null,
	weight: null,
	height: null,
	exp: null,
	typeList: {},
	abilityList: {},
	statList: {},
	evList: {},
	moveList: [],
	spriteUrl: null,
	artworkUrl: null
}

var errorData = {
	message: "Pokemon Not Found",
	error: null
}

// Get the animated sprite url for a pokemon
const getSpriteUrl = function(id) {
	let _id = id.toString().padStart(3, "0");
	if (id < 722) {
		return "https://pokemon-trainer.com/images/sprite/xyorasani/" + _id + ".gif";
	}
	else {
		return "https://pokemon-trainer.com/images/sprite/sunmoonani/" + _id + ".gif";
	}
}

// Get the large artwork url for a pokemon
const getArtworkUrl = function(id) {
	return "https://raw.githubusercontent.com/shadowxq126/pokemon-artwork/master/official-artwork/" + parseInt(id) + ".png";
}

// Render prepared data on pokemon data page
const renderPokemonData = function(pokemonData, res) {
	res.render("pokedata", pokemonData);
}

// Prepare data from API to be rendered
const preparePokemonData = function(pokemonData, renderFunc, res) {
	rawPokemonData.id = pokemonData["id"];
	rawPokemonData.name = pokemonData["name"];
	rawPokemonData.weight = pokemonData["weight"];
	rawPokemonData.height = pokemonData["height"];
	rawPokemonData.exp = pokemonData["base_experience"];
	rawPokemonData.spriteUrl = getSpriteUrl(pokemonData["id"]);
	rawPokemonData.artworkUrl = getArtworkUrl(pokemonData["id"]);
	// Type(s)
	for (let i in pokemonData["types"]) {
		let typeSlot = pokemonData["types"][i]["slot"].toString();
		let typeName = pokemonData["types"][i]["type"]["name"];
		rawPokemonData.typeList[typeSlot] = typeName;
	}
	// Ability(s)
	for (let i in pokemonData["abilities"]) {
		let abilitySlot = pokemonData["abilities"][i]["slot"].toString();
		let abilityName = pokemonData["abilities"][i]["ability"]["name"];
		rawPokemonData.abilityList[abilitySlot] = abilityName;
	}
	// Stats & EVs
	for (let i in pokemonData["stats"]) {
		let statName = pokemonData["stats"][i]["stat"]["name"];
		let statValue = pokemonData["stats"][i]["base_stat"];
		let evValue = pokemonData["stats"][i]["effort"];
		rawPokemonData.statList[statName] = statValue;
		rawPokemonData.evList[statName] = evValue;
	}
	// Move(s)
	let moveCount = parseInt(pokemonData["moves"].length);
	for (let i in pokemonData["moves"]) {
		let newMove = {};
		let moveName = pokemonData["moves"][i]["move"]["name"];
		dex.getMoveByName(moveName)
		.then(function(response) {
			let moveType = response["type"]["name"];
			let movePower = response["power"];
			let movePP = response["pp"];
			let moveAccuracy = response["accuracy"];
			let movePriority = response["priority"];
			let moveClass = response["damage_class"]["name"];
			let moveEffectChance = response["effect_chance"];
			let moveDescription = response["effect_entries"][0]["short_effect"];
			if (moveDescription.includes("$effect_chance")) {
				moveDescription = moveDescription.replace("$effect_chance", moveEffectChance.toString());
			}
			newMove["name"] = moveName;
			newMove["type"] = moveType;
			newMove["power"] = movePower;
			newMove["pp"] = movePP;
			newMove["accuracy"] = moveAccuracy;
			newMove["priority"] = movePriority;
			newMove["class"] = moveClass;
			newMove["effect_chance"] = moveEffectChance;
			newMove["description"] = moveDescription;
			rawPokemonData.moveList.push(newMove);
			// Check move array and trigger callback
			if (rawPokemonData.moveList.length === moveCount && !rawPokemonData.moveList.includes(undefined)) {
				renderFunc(rawPokemonData, res);
			}
		})
		.catch(function(error) {
			console.log(error);
		})
	}
}

/* GET pokemon data page. */
router.get("/:id", function(req, res, next) {
	var pokeId = parseInt(req.params.id);
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

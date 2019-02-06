var express = require('express');
var router = express.Router();

var pokedex = require('pokedex-promise-v2');
var dex = new pokedex();

const itemCategoryList = ["effort-drop", "medicine", "in-a-pinch", "picky-healing", "type-protection",
	"special-balls", "standard-balls", "apricorn-balls", "stat-boosts", "healing", "status-cures",
	"pp-recovery", "revival", "evolution", "spelunking", "vitamins", "held-items", "choice",
	"effort-training", "bad-held-items", "training", "species-specific", "type-enhancement"
];

const categoryCount = itemCategoryList.length;

// Array to hold completion flags for API calls
var ApiFlags = [];

var renderItemsData = {
	title: "Game Items Data",
	itemsData: {}
};

// Generate the sprite url for each item
const getItemSpriteUrl = function(name) {
	let serebiiName = name.split("-").join("");
	serebiiName = serebiiName.toLowerCase();
	if (name === "never-melt-ice") {
		serebiiName = "never-meltice";
	}
	else if (name === "x-sp-atk") {
		serebiiName = "xsp.atk";
	}
	else if (name === "x-sp-def") {
		serebiiName = "xsp.def";
	}
	else if (name === "kings-rock") {
		serebiiName = "king'srock";
	}
	else if (name === "exp-share") {
		serebiiName = "exp.share";
	}
	else if (name === "up-grade") {
		serebiiName = "up-grade";
	}
	else if (name === "luminous-moss") {
		return "https://cdn.bulbagarden.net/upload/6/61/Dream_Luminous_Moss_Sprite.png";
	}
	else if (name === "super-repel") {
		return "/images/super-repel.png";
	}
	else if (name === "roseli-berry") {
		return "https://cdn.bulbagarden.net/upload/a/a0/Dream_Roseli_Berry_Sprite.png";
	}
	return "https://www.serebii.net/itemdex/sprites/pgl/" + serebiiName + ".png";
};

const formatItemName = function(name) {
	let nameArr = name.split("-");
	if (name === "never-melt-ice") {
		return "Never-Melt Ice";
	}
	else if (name === "guard-spec") {
		return "Guard Spec.";
	}
	else if (name === "x-sp-atk") {
		return "X Sp. Atk";
	}
	else if (name === "x-sp-def") {
		return "X Sp. Def";
	}
	else if (name === "kings-rock") {
		return "King's Rock";
	}
	else if (name === "exp-share") {
		return "Exp. Share";
	}
	else if (name === "up-grade") {
		return "Up-Grade";
	}
	else {
		return nameArr.join(" ");
	}
};

// Refine the data to eliminate certain elements
const refineItemsData = function() {
	let refineCategory1 = renderItemsData["itemsData"]["held-items"];
	for (let i in refineCategory1) {
		if (refineCategory1[i]["name"] === "pass orb") {
			refineCategory1.splice(i, 1);
		}
	}
};

/* GET items page. */
router.get("/", function(req, res, next) {
	ApiFlags = [];
	renderItemsData["itemsData"] = {};
	for (let i in itemCategoryList) {
		let categoryName = itemCategoryList[i];
		renderItemsData["itemsData"][categoryName] = [];
		dex.getItemCategoryByName(itemCategoryList[i])
			.then(function(response) {
				let itemList = response["items"];
				let itemsCount = itemList.length;
				for (let j in itemList) {
					let newItem = {};
					let itemName = itemList[j]["name"];
					dex.getItemByName(itemName)
						.then(function(data) {
							let itemRealName = formatItemName(itemName);
							let itemSpriteUrl = getItemSpriteUrl(itemName);
							let itemDescription = data["effect_entries"][0]["short_effect"];
							let itemID = data["id"];
							newItem["name"] = itemRealName;
							newItem["spriteUrl"] = itemSpriteUrl;
							newItem["description"] = itemDescription;
							newItem["id"] = itemID;
							renderItemsData["itemsData"][categoryName].push(newItem);
							if (renderItemsData["itemsData"][categoryName].length === itemsCount && !renderItemsData["itemsData"][categoryName].includes(undefined)) {
								renderItemsData["itemsData"][categoryName].sort(function(a, b) {
									return parseInt(a["id"]) - parseInt(b["id"]);
								})
								ApiFlags.push(1);
								if (ApiFlags.length === categoryCount) {
									// refine and render
									refineItemsData();
									res.render("items", renderItemsData);
								}
							}
						})
				}
			})
	}
});

module.exports = router;

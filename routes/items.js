var express = require('express');
var router = express.Router();

var pokedex = require('pokedex-promise-v2');
var dex = new pokedex();

const itemCategoryList = ["effort-drop", "medicine", "other", "in-a-pinch", "picky-healing", "type-protection",
	"special-balls", "standard-balls", "apricorn-balls", "stat-boosts", "healing", "status-cures",
	"pp-recovery", "revival", "collectibles", "loot", "evolution", "spelunking","vitamins", "held-items",
	"choice", "effort-training", "bad-held-items", "training", "plates", "species-specific", "type-enhancement"
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
	let serebiiName = name.replace("-", "");
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
	return "https://www.serebii.net/itemdex/sprites/pgl/" + serebiiName + ".png";
}

const formatItemName = function(name) {
	let nameArr = name.split("-");
	if (name === "never-melt-ice") {
		return "Never-Melt Ice";
	}
	else if (name === "guard-spec") {
		return "Guard Spec."
	}
	else if (name === "x-sp-atk") {
		return "X Sp. Atk"
	}
	else if (name === "x-sp-def") {
		return "X Sp. Def"
	}
	else {
		return nameArr.join(" ");
	}
}

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
							// render
							res.render("items", renderItemsData);
						}
					}
				})
			}
		})
	}
});

module.exports = router;

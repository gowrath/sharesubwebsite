// Display list of pokemon based on their generation
const showPokemonByGeneration = function(gen) {
	let $allPokemonCells = $(".pokemon-cell");
	$allPokemonCells.addClass("hide");
	switch (parseInt(gen)) {
		case 1:
			$allPokemonCells.slice(0, 151).removeClass("hide");
			break;
		case 2:
			$allPokemonCells.slice(151, 251).removeClass("hide");
			break;
		case 3:
			$allPokemonCells.slice(251, 386).removeClass("hide");
			break;
		case 4:
			$allPokemonCells.slice(386, 493).removeClass("hide");
			break;
		case 5:
			$allPokemonCells.slice(493, 649).removeClass("hide");
			break;
		case 6:
			$allPokemonCells.slice(649, 721).removeClass("hide");
			break;
		case 7:
			$allPokemonCells.slice(721, 802).removeClass("hide");
			break;
		default:
			break;
	}
}

$(function() {
	// Return search result
	$("#pokedex-search-button").on("click", function() {
		let pokemonIndex = $("#pokedex-search-box").val().trim();
		if (pokemonIndex) {
			let pokemonUrl = "/pokedata/" + pokemonIndex;
			window.open(pokemonUrl);
		}
	})

	// Clear search result
	$("#clear-search-box").on("click", function() {
		$("#pokedex-search-box").val(null);
	})

	// Initialize floating action button
	var $floatingBtn = $('.fixed-action-btn');
	M.FloatingActionButton.init($floatingBtn, {
		hoverEnabled: false
	});
	
	// Switch generation
	showPokemonByGeneration(1);
	$("#generation-list").find("a").on("click", function() {
		let gen = parseInt($(this).data("gen"));
		$(this).closest("ul").find(".disabled").removeClass("disabled");
		$(this).addClass("disabled");
		showPokemonByGeneration(gen);
		$("#generation-id").text(gen);
	})
});
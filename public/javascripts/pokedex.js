$(function() {
	$("#pokedex-search-button").on("click", function() {
		let pokemonIndex = $("#pokedex-search-box").val().trim();
		let pokemonUrl = "/pokedex/" + pokemonIndex;
		window.location.href = pokemonUrl;
	})
});
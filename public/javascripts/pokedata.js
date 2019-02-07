$(function() {
	// Handle previous and next buttons
	var pkId = $("#hidden-id").text();
	var $prevBtn = $("#prev");
	var $nextBtn = $("#next");
	// Apply Disable
	if (pkId == "001") {
		$prevBtn.addClass("disabled");
	}
	if (pkId == "802") {
		$nextBtn.addClass("disabled");
	}
	// Apply Pulse
	$prevBtn.mouseenter(function() {
		$(this).addClass("pulse");
	})
	$nextBtn.mouseenter(function() {
		$(this).addClass("pulse");
	})
	$prevBtn.mouseleave(function() {
		$(this).removeClass("pulse");
	})
	$nextBtn.mouseleave(function() {
		$(this).removeClass("pulse");
	})
	// Add click events
	$prevBtn.click(function() {
		let newId = parseInt(pkId) - 1;
		newId = newId.toString().padStart(3, "0");
		window.location.href = "/pokedata/" + newId;
	})
	$nextBtn.click(function() {
		let newId = parseInt(pkId) + 1;
		newId = newId.toString().padStart(3, "0");
		window.location.href = "/pokedata/" + newId;
	})
});

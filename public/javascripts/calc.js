// Helper functions
const generateTypeItem = function(type) {
	let $typeItem = $(`<div class="type-data-item ${type}"></div>`);
	$typeItem.html(`${type}`);
	return $typeItem;
};

const updateTypeContent = function(type) {
	let $content = $("#type-content");
	if (type === null) {
		$("#type-content").empty();
	} else {
		$("#type-content").empty();
		// Heading
		let $typeHead = $(`<h4 class="valign-wrapper"></h4>`);
		$typeHead.html(`<span>${type}</span>`);
		$content.append($typeHead);
		// Data
		let $typeData = $(`<div id="type-data"></div>`);
		let $seTitle = $(`<div class="type-data-title">Super Effective against:</div>`);
		let $seData = $(`<div class="type-data-list"></div>`);
		let seList = typesData[type]["offense"]["se"];
		if (seList.length === 0) {
			$seData.append(generateTypeItem("none"));
		} else {
			seList.forEach((typeNum) => {
				$seData.append(generateTypeItem(allTypes[typeNum]));
			})
		}

		let $neTitle = $(`<div class="type-data-title">Not Very Effective against:</div>`);
		let $neData = $(`<div class="type-data-list"></div>`);
		let neList = typesData[type]["offense"]["ne"];
		if (neList.length === 0) {
			$neData.append(generateTypeItem("none"));
		} else {
			neList.forEach((typeNum) => {
				$neData.append(generateTypeItem(allTypes[typeNum]));
			})
		}

		let $naTitle = $(`<div class="type-data-title">Does not Affect:</div>`);
		let $naData = $(`<div class="type-data-list"></div>`);
		let naList = typesData[type]["offense"]["na"];
		if (naList.length === 0) {
			$naData.append(generateTypeItem("none"));
		} else {
			naList.forEach((typeNum) => {
				$naData.append(generateTypeItem(allTypes[typeNum]));
			})
		}

		let $reTitle = $(`<div class="type-data-title">Resist against:</div>`);
		let $reData = $(`<div class="type-data-list"></div>`);
		let reList = typesData[type]["defense"]["re"];
		if (reList.length === 0) {
			$reData.append(generateTypeItem("none"));
		} else {
			reList.forEach((typeNum) => {
				$reData.append(generateTypeItem(allTypes[typeNum]));
			})
		}

		let $weTitle = $(`<div class="type-data-title">Weak to: </div>`);
		let $weData = $(`<div class="type-data-list"></div>`);
		let weList = typesData[type]["defense"]["we"];
		if (weList.length === 0) {
			$weData.append(generateTypeItem("none"));
		} else {
			weList.forEach((typeNum) => {
				$weData.append(generateTypeItem(allTypes[typeNum]));
			})
		}

		let $imTitle = $(`<div class="type-data-title">Immune to:</div>`);
		let $imData = $(`<div class="type-data-list"></div>`);
		let imList = typesData[type]["defense"]["im"];
		if (imList.length === 0) {
			$imData.append(generateTypeItem("none"));
		} else {
			imList.forEach((typeNum) => {
				$imData.append(generateTypeItem(allTypes[typeNum]));
			})
		}

		$typeData.append($seTitle).append($seData)
			.append($neTitle).append($neData)
			.append($naTitle).append($naData)
			.append($reTitle).append($reData)
			.append($weTitle).append($weData)
			.append($imTitle).append($imData);
		$content.append($typeData);
	}
};

const hpFormula = function(level, bv, iv, ev) {
	return Math.floor(
		((2 * bv + iv + ev / 4) * level) / 100 + level + 10
	);
};

const nonHpFormula = function(level, bv, iv, ev, nature = 1) {
	return Math.floor(
		nature * Math.floor(
			((2 * bv + iv + ev / 4) * level) / 100 + 5
		)
	);
};

const calculateStats = function() {
	$(".ev-field").each(function() {
		let $evField = $(this);
		if ($evField.val() % 4 != 0) {
			$evField.val(Math.floor($evField.val() / 4) * 4);
			if (($evField.val() >= 0) && ($evField.val() <= 252)) {
				$evField.removeClass("invalid").addClass("valid");
			}
		}
	});
	let $statFields = $(".stat-value");
	$statFields.each(function(index, statField) {
		let valid = true;
		let $statDisplay = $(statField).find(".stat-display");
		let statName = $statDisplay.attr("data-stat");
		$(statField).parent().find(".validate").each(function() {
			if (!$(this).hasClass("valid")) {
				$(this).addClass("invalid");
				valid = false;
			} else {
				$(this).removeClass("invalid");
			}
		});
		let baseId = `base-${statName}`;
		let bv = parseInt($(`#${baseId}`).val());
		let ivId = `iv-${statName}`;
		let iv = parseInt($(`#${ivId}`).val());
		let evId = `ev-${statName}`;
		let ev = parseInt($(`#${evId}`).val());
		if (valid) {
			let statResult;
			if (statName === "hp") {
				statResult = hpFormula(selectedLevel, bv, iv, ev);
			} else {
				let nature = parseFloat(naturesData[selectedNature][index - 1]);
				statResult = nonHpFormula(selectedLevel, bv, iv, ev, nature);
			}
			$statDisplay.html(`${statResult}`);
		} else {
			$statDisplay.html(0);
		}
	});
};

const clearStats = function() {
	$(".stat-display").html(0);
	$(".stat-data").find("input").removeClass("valid").removeClass("invalid").val(null);
	$(".stat-data").find("label").removeClass("active");
};

const clearDamage = function() {
	// Clear results
	$("#min-percent").text("0");
	$("#max-percent").text("0");
	$("#min-value").text("0");
	$("#max-value").text("0");
	$("#min-remain").text("0");
	$("#max-remain").text("0");
	// Clear number inputs
	$(".category-box").find(`input[type="number"]`)
		.val(null)
		.removeClass("valid")
		.removeClass("invalid")
		.siblings().removeClass("active");
	// Clear dropdowns
	$("#mv-type").val("");
	$("#dmg-type").val("");
	$("#atk-buff").val("0");
	$("#atk-ability").val("none");
	$("#atk-item").val("none");
	$("#weather").val("none");
	$("#custom-mod").val("1");
	$("#pk-type-1").val("");
	$("#pk-type-2").val("");
	$("#def-buff").val("0");
	$("#def-ability").val("none");
	$("#def-item").val("none");
	$("#field").val("none");
	$("#def-screen").val("none");
	$("select").formSelect();
	// Reset checkboxes
	$(`input[type="checkbox"]`).prop("checked", false);
	$("#hp-full").prop("checked", true);
};

const evaluateDamage = function() {
	// Helper variables
	let valid = true;
	// Grab all inputs
	let $level = $("#dmg-level");
	let $attack = $("#eff-atk");
	let $power = $("#power");
	let $mvType = $("#mv-type");
	let $dmgType = $("#dmg-type");
	let $stab = $("#stab");
	let $crit = $("#crit");
	let $z = $("#z-move");
	let $foresignt = $("#foresignt");
	let $miracle = $("#miracle-eye");
	let $typeItem = $("#type-buff-item");
	let $attackBuff = $("#atk-buff");
	let $attackAbility = $("#atk-ability");
	let $attackItem = $("#atk-item");
	let $weather = $("#weather");
	let $mod = $("#custom-mod");
	let $hp = $("#eff-hp");
	let $defense = $("#eff-def");
	let $fullHp = $("#full-hp");
	let $pkType1 = $("#pk-type-1");
	let $pkType2 = $("#pk-type-2");
	let $eviolite = $("#eviolite");
	let $ailment = $("#def-ailment");
	let $hpFull = $("#hp-full");
	let $protect = $("#protect");
	let $endure = $("#endure");
	let $typeBerry = $("#type-berry");
	let $defenseBuff = $("#def-buff");
	let $defenseAbility = $("#def-ability");
	let $defenseItem = $("#def-item");
	let $field = $("#field");
	let $screen = $("#def-screen");
	// Declare variables
	let level;
	let attack;
	let power;
	let mvType;
	let dmgType;
	let stab = $stab.prop("checked");
	let crit = $crit.prop("checked");;
	let z = $z.prop("checked");
	let foresignt = $foresignt.prop("checked");
	let miracle = $miracle.prop("checked");
	let typeItem = $typeItem.prop("checked");
	let attackBuff = $attackBuff.val();
	let attackAbility = $attackAbility.val();
	let attackItem = $attackItem.val();
	let weather = $weather.val();
	let mod = parseFloat($mod.val());
	let hp;
	let defense;
	let fullHp;
	let pkType1;
	let pkType2 = $pkType2.val();
	let eviolite = $eviolite.prop("checked");
	let ailment = $ailment.prop("checked");
	let hpFull = $hpFull.prop("checked");
	let protect = $protect.prop("checked");
	let endure = $endure.prop("checked");
	let typeBerry = $typeBerry.prop("checked");
	let defenseBuff = $defenseBuff.val();
	let defenseAbility = $defenseAbility.val();
	let defenseItem = $defenseItem.val();
	let field = $field.val();
	let screen = $screen.val();
	// Validate required fields
	if ($level.hasClass("valid")) {
		level = parseInt($level.val());
	} else {
		valid = false;
		$level.addClass("invalid");
	}
	if ($attack.hasClass("valid")) {
		attack = parseInt($attack.val());
	} else {
		valid = false;
		$attack.addClass("invalid");
	}
	if ($power.hasClass("valid")) {
		power = parseInt($power.val());
	} else {
		valid = false;
		$power.addClass("invalid");
	}
	if ($hp.hasClass("valid")) {
		hp = parseInt($hp.val());
	} else {
		valid = false;
		$hp.addClass("invalid");
	}
	if ($defense.hasClass("valid")) {
		defense = parseInt($defense.val());
	} else {
		valid = false;
		$defense.addClass("invalid");
	}
	if ($fullHp.hasClass("valid")) {
		fullHp = parseInt($fullHp.val());
	} else {
		valid = false;
		$fullHp.addClass("invalid");
	}
	if ($mvType.val()) {
		mvType = $mvType.val();
	} else {
		valid = false;
	}
	if ($dmgType.val()) {
		dmgType = $dmgType.val();
	} else {
		valid = false;
	}
	if ($pkType1.val()) {
		pkType1 = $pkType1.val();
	} else {
		valid = false;
	}
	// Validate types & items
	if (pkType1 === pkType2) {
		valid = false;
	}
	if (typeItem) {
		if (attackItem !== "none") {
			valid = false;
		}
	}
	if (typeBerry) {
		if (defenseItem !== "none") {
			valid = false;
		}
	}
	if (valid) {
		let finalPower = getFinalPower(
			power,
			z,
			mvType,
			attackAbility,
			defenseAbility,
			weather
		);
		let finalAttack = getFinalAttack(
			attack,
			crit,
			dmgType,
			attackBuff,
			attackAbility,
			attackItem,
			weather,
			defenseAbility
		);
		let finalDefense = getFinalDefense(
			defense,
			crit,
			dmgType,
			eviolite,
			ailment,
			defenseBuff,
			attackAbility,
			defenseAbility,
			defenseItem,
			weather,
			pkType1,
			pkType2
		);
		let finalTypeMod = getTypeMod(
			mvType,
			pkType1,
			pkType2,
			z,
			foresignt,
			miracle,
			attackAbility,
			attackItem,
			weather,
			defenseAbility,
			defenseItem,
			field
		);
		let finalMod = getFinalMod(
			stab,
			crit,
			z,
			dmgType,
			hpFull,
			attackAbility,
			typeItem,
			attackItem,
			protect,
			typeBerry,
			defenseItem,
			defenseAbility,
			screen,
			finalTypeMod,
			mod
		);
		let finalDmgRange = calcFinalDamageRange(
			level,
			finalPower,
			finalAttack,
			finalDefense,
			finalMod,
			hpFull,
			hp,
			fullHp,
			endure,
			defenseItem,
			defenseAbility,
			attackAbility
		);
		// Update page
		$("#min-percent").text(finalDmgRange["minPercent"]);
		$("#max-percent").text(finalDmgRange["maxPercent"]);
		$("#min-value").text(finalDmgRange["minValue"]);
		$("#max-value").text(finalDmgRange["maxValue"]);
		$("#min-remain").text(finalDmgRange["minRemain"]);
		$("#max-remain").text(finalDmgRange["maxRemain"]);
	} else {
		$("#error").slideDown(500).delay(2500).slideUp(500);
	}
};

var selectedType = null;
var selectedNature = "hardy";
var selectedLevel = 51;

document.querySelector(".nature-btn").classList.add("selected");
document.querySelector(".nature-btn").classList.add("z-depth-3");

// Active events
$(function() {
	$("select").formSelect();

	$(".type-symbol-item").on("click", function() {
		if ($(this).hasClass("selected")) {
			$(this).removeClass("selected");
			selectedType = null;
			$("#type-info").slideUp(1500, function() {
				updateTypeContent(selectedType);
			});
			return;
		};
		$(this).siblings().removeClass("selected");
		$(this).addClass("selected");
		selectedType = $(this).attr("class").split(" ")[1];
		updateTypeContent(selectedType);
		$("#type-info").slideDown(1500);
	});

	$(".nature-btn").on("click", function() {
		$(this).parent().siblings().children().removeClass("selected").addClass("z-depth-1").removeClass("z-depth-3");
		$(this).addClass("selected").removeClass("z-depth-1").addClass("z-depth-3");
		selectedNature = $(this).attr("data-content");
	});

	$("#level").on("change", function() {
		let level = parseInt($(this).val());
		selectedLevel = level;
		$("#level-display").find("span").html(level);
	});
	$("#max-ivs").on("click", function() {
		$(".iv-field").val(31).addClass("valid").siblings().addClass("active");
	});
	$("#max-evs").on("click", function() {
		$(".ev-field").val(252).addClass("valid").siblings().addClass("active");
	});
	$("#calc-stats")
		.on("click", calculateStats)
		.on("mouseenter", function() {
			$(this).addClass("pulse");
		})
		.on("mouseleave", function() {
			$(this).removeClass("pulse");
		});
	$("#clear-stats").on("click", clearStats);

	$("#clear-dmg")
		.on("mouseenter", function() {
			$(this).addClass("pulse");
		})
		.on("mouseleave", function() {
			$(this).removeClass("pulse");
		})
		.on("click", clearDamage);

	$("#eva-dmg")
		.on("mouseenter", function() {
			$(this).addClass("pulse");
		})
		.on("mouseleave", function() {
			$(this).removeClass("pulse");
		})
		.on("click", evaluateDamage);
});

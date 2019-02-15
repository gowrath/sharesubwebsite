// Static data
const naturesData = {
  "hardy": [1, 1, 1, 1, 1],
  "docile": [1, 1, 1, 1, 1],
  "bashful": [1, 1, 1, 1, 1],
  "quirky": [1, 1, 1, 1, 1],
  "serious": [1, 1, 1, 1, 1],
  "lonely": [1.1, 0.9, 1, 1, 1],
  "adamant": [1.1, 1, 0.9, 1, 1],
  "naughty": [1.1, 1, 1, 0.9, 1],
  "brave": [1.1, 1, 1, 1, 0.9],
  "bold": [0.9, 1.1, 1, 1, 1],
  "impish": [1, 1.1, 0.9, 1, 1],
  "lax": [1, 1.1, 1, 0.9, 1],
  "relaxed": [1, 1.1, 1, 1, 0.9],
  "modest": [0.9, 1, 1.1, 1, 1],
  "mild": [1, 0.9, 1.1, 1, 1],
  "rash": [1, 1, 1.1, 0.9, 1],
  "quiet": [1, 1, 1.1, 1, 0.9],
  "calm": [0.9, 1, 1, 1.1, 1],
  "gentle": [1, 0.9, 1, 1.1, 1],
  "careful": [1, 1, 0.9, 1.1, 1],
  "sassy": [1, 1, 1, 1.1, 0.9],
  "timid": [0.9, 1, 1, 1, 1.1],
  "hasty": [1, 0.9, 1, 1, 1.1],
  "jolly": [1, 1, 0.9, 1, 1.1],
  "naive": [1, 1, 1, 0.9, 1.1]
};

const allTypes = [
  "bug",      // 0
  "dark",     // 1
  "dragon",   // 2
  "electric", // 3
  "fairy",    // 4
  "fighting", // 5
  "fire",     // 6
  "flying",   // 7
  "ghost",    // 8
  "grass",    // 9
  "ground",   // 10
  "ice",      // 11
  "normal",   // 12
  "poison",   // 13
  "psychic",  // 14
  "rock",     // 15
  "steel",    // 16
  "water"     // 17
];

const typesData = {
  "bug": {
    "offense": {
      "se": [1, 9, 14],
      "ne": [4, 5, 6, 7, 8, 13, 16],
      "na": []
    },
    "defense": {
      "re": [5, 8, 10],
      "we": [6, 7, 15],
      "im": []
    }
  },
  "dark": {
    "offense": {
      "se": [8, 14],
      "ne": [1, 4, 5],
      "na": []
    },
    "defense": {
      "re": [1, 8],
      "we": [0, 4, 5],
      "im": [14]
    }
  },
  "dragon": {
    "offense": {
      "se": [2],
      "ne": [16],
      "na": [4]
    },
    "defense": {
      "re": [3, 6, 9, 17],
      "we": [2, 4, 11],
      "im": []
    }
  },
  "electric": {
    "offense": {
      "se": [7, 17],
      "ne": [2, 3, 9],
      "na": [10]
    },
    "defense": {
      "re": [3, 7, 16],
      "we": [10],
      "im": []
    }
  },
  "fairy": {
    "offense": {
      "se": [1, 2, 5],
      "ne": [6, 13, 16],
      "na": []
    },
    "defense": {
      "re": [0, 1, 5],
      "we": [13, 16],
      "im": [2]
    }
  },
  "fighting": {
    "offense": {
      "se": [1, 11, 12, 15, 16],
      "ne": [0, 4, 7, 13, 14],
      "na": [8]
    },
    "defense": {
      "re": [0, 1, 15],
      "we": [4, 7, 14],
      "im": []
    }
  },
  "fire": {
    "offense": {
      "se": [0, 9, 11, 16],
      "ne": [2, 6, 15, 17],
      "na": []
    },
    "defense": {
      "re": [0, 4, 6, 9, 11, 16],
      "we": [10, 15, 17],
      "im": []
    }
  },
  "flying": {
    "offense": {
      "se": [0, 5, 9],
      "ne": [3, 15, 16],
      "na": []
    },
    "defense": {
      "re": [0, 5, 9],
      "we": [3, 11, 15],
      "im": [10]
    }
  },
  "ghost": {
    "offense": {
      "se": [8, 14],
      "ne": [1],
      "na": [12]
    },
    "defense": {
      "re": [0, 13],
      "we": [1, 8],
      "im": [5, 12]
    }
  },
  "grass": {
    "offense": {
      "se": [10, 15, 17],
      "ne": [0, 2, 6, 7, 9, 13, 16],
      "na": []
    },
    "defense": {
      "re": [3, 9, 10, 17],
      "we": [0, 6, 7, 11, 13],
      "im": []
    }
  },
  "ground": {
    "offense": {
      "se": [3, 6, 13, 15, 16],
      "ne": [0, 9],
      "na": [7]
    },
    "defense": {
      "re": [13, 15],
      "we": [9, 11, 17],
      "im": [3]
    }
  },
  "ice": {
    "offense": {
      "se": [2, 7, 9, 10],
      "ne": [6, 11, 16, 17],
      "na": []
    },
    "defense": {
      "re": [11],
      "we": [5, 6, 15, 16],
      "im": []
    }
  },
  "normal": {
    "offense": {
      "se": [],
      "ne": [15, 16],
      "na": [8]
    },
    "defense": {
      "re": [],
      "we": [5],
      "im": [8]
    }
  },
  "poison": {
    "offense": {
      "se": [4, 9],
      "ne": [8, 10, 13, 15],
      "na": [16]
    },
    "defense": {
      "re": [0, 4, 5, 9, 13],
      "we": [10, 14],
      "im": []
    }
  },
  "psychic": {
    "offense": {
      "se": [5, 13],
      "ne": [14, 16],
      "na": [1]
    },
    "defense": {
      "re": [5, 14],
      "we": [0, 1, 8],
      "im": []
    }
  },
  "rock": {
    "offense": {
      "se": [0, 6, 7, 11],
      "ne": [5, 10, 16],
      "na": []
    },
    "defense": {
      "re": [6, 7, 12, 13],
      "we": [5, 9, 10, 16, 17],
      "im": []
    }
  },
  "steel": {
    "offense": {
      "se": [4, 11, 15],
      "ne": [3, 6, 16, 17],
      "na": []
    },
    "defense": {
      "re": [0, 2, 4, 7, 9, 11, 12, 14, 15, 16],
      "we": [5, 6, 10],
      "im": [13]
    }
  },
  "water": {
    "offense": {
      "se": [6, 10, 15],
      "ne": [2, 9, 17],
      "na": []
    },
    "defense": {
      "re": [6, 11, 16, 17],
      "we": [3, 9],
      "im": []
    }
  }
};

// Final damage formula
const calcFinalDamageRange = function(
  level,
  hp,
  fullHp,
  hpFull,
  endure,
  attackAbility,
  defenseAbility,
  defenseItem,
  finalPower,
  finalAttack,
  finalDefense,
  finalMods
) {
  let dmgWithoutMods;
  let finalDmgRange = {};
  let finalMinDmg;
  let finalMaxDmg;
  let finalMinMods;
  let finalMaxMods;
  let survive = false;
  let parent = false;

  finalMinMods = Array.from(finalMods);
  finalMinMods[2] = 0.85;
  finalMaxMods = Array.from(finalMods);

  // Check survive
  if (hpFull) {
    if (defenseItem === "focus-sash") {
      survive = true;
    } else if (defenseAbility === "sturdy") {
      if (attackAbility !== "mode-b") {
        survive = true;
      }
    }
  }
  if (attackAbility === "parental-bond") {
    parent = true;
    survive = false;
  }

  // Calculate damage
  dmgWithoutMods = (Math.floor(Math.floor(Math.floor(2 * level / 5 + 2) * finalPower * finalAttack / finalDefense) / 50) + 2);
  finalMinDmg = dmgWithoutMods;
  finalMaxDmg = dmgWithoutMods;

  finalMinMods.forEach((mod) => {
    finalMinDmg = Math.floor(finalMinDmg * mod);
  });
  finalMaxMods.forEach((mod) => {
    finalMaxDmg = Math.floor(finalMaxDmg * mod);
  });
  if (parent) {
    finalMinDmg = Math.floor(finalMinDmg * 1.25);
    finalMaxDmg = Math.floor(finalMaxDmg * 1.25);
  }

  finalDmgRange["minValue"] = finalMinDmg
  finalDmgRange["maxValue"] = finalMaxDmg;
  finalDmgRange["minPercent"] = (finalMinDmg / fullHp * 100).toFixed(1);
  finalDmgRange["maxPercent"] = (finalMaxDmg / fullHp * 100).toFixed(1);
  let minRemain = hp - finalDmgRange["maxValue"];
  let maxRemain = hp - finalDmgRange["minValue"];
  // Fix HP
  if (minRemain <= 0) {
    if (endure || survive) {
      minRemain = 1;
    } else {
      minRemain = 0;
    }
  }
  if (maxRemain <= 0) {
    if (endure || survive) {
      maxRemain = 1;
    } else {
      maxRemain = 0;
    }
  }
  finalDmgRange["minRemain"] = minRemain;
  finalDmgRange["maxRemain"] = maxRemain;
  return finalDmgRange;
};

// Final power formula
const getFinalPower = function(
  power,
  z,
  mvType,
  dmgType,
  typeItem,
  attackAbility,
  attackItem,
  defenseAbility,
  weather,
  field
) {
  let finalPower = power;
  // Apply Z
  if (z) {
    if (finalPower <= 55) {
      finalPower = 100;
    } else if (finalPower === 180) {
      finalPower = 220;
    } else if (finalPower >= 140) {
      finalPower = 200;
    } else {
      switch (finalPower) {
        case 60:
        case 65:
          finalPower = 120;
          break;
        case 70:
        case 75:
          finalPower = 140;
          break;
        case 80:
        case 85:
          finalPower = 160;
          break;
        case 90:
        case 95:
          finalPower = 175;
          break;
        case 100:
          finalPower = 180;
          break;
        case 110:
          finalPower = 185;
          break;
        case 120:
        case 125:
          finalPower = 190;
          break;
        case 130:
          finalPower = 195;
          break;
        default:
      }
    }
  }
  // Apply ability
  switch (attackAbility) {
    case "steelworker":
      if (mvType === "steel") {
        finalPower = Math.floor(finalPower * 1.5);
      }
      break;
    case "water-bubble":
      if (mvType === "water") {
        finalPower = Math.floor(finalPower * 2);
      }
      break;
    case "technician":
      if (finalPower <= 60) {
        finalPower = Math.floor(finalPower * 1.5);
      }
      break;
    case "Aerilate":
    case "galvanize":
    case "pixilate":
    case "refrigerate":
      if (mvType === "normal") {
        if (!z) {
          finalPower = Math.floor(finalPower * 1.2);
        }
      }
      break;
    case "normalize":
      if (!z) {
        finalPower = Math.floor(finalPower * 1.2);
      }
      break;
    case "sand-force":
      if (mvType === "rock" || mvType === "steel" || mvType === "ground") {
        if (weather === "sandstorm") {
          finalPower = Math.floor(finalPower * 1.3);
        }
      }
      break;
    case "dark-aura":
      if (mvType === "dark") {
        if (defenseAbility !== "aura-break") {
          finalPower = Math.floor(finalPower * 1.33);
        } else {
          finalPower = Math.floor(finalPower * 0.75);
        }
      }
      break;
    case "fairy-aura":
      if (mvType === "fairy") {
        if (defenseAbility !== "aura-break") {
          finalPower = Math.floor(finalPower * 1.33);
        } else {
          finalPower = Math.floor(finalPower * 0.75);
        }
      }
      break;
    default:
  }
  // Apply item
  if (typeItem) {
    finalPower = Math.floor(finalPower * 1.2);
  }
  switch (attackItem) {
    case "life-orb":
      finalPower = Math.floor(finalPower * (5324 / 4096));
      break;
    case "muscle-band":
      if (dmgType === "physical") {
        finalPower = Math.floor(finalPower * 1.1);
      }
      break;
    case "wise-glasses":
      if (dmgType === "special") {
        finalPower = Math.floor(finalPower * 1.1);
      }
      break;
    default:
  }
  // Apply field
  switch (field) {
    case "electric":
      if (mvType === "electric") {
        finalPower = Math.floor(finalPower * 1.5);
      }
      break;
    case "grassy":
      if (mvType === "grass") {
        finalPower = Math.floor(finalPower * 1.5);
      }
      break;
    case "psychic":
      if (mvType === "psychic") {
        finalPower = Math.floor(finalPower * 1.5);
      }
      break;
    case "misty":
      if (mvType === "dragon") {
        finalPower = Math.floor(finalPower * 0.5);
      }
      break;
    default:
  }
  return finalPower;
};

// Final attack formula
const getFinalAttack = function(
  attack,
  crit,
  mvType,
  dmgType,
  attackBuff,
  attackAbility,
  attackItem,
  defenseAbility,
  weather
) {
  let finalAttack = attack;
  // Apply ability
  switch (attackAbility) {
    case "double-atk":
      if (dmgType === "physical") {
        finalAttack = Math.floor(finalAttack * 2);
      }
      break;
    case "hustle":
      if (dmgType === "physical") {
        finalAttack = Math.floor(finalAttack * 1.5);
      }
      break;
    case "solar-power":
      if (weather === "sunlight" || weather === "ex-sunlight") {
        if (dmgType === "special") {
          finalAttack = Math.floor(finalAttack * 1.5);
        }
      }
      break;
    case "flower-gift":
      if (weather === "sunlight" || weather === "ex-sunlight") {
        if (dmgType === "physical") {
          finalAttack = Math.floor(finalAttack * 1.5);
        }
      }
      break;
    case "mode-b":
      defenseAbility = "none";
      break;
    default:
  }
  switch (defenseAbility) {
    case "thick-fat":
      if (mvType === "fire" || mvType === "ice") {
        finalAttack = Math.floor(finalAttack * 0.5);
      }
      break;
    default:
  }
  // Apply item
  switch (attackItem) {
    case "choice-band":
      if (dmgType === "physical") {
        finalAttack = Math.floor(finalAttack * 1.5);
      }
      break;
    case "choice-specs":
      if (dmgType === "special") {
        finalAttack = Math.floor(finalAttack * 1.5);
      }
      break;
    default:
  }
  // Apply stat change
  if (defenseAbility === "unaware") {
    // Skip
  } else {
    switch (attackBuff) {
      case "-6":
        if (!crit) {
          finalAttack = Math.floor(finalAttack * 0.25);
        }
        break;
      case "-5":
        if (!crit) {
          finalAttack = Math.floor(finalAttack * (2 / 7));
        }
        break;
      case "-4":
        if (!crit) {
          finalAttack = Math.floor(finalAttack * (1 / 3));
        }
        break;
      case "-3":
        if (!crit) {
          finalAttack = Math.floor(finalAttack * 0.4);
        }
        break;
      case "-2":
        if (!crit) {
          finalAttack = Math.floor(finalAttack * 0.5);
        }
        break;
      case "-1":
        if (!crit) {
          finalAttack = Math.floor(finalAttack * (2 / 3));
        }
        break;
      case "1":
        finalAttack = Math.floor(finalAttack * 1.5);
        break;
      case "2":
        finalAttack = Math.floor(finalAttack * 2);
        break;
      case "3":
        finalAttack = Math.floor(finalAttack * 2.5);
        break;
      case "4":
        finalAttack = Math.floor(finalAttack * 3);
        break;
      case "5":
        finalAttack = Math.floor(finalAttack * 3.5);
        break;
      case "6":
        finalAttack = Math.floor(finalAttack * 4);
        break;
      default:
    }
  }
  return finalAttack;
};

// Final defense formula
const getFinalDefense = function(
  defense,
  crit,
  dmgType,
  pkType1,
  pkType2,
  eviolite,
  ailment,
  attackAbility,
  defenseBuff,
  defenseAbility,
  defenseItem,
  weather
) {
  let finalDefense = defense;
  // Apply ability
  if (attackAbility === "mode-b") {
    defenseAbility = "none";
  }
  switch (defenseAbility) {
    case "fur-coat":
      if (dmgType === "physical") {
        finalDefense = Math.floor(finalDefense * 2);
      }
      break;
    case "flower-gift":
      if (dmgType === "special") {
        if (weather === "sunlight" || weather === "ex-sunlight") {
          finalDefense = Math.floor(finalDefense * 1.5);
        }
      }
      break;
    case "marvel-scale":
      if (ailment) {
        if (dmgType === "physical") {
          finalDefense = Math.floor(finalDefense * 1.5);
        }
      }
      break;
    default:
  }
  // Check for sandstorm
  if (weather === "sandstorm") {
    if (pkType1 === "rock" || pkType2 === "rock") {
      if (dmgType === "special") {
        finalDefense = Math.floor(finalDefense * 1.5);
      }
    }
  }
  // Apply item
  switch (defenseItem) {
    case "assault-vest":
      if (dmgType === "special") {
        finalDefense = Math.floor(finalDefense * 1.5);
      }
      break;
    default:
  }
  // Check eviolite
  if (eviolite) {
    finalDefense = Math.floor(finalDefense * 1.5);
  }
  // Apply stat change
  if (attackAbility === "unaware") {
    // Skip
  } else {
    switch (defenseBuff) {
      case "-6":
        finalDefense = Math.floor(finalDefense * 0.25);
        break;
      case "-5":
        finalDefense = Math.floor(finalDefense * (2 / 7));
        break;
      case "-4":
        finalDefense = Math.floor(finalDefense * (1 / 3));
        break;
      case "-3":
        finalDefense = Math.floor(finalDefense * 0.4);
        break;
      case "-2":
        finalDefense = Math.floor(finalDefense * 0.5);
        break;
      case "-1":
        finalDefense = Math.floor(finalDefense * (2 / 3));
        break;
      case "1":
        if (!crit) {
          finalDefense = Math.floor(finalDefense * 1.5);
        }
        break;
      case "2":
        if (!crit) {
          finalDefense = Math.floor(finalDefense * 2);
        }
        break;
      case "3":
        if (!crit) {
          finalDefense = Math.floor(finalDefense * 2.5);
        }
        break;
      case "4":
        if (!crit) {
          finalDefense = Math.floor(finalDefense * 3);
        }
        break;
      case "5":
        if (!crit) {
          finalDefense = Math.floor(finalDefense * 3.5);
        }
        break;
      case "6":
        if (!crit) {
          finalDefense = Math.floor(finalDefense * 4);
        }
        break;
      default:
    }
  }
  return finalDefense;
};

// Type modifier formula
const getTypeModExtra = function(
  z,
  mvType,
  pkType1,
  pkType2,
  foresignt,
  miracle,
  attackAbility,
  attackItem,
  defenseAbility,
  defenseItem,
  weather,
) {
  let typeModExtra = [];
  typeModExtra.push(1);
  typeModExtra.push("nm");
  typeModExtra.push(1);
  let ignoreIm = false;
  pkType1 = allTypes.indexOf(pkType1);
  if (pkType2) {
    pkType2 = allTypes.indexOf(pkType2);
  }
  // Apply type change ability
  if (defenseAbility === "prism-armor") {
    // Skip
  } else {
    if (attackAbility === "mode-b") {
      defenseAbility = "none";
    }
  }
  if (!z) {
    switch (attackAbility) {
      case "aerilate":
        if (mvType === "normal") {
          mvType = "flying";
        }
        break;
      case "galvanize":
        if (mvType === "normal") {
          mvType = "electric";
        }
        break;
      case "pixilate":
        if (mvType === "normal") {
          mvType = "fairy";
        }
        break;
      case "refrigerate":
        if (mvType === "normal") {
          mvType = "ice";
        }
        break;
      case "normalize":
        mvType = "normal";
        break;
      default:
    }
  }
  // Ignore type immunity
  if (mvType === "normal") {
    if (foresignt) {
      ignoreIm = true;
    } else if (attackAbility === "scrappy") {
      ignoreIm = true;
    }
  }
  if (mvType === "psychic") {
    if (miracle) {
      ignoreIm = true;
    }
  }
  if (mvType === "ground") {
    if (field === "gravity") {
      ignoreIm = true;
    }
  }
  // Calculate type effectiveness
  let data = typesData[mvType]["offense"];
  if (data["se"].includes(pkType1)) {
    typeModExtra[0] *= 2;
  } else if (data["ne"].includes(pkType1)) {
    typeModExtra[0] *= 0.5;
  } else if (data["na"].includes(pkType1) && !ignoreIm) {
    typeModExtra[0] = 0;
    return typeModExtra;
  }
  if (pkType2) {
    if (data["se"].includes(pkType2)) {
      typeModExtra[0] *= 2;
    } else if (data["ne"].includes(pkType2)) {
      typeModExtra[0] *= 0.5;
    } else if (data["na"].includes(pkType2) && !ignoreIm) {
      typeModExtra[0] = 0;
      return typeModExtra;
    }
  }
  if (typeModExtra[0] >= 2) {
    typeModExtra[1] = "se";
  } else if (typeModExtra[0] < 1) {
    typeModExtra[1] = "ne";
  }
  // Check for strong winds
  if (weather === "strong-winds") {
    if (pkType1 === 7 || pkType2 === 7) {
      if (mvType === "ice" || mvType === "electric" || mvType === "rock") {
        typeModExtra[0] *= 0.5;
      }
    }
  }
  // Apply attack ability
  switch (attackAbility) {
    case "neuroforce":
      if (typeModExtra[1] === "se") {
        typeModExtra[2] *= 1.25;
      }
      break;
    case "tinted-lens":
      if (typeModExtra[1] === "ne") {
        typeModExtra[2] *= 2;
      }
      break;
    default:
  }
  // Apply defense ability
  switch (defenseAbility) {
    case "filter-like":
    case "prism-armor":
      if (typeModExtra[1] === "se") {
        typeModExtra[2] *= 0.75;
      }
      break;
    case "dry-skin":
      if (mvType === "fire") {
        typeModExtra[2] *= 1.25;
      } else if (mvType === "water") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    case "no-water":
      if (mvType === "water") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    case "no-fire":
      if (mvType === "fire") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    case "no-flying":
      if (mvType === "flying" && field !== "gravity") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    case "no-electric":
      if (mvType === "electric") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    case "no-grass":
      if (mvType === "grass") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    case "heatproof":
    case "water-bubble":
      if (mvType === "fire") {
        typeModExtra[2] *= 0.5;
      }
      break;
    case "wonder-guard":
      if (typeModExtra[1] !== "se") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    default:
  }
  // Apply item
  switch (attackItem) {
    case "expert-belt":
      if (typeModExtra[1] === "se") {
        typeModExtra[2] *= 1.2;
      }
      break;
    default:
  }
  switch (defenseItem) {
    case "air-balloon":
      if (field !== "gravity") {
        typeModExtra[0] = 0;
        return typeModExtra;
      }
      break;
    default:
  }
  return typeModExtra;
};

// Final modifier formula
const getFinalMods = function(
  stab,
  crit,
  z,
  mvType,
  dmgType,
  hpFull,
  protect,
  typeBerry,
  attackAbility,
  defenseAbility,
  weather,
  screen,
  mod,
  typeModExtra
) {
  let finalMods = [];
  let noScreen = false;

  finalMods.push(1);                  // 0 Weather
  finalMods.push(1);                  // 1 Critical
  finalMods.push(1);                  // 2 Random
  finalMods.push(1);                  // 3 STAB
  finalMods.push(typeModExtra[0]);    // 4 Type
  finalMods.push(typeModExtra[2]);    // 5 Other

  if (typeModExtra[0] === 0) {
    return finalMods;
  }
  if (protect) {
    if (z) {
      finalMods[5] *= 0.25;
    } else {
      finalMods[5] = 0;
      return finalMods;
    }
  }
  // Apply weather
  switch (weather) {
    case "sunlight":
      if (mvType === "fire") {
        finalMods[0] = 1.5;
      } else if (mvType === "water") {
        finalMods[0] = 0.5;
      }
      break;
    case "ex-sunlight":
      if (mvType === "fire") {
        finalMods[0] = 1.5;
      } else if (mvType === "water") {
        finalMods[0] = 0;
        return finalMods;
      }
      break;
    case "rain":
      if (mvType === "water") {
        finalMods[0] = 1.5;
      } else if (mvType === "fire") {
        finalMods[0] = 0.5;
      }
      break;
    case "ex-rain":
      if (mvType === "water") {
        finalMods[0] = 1.5;
      } else if (mvType === "fire") {
        finalMods[0] = 0;
        return finalMods;
      }
      break;
    default:
  }
  // Apply ability
  if (defenseAbility === "shadow-shield") {
    // Skip
  } else {
    if (attackAbility === "mode-b") {
      defenseAbility = "none";
    }
  }
  switch (defenseAbility) {
    case "shadow-shield":
    case "multiscale":
      if (hpFull) {
        finalMods[5] *= 0.5;
      }
      break;
    case "friend-guard":
      finalMods[5] *= 0.75;
      break;
    default:
  }
  switch (attackAbility) {
    case "infiltrator":
      noScreen = true;
      break;
    default:
  }
  // Apply critical
  if (crit) {
    noScreen = true;
    finalMods[1] = 1.5;
    if (attackAbility === "sniper") {
      finalMods[5] *= 1.5;
    }
  }
  // Check STAB
  if (attackAbility === "protean") {
    stab = true;
  }
  if (stab) {
    if (attackAbility === "adaptability") {
      finalMods[3] = 2;
    } else {
      finalMods[3] = 1.5;
    }
  }
  // Apply screen
  if (noScreen) {
    // Skip
  } else {
    if (screen === "reflect") {
      if (dmgType === "physical") {
        finalMods[5] *= 0.5;
      }
    } else if (screen === "light-screen") {
      if (dmgType === "special") {
        finalMods[5] *= 0.5;
      }
    } else if (screen === "aurora-veil") {
      finalMods[5] *= 0.5;
    }
  }
  // Apply item
  if (typeBerry) {
    if (typeModExtra[1] === "se") {
      finalMods[5] *= 0.5;
    }
  }
  finalMods[5] *= mod;
  return finalMods;
};

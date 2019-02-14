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
  finalPower,
  finalAtk,
  finalDef,
  constFinalMod,
  hpFull,
  hp,
  fullHp,
  endure,
  defenseItem,
  defenseAbility,
  attackAbility
) {
  let dmgBase;
  let dmgRange = {};
  let survive = false;
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
    constFinalMod *= 1.25;
    survive = false;
  }
  // Calculate damage
  dmgBase = (Math.floor(Math.floor(Math.floor(2 * level / 5 + 2) * finalPower * finalAtk / finalDef) / 50) + 2) * constFinalMod;
  console.log(level);
  console.log(finalPower);
  console.log(finalAtk);
  console.log(finalDef);
  console.log(constFinalMod);
  console.log(dmgBase);
  dmgRange["minValue"] = Math.floor(dmgBase * 0.85);
  dmgRange["maxValue"] = Math.floor(dmgBase);
  dmgRange["minPercent"] = (Math.floor(dmgBase * 0.85) / fullHp * 100).toFixed(1);
  dmgRange["maxPercent"] = (Math.floor(dmgBase) / fullHp * 100).toFixed(1);
  let minRemain = hp - dmgRange["maxValue"];
  let maxRemain = hp - dmgRange["minValue"];
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
  dmgRange["minRemain"] = minRemain;
  dmgRange["maxRemain"] = maxRemain;
  return dmgRange;
};

// Final power formula
const getFinalPower = function(
  power,
  z,
  mvType,
  attackAbility,
  defenseAbility,
  weather,
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
    case "dark-aura":
      if (mvType === "dark") {
        if (defenseAbility === "aura-break") {
          finalPower /= 1.33;
        } else {
          finalPower *= 1.33;
        }
      }
      break;
    case "fairy-aura":
      if (mvType === "fairy") {
        if (defenseAbility === "aura-break") {
          finalPower /= 1.33;
        } else {
          finalPower *= 1.33;
        }
      }
      break;
    case "protean":
      stab = true;
      break;
    case "steelworker":
      if (mvType === "steel") {
        finalPower *= 1.5;
      }
      break;
    case "water-bubble":
      if (mvType === "water") {
        finalPower *= 2;
      }
      break;
    case "technician":
      if (finalPower <= 60) {
        finalPower *= 1.5;
      }
      break;
    default:
  }
  // Apply weather effect
  switch (weather) {
    case "sunlight":
      if (mvType === "fire") {
        finalPower *= 1.5;
      } else if (mvType === "water") {
        finalPower *= 0.5;
      }
      break;
    case "ex-sunlight":
      if (mvType === "fire") {
        finalPower *= 1.5;
      } else if (mvType === "water") {
        finalPower *= 0;
      }
      break;
    case "rain":
      if (mvType === "water") {
        finalPower *= 1.5;
      } else if (mvType === "fire") {
        finalPower *= 0.5;
      }
      break;
    case "ex-rain":
      if (mvType === "water") {
        finalPower *= 1.5;
      } else if (mvType === "fire") {
        finalPower *= 0;
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
  dmgType,
  attackBuff,
  attackAbility,
  attackItem,
  weather,
  defenseAbility
) {
  let finalAttack = attack;
  // Apply ability
  switch (attackAbility) {
    case "double-atk":
      if (dmgType === "physical") {
        finalAttack *= 2;
      }
      break;
    case "hustle":
      if (dmgType === "physical") {
        finalAttack *= 1.5;
      }
      break;
    case "solar-power":
      if (weather === "sunlight" || weather === "ex-sunlight") {
        if (dmgType === "special") {
          finalAttack *= 1.5;
        }
      }
      break;
    case "flower-gift":
      if (weather === "sunlight" || weather === "ex-sunlight") {
        if (dmgType === "physical") {
          finalAttack *= 1.5;
        }
      }
      break;
    case "mode-b":
      defenseAbility = "none";
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
          finalAttack *= 0.25;
        }
        break;
      case "-5":
        if (!crit) {
          finalAttack *= (2 / 7);
        }
        break;
      case "-4":
        if (!crit) {
          finalAttack *= (1 / 3);
        }
        break;
      case "-3":
        if (!crit) {
          finalAttack *= 0.4;
        }
        break;
      case "-2":
        if (!crit) {
          finalAttack *= 0.5;
        }
        break;
      case "-1":
        if (!crit) {
          finalAttack *= (2 / 3);
        }
        break;
      case "1":
        finalAttack *= 1.5;
        break;
      case "2":
        finalAttack *= 2;
        break;
      case "3":
        finalAttack *= 2.5;
        break;
      case "4":
        finalAttack *= 3;
        break;
      case "5":
        finalAttack *= 3.5;
        break;
      case "6":
        finalAttack *= 4;
        break;
      default:
    }
  }
  // Apply item
  switch (attackItem) {
    case "choice-band":
      if (dmgType === "physical") {
        finalAttack *= 1.5;
      }
      break;
    case "choice-specs":
      if (dmgType === "special") {
        finalAttack *= 1.5;
      }
      break;
    case "muscle-band":
      if (dmgType === "physical") {
        finalAttack *= 1.1;
      }
      break;
    case "wise-glasses":
      if (dmgType === "special") {
        finalAttack *= 1.1;
      }
      break;
    default:
  }
  return finalAttack;
};

// Final defense formula
const getFinalDefense = function(
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
) {
  let finalDefense = defense;
  // Apply ability
  if (attackAbility === "mode-b") {
    defenseAbility = "none";
  }
  switch (defenseAbility) {
    case "fur-coat":
      if (dmgType === "physical") {
        finalDefense *= 2;
      }
      break;
    case "flower-gift":
      if (dmgType === "special") {
        if (weather === "sunlight" || weather === "ex-sunlight") {
          finalDefense *= 1.5;
        }
      }
      break;
    case "marvel-scale":
      if (ailment) {
        if (dmgType === "physical") {
          finalDefense *= 1.5;
        }
      }
      break;
    default:
  }
  // Check for sandstorm
  if (weather === "sandstorm") {
    if (pkType1 === "rock" || pkType2 === "rock") {
      if (dmgType === "special") {
        finalDefense *= 1.5;
      }
    }
  }
  // Apply item
  switch (defenseItem) {
    case "assault-vest":
      if (dmgType === "special") {
        finalDefense *= 1.5;
      }
      break;
    default:
  }
  // Apply stat change
  if (attackAbility === "unaware") {
    // Skip
  } else {
    switch (defenseBuff) {
      case "-6":
        finalDefense *= 0.25;
        break;
      case "-5":
        finalDefense *= (2 / 7);
        break;
      case "-4":
        finalDefense *= (1 / 3);
        break;
      case "-3":
        finalDefense *= 0.4;
        break;
      case "-2":
        finalDefense *= 0.5;
        break;
      case "-1":
        finalDefense *= (2 / 3);
        break;
      case "1":
        if (!crit) {
          finalDefense *= 1.5;
        }
        break;
      case "2":
        if (!crit) {
          finalDefense *= 2;
        }
        break;
      case "3":
        if (!crit) {
          finalDefense *= 2.5;
        }
        break;
      case "4":
        if (!crit) {
          finalDefense *= 3;
        }
        break;
      case "5":
        if (!crit) {
          finalDefense *= 3.5;
        }
        break;
      case "6":
        if (!crit) {
          finalDefense *= 4;
        }
        break;
      default:
    }
  }
  // Check eviolite
  if (eviolite) {
    finalDefense *= 1.5;
  }
  return finalDefense;
};

// Type modifier formula
const getTypeMod = function(
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
) {
  let typeMod = 1;
  let extraMod = 1;
  let eff = "nm";
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
          extraMod *= 1.2;
        }
        break;
      case "galvanize":
        if (mvType === "normal") {
          mvType = "electric";
          extraMod *= 1.2;
        }
        break;
      case "pixilate":
        if (mvType === "normal") {
          mvType = "fairy";
          extraMod *= 1.2;
        }
        break;
      case "refrigerate":
        if (mvType === "normal") {
          mvType = "ice";
          extraMod *= 1.2;
        }
        break;
      case "normalize":
        mvType = "normal";
        extraMod *= 1.2;
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
    typeMod *= 2;
  } else if (data["ne"].includes(pkType1)) {
    typeMod *= 0.5;
  } else if (data["na"].includes(pkType1) && !ignoreIm) {
    typeMod = 0;
    return typeMod;
  }
  if (pkType2) {
    if (data["se"].includes(pkType2)) {
      typeMod *= 2;
    } else if (data["ne"].includes(pkType2)) {
      typeMod *= 0.5;
    } else if (data["na"].includes(pkType2) && !ignoreIm) {
      typeMod = 0;
      return typeMod;
    }
  }
  if (typeMod >= 2) {
    eff = "se";
  } else if (typeMod < 1) {
    eff = "ne";
  }
  // Check for strong winds
  if (weather === "strong-winds") {
    if (pkType1 === 7 || pkType2 === 7) {
      if (mvType === "ice" || mvType === "electric" || mvType === "rock") {
        extraMod *= 0.5;
      }
    }
  }
  // Apply attack ability
  switch (attackAbility) {
    case "neuroforce":
      if (eff === "se") {
        extraMod *= 1.25;
      }
      break;
    case "sand-force":
      if (weather === "sandstorm") {
        if (mvType === "rock" || mvType === "steel" || mvType === "ground") {
          extraMod *= 1.3;
        }
      }
      break;
    case "tinted-lens":
      if (eff === "ne") {
        typeMod *= 2;
      }
      break;
    default:
  }
  // Apply defense ability
  switch (defenseAbility) {
    case "filter-like":
    case "prism-armor":
      if (eff === "se") {
        extraMod *= 0.75;
      }
      break;
    case "dry-skin":
      if (mvType === "fire") {
        extraMod *= 1.25;
      } else if (mvType === "water") {
        typeMod = 0;
        return typeMod;
      }
      break;
    case "no-water":
      if (mvType === "water") {
        typeMod = 0;
        return typeMod;
      }
      break;
    case "no-fire":
      if (mvType === "fire") {
        typeMod = 0;
        return typeMod;
      }
      break;
    case "no-flying":
      if (mvType === "flying" && field !== "gravity") {
        typeMod = 0;
        return typeMod;
      }
      break;
    case "no-electric":
      if (mvType === "electric") {
        typeMod = 0;
        return typeMod;
      }
      break;
    case "no-grass":
      if (mvType === "grass") {
        typeMod = 0;
        return typeMod;
      }
      break;
    case "thick-fat":
      if (mvType === "fire" || mvType === "ice") {
        extraMod *= 0.5;
      }
      break;
    case "heatproof":
    case "water-bubble":
      if (mvType === "fire") {
        extraMod = 0.5;
      }
      break;
    case "wonder-guard":
      if (eff !== "se") {
        typeMod = 0;
        return typeMod;
      }
      break;
    default:
  }
  // Apply item
  switch (attackItem) {
    case "expert-belt":
      if (eff === "se") {
        extraMod *= 1.2;
      }
      break;
    default:
  }
  switch (defenseItem) {
    case "air-balloon":
      if (field !== "gravity") {
        typeMod = 0;
        return typeMod;
      }
      break;
    default:
  }
  // Apply field
  switch (field) {
    case "electric":
      if (mvType === "electric") {
        extraMod *= 1.5;
      }
      break;
    case "grassy":
      if (mvType === "grass") {
        extraMod *= 1.5;
      }
      break;
    case "psychic":
      if (mvType === "psychic") {
        extraMod *= 1.5;
      }
      break;
    case "misty":
      if (mvType === "dragon") {
        extraMod *= 0.5;
      }
      break;
    default:
  }
  return typeMod * extraMod;
};

// Final modifier formula
const getFinalMod = function(
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
  typeMod,
  mod
) {
  let finalMod = 1;
  let noScreen = false;
  if (typeMod === 0) {
    finalMod = 0;
    return finalMod;
  } else {
    finalMod *= typeMod;
  }
  if (protect) {
    if (z) {
      finalMod *= 0.25;
    } else {
      finalMod = 0;
      return finalMod;
    }
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
        finalMod *= 0.5;
      }
      break;
    case "friend-guard":
      finalMod *= 0.75;
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
    if (attackAbility === "sniper") {
      finalMod *= 2.25;
    } else {
      finalMod *= 1.5;
    }
  }
  // Check STAB
  if (stab) {
    if (attackAbility === "adaptability") {
      finalMod *= 2;
    } else {
      finalMod *= 1.5;
    }
  }
  // Apply screen
  if (noScreen) {
    // Skip
  } else {
    if (screen === "reflect") {
      if (dmgType === "physical") {
        finalMod *= 0.5;
      }
    } else if (screen === "light-screen") {
      if (dmgType === "special") {
        finalMod *= 0.5;
      }
    } else if (screen === "aurora-veil") {
      finalMod *= 0.5;
    }
  }
  // Apply item
  switch (attackItem) {
    case "life-orb":
      finalMod *= 1.3;
      break;
    default:
  }
  if (attackItem === "none") {
    if (typeItem) {
      finalMod *= 1.2;
    }
  }
  if (defenseItem === "none") {
    if (typeBerry) {
      finalMod *= 0.5;
    }
  }
  return finalMod * mod;
};

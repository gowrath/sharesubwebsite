var express = require('express');
var router = express.Router();

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
]

const getNatuesData = function() {
  return {
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
};

const getTypesData = function() {
  return {
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
        "se": [1, 7, 9, 10],
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
    },
  };
};

var renderData = {
  title: "Pokémon Calculator",
  natures: getNatuesData(),
  typeNames: allTypes,
  types: getTypesData()
};

/* GET calculator page. */
router.get('/', function(req, res, next) {
  res.render('calc', renderData);
});

module.exports = router;

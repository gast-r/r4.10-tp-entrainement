// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Class to store words with their allowed number of attempts
class Mat {
    constructor(m, n) {
      this.mot = m; // Word to be guessed
      this.nb_essais = n; // Allowed number of attempts
    }
  }
  
  // Array of animal names
  const animaux = [
    new Mat("ELEPHANT", 6), new Mat("ZEBRE", 4),
    new Mat("GAZELLE", 6), new Mat("TIGRE", 5),
    new Mat("TORTUE", 5), new Mat("CROCODILE", 7),
    new Mat("PANTHERE", 7), new Mat("GUEPARD", 6),
    new Mat("OKAPI", 6), new Mat("LION", 4),
    new Mat("SINGE", 5), new Mat("GIRAFE", 6),
    new Mat("LEOPARD", 6), new Mat("ALIGATOR", 7),
    new Mat("GORILLE", 6), new Mat("PERROQUET", 7),
    new Mat("ANTILOPE", 7), new Mat("HIPPOPOTAME", 7),
    new Mat("FENNEC", 5), new Mat("CHACAL", 5),
    new Mat("BABOUIN", 6), new Mat("IMPALA", 5),
    new Mat("MANGOUSTE", 7), new Mat("RHINOCEROS", 7)
  ];
  
let getWord = () => {
    // Randomly select an animal
    const i = Math.floor(Math.random() * animaux.length);
    
    // Return the name of the animal in JSON format
    // (with the allowed number of errors for that animal)
    let word = { mot: animaux[i].mot, nb_essais: animaux[i].nb_essais };
    return word;
}
  
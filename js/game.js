// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

/**
 * Classe Game
 * (Modèle du Jeu du Pendu)
 */
class Game {
  _gameInProgress = false;

  _wordToGuess;

  _usedLetters;

  _displayedWord;

  _nbErrorsAllowed = 0;

  _score = 0;

  /**
   * Lance une nouvelle partie (s'il n'y a pas déjà une partie en cours).
   */
  launchNewGame() {
    // TODO Compléter en Partie 1 ...

    // si une partie est déjà en cours
    if (this._gameInProgress) {
      throw new Error("Il faut d'abord finir la partie en cours...")
    }

    // pas de partie en cours
    // définir la partie comme en cours
    this._gameInProgress = true;

    // récupérer le mot à faire deviner
    let wordToGuessObject = this.getNewWordObject();
    // mettre à jours le modèle
    // le mot à deviner
    this._wordToGuess = wordToGuessObject.mot;
    // le nombre d'erreur autorisé
    this._nbErrorsAllowed = wordToGuessObject.nb_essais;
    // les lettres utilisées, la première et dernière lettre
    //    - la première
    this._usedLetters = this._wordToGuess[0];
    //    - la dernière lettre
    let posLastLetter = this._wordToGuess.length-1;
    this._usedLetters += this._wordToGuess[posLastLetter];
    
    // mettre à jour le mot à afficher
    this._displayedWord = this.generateWordToDisplay(this._usedLetters, this._wordToGuess);
  }

  /**
   * Récupère un nouveau mot sous la forme d'un objet.
   * (Une 1ère version de cette méthode vous est fournie, mais vous devrez la modifier par la suite.)
   * @returns {object} Un objet contenant le mot et le nombre d'essais autorisés pour ce mot
   */
  getNewWordObject() {
    // Retourne (pour l'instant) le mot "ELEPHANT"
    return { mot: "ELEPHANT", nb_essais: 6 };

    // TODO Modifier en Partie 2 ...
  }

  /**
   * Met à jour le mot à afficher.
   * (Fonction fournie. À NE PAS MODIFIER.)
   */
  updateWordToDisplay() {
    this._displayedWord = this.generateWordToDisplay(
      this._usedLetters,
      this._wordToGuess
    );
  }

  /**
   * Retourne une chaine de caractères correspondant au mot dans lequel :
   * - les lettres non présentes dans lettersToDisplay sont remplacées par des "_"
   * - les lettres apparaissant dans lettersToDisplay apparaissent en clair
   * @param {string} lettersToDisplay : Lettres à afficher
   * @param {string} wordToGuess : Mot à trouver
   * @returns {string} Une chaine de la forme "E_E____T"
   */
  generateWordToDisplay(lettersToDisplay, wordToGuess) {
    // TODO Compléter en Partie 1 ...

    let wordToDisplay = "";
    // pour chaque lettre du mot
    for (let letter of wordToGuess) {
      // si la lettre est dans les lettres utilisées, afficher la lettre
      if (lettersToDisplay.includes(letter)) {
        wordToDisplay += letter;
      } else { // la lettre n'est pas dans les lettres utilisées
        // afficher un tirer
        wordToDisplay += '_';
      }
    }
    return wordToDisplay;
  }

  /**
   * Joue une nouvelle lettre et retourne vrai si la partie est terminée.
   * @param {string} letter : La lettre jouée
   */
  playLetter(letter) {
    // TODO Compléter en Partie 1 ...

    // si pas de partie en cours
    if (!this._gameInProgress) {
      throw new Error("Pas de partie en cours ! Commencez par lancer une partie.");
    }

    // une partie est en cours
    // si la lettre a déjà été joué, lever une exception
    if (this._usedLetters.includes(letter)) {
      throw new Error("La lettre " + letter + " a déjà été jouée !");
    }

    // la lettre n'a pas été jouée
    // ajouter la lettre aux lettres utilisées
    this._usedLetters += letter;
    // si la lettre joué est présente
    if (this._wordToGuess.includes(letter)) {
      this.updateWordToDisplay();
      // si fin de partie car mot trouvé, ajouté le nb d'erreurs restantes au score
      if (this._wordToGuess === this._displayedWord) {
        this._score += this._nbErrorsAllowed;
        // arrêter la partie
        this._gameInProgress = false;
      }
    } else { // mauvaise lettre
      // on enlève une possibilité d'erreur
      this._nbErrorsAllowed--;
      // si fin de partie car plus d'erreurs possible
      if (this._nbErrorsAllowed === 0) {
        // enlever deux points au score
        this._score -= 2;
        // arrêter la partie
        this._gameInProgress = false;
      }

    }

  }

  /**
   * Sauvegarde l'état du jeu dans le LocalStorage.
   */
  saveState() {
    // TODO Compléter en Partie 3 ...
  }

  /**
   * Récupère l'état du jeu dans le LocalStorage
   * et met à jour le modèle à partir de celui-ci.
   */
  retrieveState() {
    // TODO Compléter en Partie 3 ...
  }
}

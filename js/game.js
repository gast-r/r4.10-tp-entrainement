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
    throw new Error("(Méthode pas encore implémentée)");

    // TODO Compléter en Partie 1 ...
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
    return "???";

    // TODO Compléter en Partie 1 ...
  }

  /**
   * Joue une nouvelle lettre et retourne vrai si la partie est terminée.
   * @param {string} letter : La lettre jouée
   */
  playLetter(letter) {
    throw new Error(`(Méthode pas encore implémentée)`);

    // TODO Compléter en Partie 1 ...
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

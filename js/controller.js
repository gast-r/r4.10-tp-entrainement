// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

// Initialisation du modèle
let game = new Game();

// Définition de la fonction à exécuter au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
  // Cache tous les messages au départ
  view.hideMessages();

  // TODO Compléter en Partie 3 ...

  // MàJ de la vue à partir du modèle
  /* (À faire à chaque fois pour éviter qu'au rafraichissement
    de la page, le navigateur affiche les informations présentes
    dans son "cache" alors que celles-ci ne sont pas cohérentes
    avec le modèle) */
  view.updateFrom(game);
});

// -- MES AJOUTS ---

// **** FONCTIONS UTILES AUX LISTENNERs ****

/**
 * Cache les message dans la vue et lance une nouvelle partie.
 * @param {*} event 
 */
function onNewGameEvent(event) {
  // cache tous les messages
  view.hideMessages();

  // lance une nouvelle partie dans le modèle
  try {
    game.launchNewGame();
  } catch (e) {
    view.displayMessage(e.message);
  }

  // demander à la vue de se mettre à jours
  view.updateFrom(game);
}

/**
 * Cache tous les messages,
 * joue la lettre qui a été cliqué dans le modèle,
 * mais à jour à vue
 * @param {*} event Permet de retrouver la lettre qui a été cliqué, event.target
 */
function onLetterClick(event) {
  // récupérer le nombre de point si fin de partie
  let nbPointBeforePlay = game._score;


  // cache tous les messages
  view.hideMessages();

  // récupérer la lettre
  let letter = event.target.textContent;

  // essai de jouer la lettre dans le modèle
  try {
    game.playLetter(letter);
  } catch (e) {
    view.displayMessage(e.message);
  }

  // mettre à jour la vue
  view.updateFrom(game);

  // gérer la fin d'une partie
  let nbPointAfterPlay = game._score;
  let diffPoint = nbPointAfterPlay - nbPointBeforePlay;
  // partie finie
  if (game._gameInProgress === false) {
    // si la partie est gagnante
    if (game._wordToGuess == game._displayedWord) {
      view.displayMessage(
        `Bravo ! Le mot était bien ${game._wordToGuess}. Votre score a augmenté de ${diffPoint} point(s).`,
        MESSAGE_TYPES.win
        );
    } else { // partie perdante
      view.displayMessage(
        `Perdu ! Le mot était ${game._wordToGuess} Votre score a diminué de 2 points.`,
        MESSAGE_TYPES.lost
        );
    }
  }
}

// **** LES LISTENNERS ****

// appel newGameEvent si click sur le boutton "Lancer une nouvelle partie"
view.new_game_btn.addEventListener('click', onNewGameEvent);

// ajout de la fonction qui gère le clique sur une lettre
view.letters_btns.forEach(element => {
  element.addEventListener('click', onLetterClick);
});


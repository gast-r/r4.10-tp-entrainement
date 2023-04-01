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

  view.updateFrom(game);
}

// **** LES LISTENNERS ****

// appel newGameEvent si click sur le boutton "Lancer une nouvelle partie"
view.new_game_btn.addEventListener('click', onNewGameEvent);

// ajout de la fonction qui gère le clique sur une lettre
view.letters_btns.forEach(element => {
  element.addEventListener('click', onLetterClick);
});


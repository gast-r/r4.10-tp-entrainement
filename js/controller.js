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


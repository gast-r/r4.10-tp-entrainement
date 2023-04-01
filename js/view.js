// Invoquation du mode strict
// (Pour plus infos : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Strict_mode)
"use strict";

/**
 * Enumération contenant les IDs des 3 éléments de la page
 * qui correspondent aux 3 types de message.
 * (À NE PAS MODIFIER.)
 */
const MESSAGE_TYPES = {
  warning: "message_avertissement",
  lost: "message_perdu",
  win: "message_gagne",
};

/**
 * Objet correspondant à la Vue.
 */
const view = {
  /**
   * Champ texte contenant les indices sur le mot à deviner (la Zone mot).
   */
  word_input: null,

  /**
   * Champ texte contenant les lettres déjà utilisées (la Zone essais).
   */
  used_letters_input: null,

  /**
   * Champ numérique contenant le nombre d'erreurs encore permises.
   */
  allowed_errors_input: null,

  /**
   * Bouton permettant de lancer une partie.
   */
  new_game_btn: null,

  /**
   * Collection des boutons représentant le clavier virtuel intégré à la page.
   * (Tous les boutons avec la classe "lettre")
   */
  letters_btns: null,

  /**
   * Élément <span> affichant le score actuel du joueur.
   */
  score_span: null,

  /**
   * Met à jour la vue à partir du modèle.
   * @param {Game} game : Modèle du jeu du pendu
   */
  updateFrom(game) {
    // TODO Compléter en Partie 1 ...
  },

  /**
   * Cache tous les messages de la page.
   * (Fonction fournie. À NE PAS MODIFIER.)
   */
  hideMessages() {
    for (let msgId of Object.values(MESSAGE_TYPES)) {
      document.getElementById(msgId).classList.add("cache");
    }
  },

  /**
   * Affiche un message à l'utilisateur.
   * (Fonction fournie. À NE PAS MODIFIER.)
   * @param {string} msg : Message à afficher.
   * @param {string} type : Type du message à afficher.
   */
  displayMessage(msg, type = MESSAGE_TYPES.warning) {
    let msgElmt = document.getElementById(type);
    if (msgElmt) {
      msgElmt.innerHTML = msg;
      msgElmt.classList.remove("cache");
    }
  },

  /**
   * Demande à l'utilisateur de choisir entre OK (oui) et Annuler (non).
   * (Fonction fournie. À NE PAS MODIFIER.)
   * @param {string} msg : Message à afficher.
   * @returns {boolean} Vrai si l'utilisateur à cliquer sur "OK"
   */
  askIfYesOrNo(msg) {
    return confirm(msg);
  },
};

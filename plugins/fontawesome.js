import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'; // Solid icons
// Brands icons

// Ajouter les packs d'icônes à la bibliothèque
library.add(fas, fab);

export default defineNuxtPlugin((nuxtApp) => {
  // Enregistrer le composant globalement
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon);
});

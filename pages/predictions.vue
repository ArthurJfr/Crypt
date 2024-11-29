<template>
    <div class="predict-content">
      <h1 class="grad">Prédictions</h1>
      <div class="bar"></div>
  
      <!-- Sélection de la cryptomonnaie -->
      <div class="select-container">
        <label class="txt-primary">Sélectionnez une cryptomonnaie</label>
        <select 
          v-model="selectedCrypto"
          class="crypto-select"
          :disabled="selectDisabled" <!-- Désactiver le champ si nécessaire -->
        >
          <option v-for="crypto in cryptoList" :key="crypto.id" :value="crypto.id">
            {{ crypto.name }}
          </option>
        </select>
        <p v-if="selectDisabled" class="disabled-info">Veuillez patienter 1 minute avant de changer la cryptomonnaie.</p>
      </div>
  
      <!-- Loader -->
      <Loader v-if="loading" />
  
      <!-- Résultats -->
      <div v-else class="card predict-data">
        <h3>Prédictions pour {{ selectedCrypto }} le {{ data.date }}</h3>
        <p><strong>Tendance globale :</strong> {{ data.realTrend }}</p>
        <p><strong>Total des épisodes :</strong> {{ data.totalEpisodes }}</p>
  
        <h4>Historique des décisions :</h4>
        <ul>
          <li v-for="(item, index) in data.decisionHistory" :key="index">
            > Épisode {{ item.episode }} : {{ item.decision }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  

<script setup>
import { ref, watch, computed } from 'vue';
import { getPredictions } from '~/services/api';
import Loader from '~/components/Loader.vue';

// Liste des cryptomonnaies
const cryptoList = [
  { id: 'bitcoin', name: 'Bitcoin (BTC)' },
  { id: 'ethereum', name: 'Ethereum (ETH)' },
  { id: 'cardano', name: 'Cardano (ADA)' },
  { id: 'solana', name: 'Solana (SOL)' },
  { id: 'polkadot', name: 'Polkadot (DOT)' }
];

// États
const loading = ref(false); // État de chargement
const data = ref([]); // Données des prédictions
const selectedCrypto = ref(cryptoList[0].id); // Cryptomonnaie sélectionnée
const selectDisabled = ref(false); // Désactiver le select après un changement
const today = new Date().toISOString().slice(0, 10); // Date actuelle au format YYYY-MM-DD

// Fonction pour interpréter `realTrend`
const interpretRealTrend = (trend) => {
  switch (trend) {
    case 0:
      return 'Baisse';
    case 1:
      return 'Neutre';
    case 2:
      return 'Hausse';
    default:
      return 'Inconnu';
  }
};

// Fonction pour récupérer les prédictions depuis l'API
const fetchData = async () => {
  loading.value = true;
  try {
    const response = await getPredictions(today, selectedCrypto.value);
    if (response.results.success) {
      // Structurer les données récupérées
      data.value = {
        realTrend: interpretRealTrend(response.results.realTrend),
        totalEpisodes: response.results.totalEpisodes,
        decisionHistory: response.results.decisionHistory.map((item) => ({
          episode: item.episode,
          decision: interpretRealTrend(item.decision),
        })),
        date: response.date,
      };
    } else {
      console.error('Un problème est survenu avec les données API.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération des données API :', error);
  } finally {
    loading.value = false;
  }
};

// Bloquer le select pour 1 minute après un changement
const disableSelectForOneMinute = () => {
  selectDisabled.value = true;
  setTimeout(() => {
    selectDisabled.value = false;
  }, 60000); // Désactiver pour 60 secondes
};

// Surveiller les changements de `selectedCrypto`
watch(selectedCrypto, async () => {
  await fetchData(); // Appel API au changement de cryptomonnaie
  disableSelectForOneMinute(); // Désactiver le select
});
</script>


<style scoped>
.predict-content {
     margin-top: 3rem;
     display: flex;
     flex-direction: column;
     align-items: center;
}
.predict-content .predict-data {
    margin-top: 4rem;
}
.select-container {
    margin-top: 3rem;
   display: flex;
   flex-direction: column;
   align-items: center;
  }
  
  .predict-content  label {
    display: block;
    font-size: 18px;
    font-weight: bold;
    color: #4b5563;
    margin-bottom: 0.5rem;
    text-align: center;
  }
  
  .predict-content select {
    width: 350px;
    padding: 0.5rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    color: #374151;
    background-color: white;
  }
  
  .predict-content select:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2);
  }
  
</style>
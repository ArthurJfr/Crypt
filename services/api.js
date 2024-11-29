import axios from "axios";

const BASE_URL = '';

/**
 * Récupère les prédictions pour une date et une cryptomonnaie.
 * @param {string} date - La date pour laquelle récupérer les prédictions (format YYYY-MM-DD).
 * @param {string} crypto - Le nom de la cryptomonnaie (ex. "bitcoin").
 * @returns {Promise<Object>} - Les prédictions sous forme de tableau.
 */

export const getPredictions = async (date, crypto) => {
    try {
        const response = await axios.get(`${BASE_URL}/predictions` , {
            params : {date, crypto}
        });
        console.log(response.data);
        
        return response.data;
        
    } catch (err) {
        console.error(err);
        throw err;
    }
}
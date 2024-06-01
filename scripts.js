// scripts.js
function mettreAJourPrix() {
    const prixSP98 = document.getElementById('prix-sp98-input').value;
    const prixSP95E10 = document.getElementById('prix-sp95-e10-input').value;
    const prixGazole = document.getElementById('prix-gazole-input').value;

    if (prixSP98) {
        document.getElementById('prix-sp98').textContent = `${parseFloat(prixSP98).toFixed(2)}€ / litre`;
    }
    if (prixSP95E10) {
        document.getElementById('prix-sp95-e10').textContent = `${parseFloat(prixSP95E10).toFixed(2)}€ / litre`;
    }
    if (prixGazole) {
        document.getElementById('prix-gazole').textContent = `${parseFloat(prixGazole).toFixed(2)}€ / litre`;
    }
}

// scripts.js
function obtenirNouveauPrix() {
    // Simuler l'obtention d'un nouveau prix (vous pouvez remplacer cela par une requête API)
    const prixMin = 1.30;
    const prixMax = 1.70;
    return (Math.random() * (prixMax - prixMin) + prixMin).toFixed(2);
}

function mettreAJourPrix() {
    const nouveauPrix = obtenirNouveauPrix();
    document.getElementById('prix').textContent = `${nouveauPrix}€ / litre`;
}

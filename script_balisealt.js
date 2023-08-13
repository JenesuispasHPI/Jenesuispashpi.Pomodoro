document.getElementById('generer').addEventListener('click', async () => {
    const form = document.getElementById('form');
    const resultat = document.getElementById('resultat');
    
    const data = new FormData(form);
    const response = await fetch('/generer_balises', {
        method: 'POST',
        body: data
    });
    
    const balises = await response.text();
    resultat.innerHTML = balises; // Utilisation de innerHTML pour insérer des balises HTML
    
    // Ajout des balises alt aux balises img
    const images = resultat.querySelectorAll('img');
    images.forEach((img, index) => {
        const altText = data.get(`alt-${index}`);
        img.setAttribute('alt', altText);
    });
});

window.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'a' && e.key === 'z') {
        document.body.appendChild(document.createElement('p')).innerText = 'Bravo ! Tu as trouvé la combinaison gagnante !';
        const p = document.querySelector('p');
        if (p) {
            p.style.color = 'blue';
        }
    }   
    if (e.ctrlKey && e.key === 'a') {
        document.body.appendChild(document.createElement('p')).innerText = 'Bravo ! Tu as trouvé la combinaison gagnante !';
    }
});
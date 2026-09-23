const caseModale = document.querySelector('.case')
const bouton = document.querySelector('#afficher')
const body = document.querySelector('body')

bouton.addEventListener('click', () => {
    event.stopPropagation();
    caseModale.style.display = 'block'
    body.style.backgroundColor = 'gray'
})

document.addEventListener('click', (event) => {
    if (!caseModale.contains(event.target)) {
      caseModale.style.display = 'none';
      body.style.backgroundColor = '';
    }
});
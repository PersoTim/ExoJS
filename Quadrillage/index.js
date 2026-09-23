const quadrillage = document.querySelector('.quadrillage')
const divs = quadrillage.querySelectorAll('div')

const couleurs = ['green', 'red', 'blue', 'yellow', 'orange']

for (let i = 0; i < divs.length; i++) { 
    let index = 0

    divs[i].addEventListener('click', () => {
        divs[i].classList.remove(couleurs[index])
        divs[i].classList.add(couleurs[index])

        index++
    })
}
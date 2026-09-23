const grid = document.querySelector('.grid')
const divs = grid.querySelectorAll('div')

for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener('mouseenter', () => {
        divs[i].style.borderColor = 'red'
    })
    divs[i].addEventListener('mouseleave', () => {
        divs[i].style.borderColor = 'black'
    })

    divs[i].addEventListener('mousedown', () => {
        divs[i].style.width = '400px'
    })

    divs[i].addEventListener('mouseup', () => {
        divs[i].style.width = '200px'
    })
}
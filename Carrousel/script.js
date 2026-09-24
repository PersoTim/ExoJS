const leftButton = document.querySelectorAll('button')[0]
const rightButton = document.querySelectorAll('button')[1]
const div = document.querySelector('div')

let images = []

rightButton.addEventListener('click', () => {
    if (div.children.length > 3) {
        div.removeChild(div.children[0])
    }

    const img = document.createElement('img')

    img.src = `https://picsum.photos/200/200?random=${Math.random()}`
    img.alt = ''
    img.style.width = '200px'
    img.style.height = '200px'

    div.appendChild(img)

    images.push(img.src)
})

leftButton.addEventListener('click', () => {
    if (images.length <= 1) {
        return
    }

    if (div.children.length > 0) {
        div.removeChild(div.children[0])
    }

    images.pop()

    const img = document.createElement('img')

    img.src = images[images.length - 1]
    img.alt = ''
    img.style.width = '200px'
    img.style.height = '200px'

    div.appendChild(img)
})
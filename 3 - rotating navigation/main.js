const menu = document.querySelector('.menu'),
    close = document.querySelector('.close'),
    container = document.querySelector('.container')

menu.addEventListener('click', () => {
    container.classList.add('show-nav')
})

close.addEventListener('click', () => {
    container.classList.remove('show-nav')
})
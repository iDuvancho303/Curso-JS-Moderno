// Eventos al dar 'scroll' con el mouse
window.addEventListener('scroll', () => {
    console.log('scrolling down');
})

// Como detectar el scrolling vertical o la cantidad de scrolling en pixeles
window.addEventListener('scroll', () => {
    const scrollPx = window.scrollY;
    console.log(scrollPx);
})

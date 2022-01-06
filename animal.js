function btn() {
    let image = document.getElementById('image');
    let images = ['Beetle.jpg', 'Elephant.jpg', 'Komodo.jpg',
    'Leopard.jpg', 'Mantis.jpg', 'Neko.jpg', 'Pagong.jpg', 'Peko.jpg',
    'Polar.jpg', 'Wolf.jpg'];

    let random = Math.floor(Math.random() * 10);
    image.src = images[random];
}
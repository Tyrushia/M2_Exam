function btn() {
    let image = document.getElementById('image');
    let images = ['Beetle.jpg', 'Elephant.jpg', 'Komodo.jpg',
        'Leopard.jpg', 'Mantis.jpg', 'Neko.jpg', 'Pagong.jpg', 'Peko.jpg',
        'Polar.jpg', 'Wolf.jpg'];

    let random = Math.floor(Math.random() * 10);
    image.src = images[random];
    var deftext = "default"



    if (image.getAttribute('src') == 'Beetle.jpg') {
        deftext = "John   13";
    }
    else if (image.getAttribute('src') == 'Elephant.jpg') {
        deftext = "Jizu   54";
    }
    else if (image.getAttribute('src') == 'Komodo.jpg') {
        deftext = "Gree   20";
    }
    else if (image.getAttribute('src') == 'Leopard.jpg') {
        deftext = "Spark   12";
    }
    else if (image.getAttribute('src') == 'Mantis.jpg') {
        deftext = "Lightning   7";
    }
    else if (image.getAttribute('src') == 'Neko.jpg') {
        deftext = "Botan   6";
    }
    else if (image.getAttribute('src') == 'Pagong.jpg') {
        deftext = "Godzill   68";
    }
    else if (image.getAttribute('src') == 'Peko.jpg') {
        deftext = "Pekora   4";
    }
    else if (image.getAttribute('src') == 'Polar.jpg') {
        deftext = "Joris   40";
    }
    else if (image.getAttribute('src') == 'Wolf.jpg') {
        deftext = "Ezekiel 25";
    }
    else {
        deftext = "Default";
    }
    document.getElementById("labelchange").innerHTML = deftext;

    
}



function displayResult() {

    var table = document.getElementById("table");
    var row = table.insertRow(1);
    var x = row.insertCell(-1);


    var img = document.createElement('img');
    img.src = image.src;


    if (image.getAttribute('src') == 'Beetle.jpg') {
        x.innerHTML = 'John   13';
    }
    else if (image.getAttribute('src') == 'Elephant.jpg') {
        x.innerHTML = 'Jizu   54';
    }
    else if (image.getAttribute('src') == 'Komodo.jpg') {
        x.innerHTML = 'Gree   20';
    }
    else if (image.getAttribute('src') == 'Leopard.jpg') {
        x.innerHTML = 'Spark  12';
    }
    else if (image.getAttribute('src') == 'Mantis.jpg') {
        x.innerHTML = 'Lightning  7';
    }
    else if (image.getAttribute('src') == 'Neko.jpg') {
        x.innerHTML = 'Botan   6';
    }
    else if (image.getAttribute('src') == 'Pagong.jpg') {
        x.innerHTML = 'Godzill   68';
    }
    else if (image.getAttribute('src') == 'Peko.jpg') {
        x.innerHTML = 'Pekora   4';
    }
    else if (image.getAttribute('src') == 'Polar.jpg') {
        x.innerHTML = 'Joris   40';
    }
    else if (image.getAttribute('src') == 'Wolf.jpg') {
        x.innerHTML = 'Ezekiel   25';
    }
    x.appendChild(img);
    btn();
}
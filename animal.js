function btn() {
    let image = document.getElementById('image');
    let images = ['Beetle.jpg', 'Elephant.jpg', 'Komodo.jpg',
        'Leopard.jpg', 'Mantis.jpg', 'Neko.jpg', 'Pagong.jpg', 'Peko.jpg',
        'Polar.jpg', 'Wolf.jpg'];

    let random = Math.floor(Math.random() * 10);
    image.src = images[random];
    var deftext= "default"
    

    
    if (image.getAttribute('src') == 'Beetle.jpg'){
        deftext= "John" ;
    }
    else if (image.getAttribute('src') == 'Elephant.jpg'){
        deftext = "Jizu" ;
    }
    else if (image.getAttribute('src') == 'Komodo.jpg'){
        deftext = "Gree" ;
    }
    else if (image.getAttribute('src') == 'Leopard.jpg'){
        deftext = "Spark" ;
    }
    else if (image.getAttribute('src') == 'Mantis.jpg'){
        deftext = "Lightning" ;
    }
    else if (image.getAttribute('src') == 'Neko.jpg'){
        deftext = "Botan" ;
    }
    else if (image.getAttribute('src') == 'Pagong.jpg'){
        deftext = "Godzill" ;
    }
    else if (image.getAttribute('src') == 'Peko.jpg'){
        deftext = "Pekora" ;
    }
    else if (image.getAttribute('src') == 'Polar.jpg'){
        deftext = "Joris" ;
    }
    else if (image.getAttribute('src') == 'Wolf.jpg'){
        deftext = "Ezekiel" ;
    }
    else{
        deftext = "Default" ;
    }
    document.getElementById("labelchange").innerHTML = deftext ;
    
}


function displayResult()
{
    var table=document.getElementById("table");
    var row =table.insertRow(1);
    var x=row.insertCell(-1);
    

    var img = document.createElement('img');
    img.src = image.src;
    

    if (img.getAttribute('src')=='Beetle.jpg'){
        x.innerHTML='John';
    }
    else if (image.getAttribute('src')=='Elephant.jpg'){
        x.innerHTML='Jizu';
    }
    else if (image.getAttribute('src')=='Komodo.jpg'){
        x.innerHTML='Gree';
    }
    else if (image.getAttribute('src')=='Leopard.jpg'){
        x.innerHTML='Spark';
    }
    else if (image.getAttribute('src')=='Mantis.jpg'){
        x.innerHTML='Lightning';
    }
    else if (image.getAttribute('src')=='Neko.jpg'){
        x.innerHTML='Botan';
    }
    else if (image.getAttribute('src')=='Pagong.jpg'){
        x.innerHTML='Godzill';
    }
    else if (image.getAttribute('src')=='Peko.jpg'){
        x.innerHTML='Pekora';
    }
    else if (image.getAttribute('src')=='Polar.jpg'){
        x.innerHTML='Joris';
    }
    else if (image.getAttribute('src')=='Wolf.jpg'){
        x.innerHTML='Ezekiel';
    }
    x.appendChild(img);
}
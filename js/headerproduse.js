function loadHeader() {
    document.getElementById('header').className = 'header';
    document.getElementById('header').innerHTML = `
    <div>
  <img src="../imgs/logo.png" alt="error" width="60px"
    height="60px">
    </div>
    <div>
    <a href="../index.html" class="">Acasa</a>
    <a href="../pages/desprenoi.html" class="">Despre noi</a>
    <a href="../pages/galerie.html" class="">Galerie</a>
    
    </div>
    <div>
    <a href="../pages/contacte.html" class="">Contacte</a>
    </div>
    `
}

function loadElements() {
    loadHeader();
}

window.onload = loadElements;



function nume(gtr){
 console. log ('HELLO',nume)
}


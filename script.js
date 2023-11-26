const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOf');
const lamp = document.getElementById('lamp');

function lampOn () {
    lamp.src = './imagens/ligada.jpg';
}

function lampOf (){
    lamp.src = './imagens/desligada.jpg';
}

function lampBroken (){
    lamp.src = './imagens/quebrada.jpg';
}




turnOn.addEventListener('click', lampOn);
turnOf.addEventListener('click', lampOf);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOf);
lamp.addEventListener ('dblclick', lampBroken);
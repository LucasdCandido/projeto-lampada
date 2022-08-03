const lampada = document.querySelector('.lampada');
const ligar = document.querySelector('.ligar');
const desligar = document.querySelector('.desligar');

const ligaLampada = () => {
  lampada.src = './img/ligada.jpg';
  console.log('funciona')
};

const desligaLampada = () => {
  lampada.src = './img/desligada.jpg';
}

const quebraLampada = () => {
  lampada.src = './img/quebrada.jpg'
}



ligar.addEventListener('click', ligaLampada);
lampada.addEventListener('mousemove', ligaLampada);
desligar.addEventListener('click', desligaLampada);
lampada.addEventListener('mouseout', desligaLampada);
lampada.addEventListener('click', quebraLampada)
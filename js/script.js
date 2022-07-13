const sonicao = document.querySelector('.sonicao');
const rock = document.querySelector('.rock');

const jump = () => {
  sonicao.classList.add('jump');

  setTimeout(() => {
    sonicao.classList.remove('jump');
  }, 500);
}

const loop = setInterval(() => {
  
  const rockPosition = rock.offsetLeft;
  const sonicaoPosition = +window.getComputedStyle(sonicao).bottom.replace('px', '')

  if (rockPosition <= 120 && rockPosition > 0 && sonicaoPosition < 80) {

    rock.style.animation = 'none';
    rock.style.left = `${rockPosition}px`;

    sonicao.style.animation = 'none';
    sonicao.style.bottom = `${rockPosition}px`;

    sonicao.src = './imagens/sonicdead.gif';
    sonicao.style.width = '75px'
    sonicao.style.marginLeft = '50px'

    clearInterval(loop);

  }

}, 10);

document.addEventListener('keydown', jump);
// Lógica para el movimiento del personaje
const goku = document.getElementById('goku');

document.addEventListener('keydown', function(event) {
  const speed = 5; // Velocidad de movimiento del personaje

  // Detectar la tecla presionada
  if (event.key === 'ArrowUp') {
    goku.style.backgroundPosition = '0 0'; // Cambiar la posición del sprite para la animación de mover arriba
    goku.style.top = `${goku.offsetTop - speed}px`;
  } else if (event.key === 'ArrowDown') {
    goku.style.backgroundPosition = '0 -64px'; // Cambiar la posición del sprite para la animación de mover abajo
    goku.style.top = `${goku.offsetTop + speed}px`;
  } else if (event.key === 'ArrowLeft') {
    goku.style.backgroundPosition = '0 -128px'; // Cambiar la posición del sprite para la animación de mover a la izquierda
    goku.style.left = `${goku.offsetLeft - speed}px`;
  } else if (event.key === 'ArrowRight') {
    goku.style.backgroundPosition = '0 -192px'; // Cambiar la posición del sprite para la animación de mover a la derecha
    goku.style.left = `${goku.offsetLeft + speed}px`;
  }
});

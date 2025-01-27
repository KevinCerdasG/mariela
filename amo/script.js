// Selecciona el botón y el mensaje
const showMessageBtn = document.getElementById('showMessageBtn');
const message = document.getElementById('message');

// Agrega el evento de clic al botón
showMessageBtn.addEventListener('click', () => {
  // Muestra el mensaje
  message.style.display = 'block';
});

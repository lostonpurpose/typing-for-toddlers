const text = document.querySelector('.type');
document.addEventListener('keyup', (event) => { 
  text.innerText = event.key.toUpperCase();
});


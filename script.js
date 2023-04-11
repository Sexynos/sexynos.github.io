const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('click', () => {
  cursor.classList.add('expand');

  setTimeout(() => {
    cursor.classList.remove('expand');
  }, 500);
});

window.addEventListener("load", function() {
  var logoText = document.querySelector(".logo-text");
  logoText.classList.add("animate");
});